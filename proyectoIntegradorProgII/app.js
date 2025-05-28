var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');
const db = require('./database/models');

var indexRouter = require('./routes/index');
var productRouter = require("./routes/products")
var usersRouter = require("./routes/users")

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({ secret: "zapelle",
				resave: false,
				saveUninitialized: true }
      ));

app.use(function(req, res, next) {
	res.locals.usuarioLogged = req.session.usuarioLogged
	return next();
});

app.use(function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  if (req.session.usuarioLogged) {
    res.locals.isLogged = true;
    res.locals.usuario = req.session.usuarioLogged;
    return next();
  }

  if (req.cookies.usuarioEmail) {
    db.usuario.findOne({ where: { email: req.cookies.usuarioEmail } })
      .then(usuario => {
        if (usuario) {
          req.session.usuarioLogged = {
            id: usuario.id,
            email: usuario.email,
            nombre_usuario: usuario.nombre_usuario
          };
          res.locals.isLogged = true;
          res.locals.usuario = req.session.usuarioLogged;
        }
        return next();
      });
  } else {
    return next();
  }
})

app.use('/', indexRouter);
app.use("/product", productRouter)
app.use("/users", usersRouter)
app.use('/users', require('./routes/users'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;