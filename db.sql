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

-- Los campos de las tablas deben coincidir con la información solicitada en cada formulario creado para el proyecto. 
-- Debe existir coherencia entre los campos pedidos en el formulario y los datos que almacena la tabla.
