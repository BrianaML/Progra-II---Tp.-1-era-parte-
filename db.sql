CREATE SCHEMA trabajo_integrador_db;

USE trabajo_integrador_db;

CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE, 
    contrasenia VARCHAR(255) NOT NULL, 
    fecha_nacimiento DATE NOT NULL,
    dni INT NOT NULL UNIQUE, 
    foto_perfil VARCHAR(255) DEFAULT "",
    createDat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 
);

CREATE TABLE productos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	img_producto VARCHAR(255) DEFAULT "",
    nombre VARCHAR(100) NOT NULL, 
    descripcion VARCHAR(255) NOT NULL, 
    createDat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP, 
    usuario_id INT UNSIGNED NOT NULL, 
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(100) NOT NULL,
    createDat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    usuario_id INT UNSIGNED NOT NULL, 
    producto_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- 5 usuarios, 10 posteos, 3 comentarios (per posteo) > modulo de datos

INSERT INTO usuarios(id, email, contrasenia, fecha_nacimiento, dni, foto_perfil, createDat, updatedAt, deletedAt)
VALUES 
(DEFAULT, "cdechazal@udesa.edu.ar", "12345678", "2006-02-04", 46051577, "fotot0.jpg", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL),
(DEFAULT, "juan.perez@mail.com", "claveSegura1", "2000-05-10", 40123456, "foto1.jpg", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL),
(DEFAULT, "maria.lopez@mail.com", "password2024", "1998-11-23", 39234567, "foto2.png", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL),
(DEFAULT, "lucas.gomez@mail.com", "lucasPass9", "2002-07-15", 41234567, "foto3.jpeg", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL),
(DEFAULT, "sofia.ramirez@mail.com", "sofi4Life", "1995-03-28", 38234567, "foto4.jpg", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL);

INSERT INTO productos(id, img_producto, nombre, descripcion, createDat, updatedAt, deletedAt, usuario_id)
VALUES
(DEFAULT, "Superstar.avif", "Adidas Superstar", "Zapatillas cómodas y a la moda", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 1),
(DEFAULT, "NikeAirMax90.avif", "Nike Air Max 90", "Zapatillas clásicas con gran amortiguación", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 2),
(DEFAULT, "converse.jpg", "Converse Chuck Taylor High", "Estilo retro para todos los días", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 1),
(DEFAULT, "pumaRosa.webp", "Puma Suede Classic", "Diseño urbano con un toque vintage", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 2),
(DEFAULT, "NewBalance.jpg", "New Balance 574", "Comodidad y estilo en cada paso", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 2),
(DEFAULT, "reebokclubc.jpg", "Reebok Club C 85", "Elegancia casual para uso diario", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 2),
(DEFAULT, "vansoldskool.jpg", "Vans Old Skool", "Perfectas para skaters y fans del streetwear", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 5),
(DEFAULT, "jordan1.jpg", "Air Jordan 1 Retro", "Icónicas zapatillas de básquet y cultura urbana", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 5),
(DEFAULT, "asicsgel.jpg", "Asics Gel-Lyte III", "Tecnología de amortiguación y diseño único", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 5),
(DEFAULT, "filaDisruptor.jpg", "Fila Disruptor II", "Estilo chunky con mucha personalidad", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 5);

INSERT INTO comentarios(id, texto, createDat, updatedAt, deletedAt, usuario_id, producto_id)
VALUES
-- Producto 1
(DEFAULT, "Estas zapas me salvan siempre", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 4, 1),
(DEFAULT, "Muy buena calidad y super cómodas.", '2025-04-07 12:01:00', '2025-04-07 12:01:00', NULL, 5, 1),
(DEFAULT, "Son mi primera opción siempre.", '2025-04-07 12:02:00', '2025-04-07 12:02:00', NULL, 3, 1),

-- Producto 2
(DEFAULT, "¡Son muy cómodas para correr!", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 5, 2),
(DEFAULT, "No me hicieron doler nunca los pies.", '2025-04-07 12:01:00', '2025-04-07 12:01:00', NULL, 2, 2),
(DEFAULT, "Perfectas para entrenar.", '2025-04-07 12:02:00', '2025-04-07 12:02:00', NULL, 1, 2),

-- Producto 3
(DEFAULT, "Clásico que nunca falla.", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 3, 3),
(DEFAULT, "Siempre quise tener unas así.", '2025-04-07 12:01:00', '2025-04-07 12:01:00', NULL, 4, 3),
(DEFAULT, "Me gusta mucho el diseño retro.", '2025-04-07 12:02:00', '2025-04-07 12:02:00', NULL, 1, 3),

-- Producto 4
(DEFAULT, "Las uso todo el tiempo. Re durables.", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 2, 4),
(DEFAULT, "Van con cualquier look.", '2025-04-07 12:01:00', '2025-04-07 12:01:00', NULL, 3, 4),
(DEFAULT, "Aguantan un montón el uso diario.", '2025-04-07 12:02:00', '2025-04-07 12:02:00', NULL, 5, 4),

-- Producto 5
(DEFAULT, "¡Perfectas para caminar por la ciudad!", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 1, 5),
(DEFAULT, "Livianas y super cómodas.", '2025-04-07 12:01:00', '2025-04-07 12:01:00', NULL, 2, 5),
(DEFAULT, "No me canso de usarlas.", '2025-04-07 12:02:00', '2025-04-07 12:02:00', NULL, 4, 5),

-- Producto 6
(DEFAULT, "Me encantan con jeans claros.", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 4, 6),
(DEFAULT, "El color es lo más.", '2025-04-07 12:01:00', '2025-04-07 12:01:00', NULL, 1, 6),
(DEFAULT, "Van con todo, super recomendadas.", '2025-04-07 12:02:00', '2025-04-07 12:02:00', NULL, 2, 6),

-- Producto 7
(DEFAULT, "Re cómodas y combinan con todo.", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 5, 7),
(DEFAULT, "El diseño me encanta.", '2025-04-07 12:01:00', '2025-04-07 12:01:00', NULL, 3, 7),
(DEFAULT, "Las volvería a comprar sin dudar.", '2025-04-07 12:02:00', '2025-04-07 12:02:00', NULL, 4, 7),

-- Producto 8
(DEFAULT, "Son una joya. Me las pongo solo en ocasiones especiales.", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 2, 8),
(DEFAULT, "Me gusta mucho cómo brillan.", '2025-04-07 12:01:00', '2025-04-07 12:01:00', NULL, 1, 8),
(DEFAULT, "Recibo siempre elogios cuando las uso.", '2025-04-07 12:02:00', '2025-04-07 12:02:00', NULL, 5, 8),

-- Producto 9
(DEFAULT, "Geniales para el gimnasio.", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 3, 9),
(DEFAULT, "No resbalan nada.", '2025-04-07 12:01:00', '2025-04-07 12:01:00', NULL, 4, 9),
(DEFAULT, "Ideales para entrenar fuerte.", '2025-04-07 12:02:00', '2025-04-07 12:02:00', NULL, 1, 9),

-- Producto 10
(DEFAULT, "Me encanta el diseño grueso, son distintas a todo.", '2025-04-07 12:00:00', '2025-04-07 12:00:00', NULL, 1, 10),
(DEFAULT, "Siento que suman un montón de estilo.", '2025-04-07 12:01:00', '2025-04-07 12:01:00', NULL, 3, 10),
(DEFAULT, "Súper originales, no se ven mucho.", '2025-04-07 12:02:00', '2025-04-07 12:02:00', NULL, 2, 10);