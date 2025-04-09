let data = {
    usuario: [
        {
            email: "cdechazal@udesa.edu.ar",
            usuario: "cdechazal",
            contrasenia: "12345678",
            fecha_nacimiento: "2006-02-04",
            dni: 46051577,
            foto_perfil: "default-image.png"
        },
        {
            email: "juan.perez@mail.com",
            usuario: "juan.perez",
            contrasenia: "claveSegura1",
            fecha_nacimiento: "2000-05-10",
            dni: 40123456,
            foto_perfil: "foto1.jpg"
        },
        {
            email: "maria.lopez@mail.com",
            usuario: "maria.lopez",
            contrasenia: "password2024",
            fecha_nacimiento: "1998-11-23",
            dni: 39234567,
            foto_perfil: "foto2.png"
        },
        {
            email: "lucas.gomez@mail.com",
            usuario: "lucas.gomez",
            contrasenia: "lucasPass9",
            fecha_nacimiento: "2002-07-15",
            dni: 41234567,
            foto_perfil: "foto3.jpeg"
        },
        {
            email: "sofia.ramirez@mail.com",
            usuario: "sofia.ramirez",
            contrasenia: "sofi4Life",
            fecha_nacimiento: "1995-03-28",
            dni: 38234567,
            foto_perfil: "foto4.jpg"
        }
    ],
    productos: [
        {
            imagen: "Superstar.avif",
            nombre: "Adidas Superstar",
            descripcion: "Zapatillas cómodas y a la moda",
            comentarios: [
                {
                    nombre_usuario: "lucas.gomez",
                    texto: "Estas zapas me salvan siempre",
                    imagen_perfil: "foto3.jpeg"
                },
                {
                    nombre_usuario: "sofia.ramirez",
                    texto: "Muy buena calidad y super cómodas.",
                    imagen_perfil: "foto4.jpg"
                },
                {
                    nombre_usuario: "maria.lopez",
                    texto: "Son mi primera opción siempre.",
                    imagen_perfil: "foto2.png"
                }
            ]
        },
        {
            imagen: "NikeAirMax90.avif",
            nombre: "Nike Air Max 90",
            descripcion: "Zapatillas clásicas con gran amortiguación",
            comentarios: [
                {
                    nombre_usuario: "sofia.ramirez",
                    texto: "¡Son muy cómodas para correr!",
                    imagen_perfil: "foto4.jpg"
                },
                {
                    nombre_usuario: "juan.perez",
                    texto: "No me hicieron doler nunca los pies.",
                    imagen_perfil: "foto1.jpg"
                },
                {
                    nombre_usuario: "cdechazal",
                    texto: "Perfectas para entrenar.",
                    imagen_perfil: "fotot0.jpg"
                }
            ]
        },
        {
            imagen: "converse.jpg",
            nombre: "Converse Chuck Taylor High",
            descripcion: "Estilo retro para todos los días",
            comentarios: [
                {
                    nombre_usuario: "maria.lopez",
                    texto: "Clásico que nunca falla.",
                    imagen_perfil: "foto2.png"
                },
                {
                    nombre_usuario: "lucas.gomez",
                    texto: "Siempre quise tener unas así.",
                    imagen_perfil: "foto3.jpeg"
                },
                {
                    nombre_usuario: "cdechazal",
                    texto: "Me gusta mucho el diseño retro.",
                    imagen_perfil: "fotot0.jpg"
                }
            ]
        },
        {
            imagen: "pumaRosa.webp",
            nombre: "Puma Suede Classic",
            descripcion: "Diseño urbano con un toque vintage",
            comentarios: [
                {
                    nombre_usuario: "juan.perez",
                    texto: "Las uso todo el tiempo. Re durables.",
                    imagen_perfil: "foto1.jpg"
                },
                {
                    nombre_usuario: "maria.lopez",
                    texto: "Van con cualquier look.",
                    imagen_perfil: "foto2.png"
                },
                {
                    nombre_usuario: "sofia.ramirez",
                    texto: "Aguantan un montón el uso diario.",
                    imagen_perfil: "foto4.jpg"
                }
            ]
        },
        {
            imagen: "NewBalance.jpg",
            nombre: "New Balance 574",
            descripcion: "Comodidad y estilo en cada paso",
            comentarios: [
                {
                    nombre_usuario: "cdechazal",
                    texto: "¡Perfectas para caminar por la ciudad!",
                    imagen_perfil: "fotot0.jpg"
                },
                {
                    nombre_usuario: "juan.perez",
                    texto: "Livianas y super cómodas.",
                    imagen_perfil: "foto1.jpg"
                },
                {
                    nombre_usuario: "lucas.gomez",
                    texto: "No me canso de usarlas.",
                    imagen_perfil: "foto3.jpeg"
                }
            ]
        },
        {
            imagen: "reebokclubc.jpg",
            nombre: "Reebok Club C 85",
            descripcion: "Elegancia casual para uso diario",
            comentarios: [
                {
                    nombre_usuario: "lucas.gomez",
                    texto: "Me encantan con jeans claros.",
                    imagen_perfil: "foto3.jpeg"
                },
                {
                    nombre_usuario: "maria.lopez",
                    texto: "El color es lo más.",
                    imagen_perfil: "foto2.png"
                },
                {
                    nombre_usuario: "juan.perez",
                    texto: "Van con todo, super recomendadas.",
                    imagen_perfil: "foto1.jpg"
                }
            ]
        },
        {
            imagen: "vansoldskool.jpg",
            nombre: "Vans Old Skool",
            descripcion: "Perfectas para skaters y fans del streetwear",
            comentarios: [
                {
                    nombre_usuario: "sofia.ramirez",
                    texto: "Re cómodas y combinan con todo.",
                    imagen_perfil: "foto4.jpg"
                },
                {
                    nombre_usuario: "maria.lopez",
                    texto: "El diseño me encanta.",
                    imagen_perfil: "foto2.png"
                },
                {
                    nombre_usuario: "lucas.gomez",
                    texto: "Las volvería a comprar sin dudar.",
                    imagen_perfil: "foto3.jpeg"
                }
            ]
        },
        {
            imagen: "jordan1.jpg",
            nombre: "Air Jordan 1 Retro",
            descripcion: "Icónicas zapatillas de básquet y cultura urbana",
            comentarios: [
                {
                    nombre_usuario: "juan.perez",
                    texto: "Son una joya. Me las pongo solo en ocasiones especiales.",
                    imagen_perfil: "foto1.jpg"
                },
                {
                    nombre_usuario: "cdechazal",
                    texto: "Me gusta mucho cómo brillan.",
                    imagen_perfil: "fotot0.jpg"
                },
                {
                    nombre_usuario: "sofia.ramirez",
                    texto: "Recibo siempre elogios cuando las uso.",
                    imagen_perfil: "foto4.jpg"
                }
            ]
        },
        {
            imagen: "asicsgel.jpg",
            nombre: "Asics Gel-Lyte III",
            descripcion: "Tecnología de amortiguación y diseño único",
            comentarios: [
                {
                    nombre_usuario: "maria.lopez",
                    texto: "Geniales para el gimnasio.",
                    imagen_perfil: "foto2.png"
                },
                {
                    nombre_usuario: "lucas.gomez",
                    texto: "No resbalan nada.",
                    imagen_perfil: "foto3.jpeg"
                },
                {
                    nombre_usuario: "juan.perez",
                    texto: "Ideales para entrenar fuerte.",
                    imagen_perfil: "foto1.jpg"
                }
            ]
        },
        {
            imagen: "filadisruptor.jpg",
            nombre: "Fila Disruptor II",
            descripcion: "Estilo chunky con mucha personalidad",
            comentarios: [
                {
                    nombre_usuario: "cdechazal",
                    texto: "Me encanta el diseño grueso, son distintas a todo.",
                    imagen_perfil: "fotot0.jpg"
                },
                {
                    nombre_usuario: "maria.lopez",
                    texto: "Siento que suman un montón de estilo.",
                    imagen_perfil: "foto2.png"
                },
                {
                    nombre_usuario: "juan.perez",
                    texto: "Súper originales, no se ven mucho.",
                    imagen_perfil: "foto1.jpg"
                }
            ]
        }]};


module.exports = data;