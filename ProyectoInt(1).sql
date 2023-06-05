CREATE SCHEMA proyectoIntDB;

USE proyectoIntDB;

CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(300) NOT NULL UNIQUE,
    contraseña VARCHAR(500) NOT NULL,
    foto_perfil TEXT,
    fecha DATE,
    dni MEDIUMINT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL
    nombre VARCHAR(500)
);

CREATE TABLE productos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT UNSIGNED,
    nombre VARCHAR(400) NOT NULL,
    descripcion TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL,
    
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_post INT UNSIGNED,
    id_usuario INT UNSIGNED,
    texto VARCHAR(1000) NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL,
    
    FOREIGN KEY (id_post) REFERENCES productos(id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

INSERT INTO usuarios 
VALUES (default, "aaa@gmail.com" , "hola123", "miFoto", "2023-02-25", 3647483, default, default, default);
INSERT INTO usuarios
VALUES (DEFAULT, "bb@gmail.com", "hola246", "foto2", "2023-03-10", 3518273, default, default, default);
INSERT INTO usuarios 
values (default, "ccc@gmail.com", "hola345", "foto3", "2023-04-10", 3546578, default, default, default);
INSERT INTO usuarios
values (default, "ddd@gmail.com", "hola346", "foto4", "2023-01-10", 3546478, default, default, default) ;
INSERT INTO usuarios
values (default, "eee@gmail.com", "hola246", "foto5", "2022-01-10", 3536478, default, default, default) ;

INSERT INTO productos
VALUES (default, 1, "nike blazers jumbo", "Alabadas por muchos por su aspecto y su sensación de resistencia, el básico de armario se actualiza con las Nike Blazer Mid '77 Jumbo.Aprovecha el look clásico que más te gusta, que ahora cuenta con un talón elástico con textura de pana y unas presillas grandes para que puedas ponértelas y quitártelas fácilmente.El diseño Swoosh extragrande y los cordones enormes añaden un toque divertido", default, default, default);
INSERT INTO productos
VALUES (default, 2,  "Converse Chuck 70s", "Para un estilo en el que puedas confiar, las zapatillas Chuck Taylor All Star son un elemento básico de la moda. Las icónicas siluetas de caña alta y baja se mantienen fieles al legado. Esta es la opción que combina con todo, que no te vas a cansar", default, default, default);
INSERT INTO productos 
VALUES (default, 3, "Golden Goose Star", "Las zapatillas 'Superstar' de Golden Goose han sido cepilladas y enceradas a mano para darles la apariencia y la sensación de unos viejos favoritos. Confeccionadas en cuero suave, este par blanco está decorado con la aplicación de estrella característica de la marca. Úsalas durante el fin de semana con una camiseta y unos jeans.", default, default, default);
INSERT INTO productos
VALUES (default, 4, "Nike Jordans mid", "Inspiradas en las AJ1 originales, las Air Jordan 1 Mid ofrecen a los aficionados la oportunidad de seguir los pasos de MJ. El nuevo color ribetea los materiales clásicos e impecables", default, default, default);
INSERT INTO productos 
VALUES (default, 5, "Veja Esplar Low", "Diseñado en una horma de zapato unisex utilizando tallas europeas, forro técnico hecho de botellas de plástico 100% recicladas. Un estilo minimalista y de líneas limpias, estas zapatillas Veja son un par que combina con todo", default, default, default);
INSERT INTO productos 
VALUES (default, 1, "Nike Blazer Low", "Inspiradas en el look clásico de baloncesto, las zapatillas Nike Blazer Low cuentan con una parte superior de piel y una zona del tobillo de corte bajo para ofrecer comodidad y durabilidad. Confección en autoclave que une la suela exterior con la mediasuela. Para ir al trabajo o disfrutar del fin de semana, luce un look estilizado para todos los días de la semana.", default, default, default);
INSERT INTO productos 
VALUES (default, 2, "Z&V High Flash", "Icónicas y esenciales, las zapatillas altas ZV1747 High Flash están disponibles en piel blanca tono sobre tono. Plantilla cuña de 2,5 cm.Este modelo calza normal, te recomendamos que cojas tu talla habitua", default, default, default);
INSERT INTO productos
VALUES (default, 3, "Z&V High Canvas", "Las zapatillas de alta gama ZV1747 High Flash están disponibles esta temporada en lona de algodón. Presentan bordes crudos, destellos pespunteados, cordones contrastantes y cierre de cremallera.", default, default, default);
INSERT INTO productos 
VALUES (default, 4, "Off White Orange", "Zapatillas Off-Court 3.0 de caña alta en blanco con el logotipo de Off-White™ en un lado y un parche de flecha tonal en el otro lado. Detalles de etiquetas naranjas. Suela de goma blanca. Cierre de cordones blancos.", default, default, default);
INSERT INTO productos 
VALUES (default, 5, "Adidas Samba", "Inspiradas en los colores de Argentina, estas zapatillas adidas Samba Team combinan las 3 tiras blancas con una parte superior de cuero sintético verde bosque. El escudo del equipo en la lengüeta muestra el orgullo que sentís cada vez que te las ponés. Además, si las das vuelta vas a ver la clásica suela exterior de caucho desarrollada por primera vez para el entrenamiento de fútbol en 1949.", default, default, default);

INSERT INTO comentarios
VALUES (default, 1, 1, "Muy buenas", default, default, default);
INSERT INTO comentarios
VALUES (default, 1, 2, "Excelente producto", default, default, default);
INSERT INTO comentarios
VALUES (default, 1, 3, "Malisimas!", default, default, default);
INSERT INTO comentarios
VALUES (default, 1, 4, "Muy comodas", default, default, default);
INSERT INTO comentarios
VALUES (default, 2, 1, "Muy buenas", default, default, default);
INSERT INTO comentarios
VALUES (default, 2, 2, "Excelente producto", default, default, default);
INSERT INTO comentarios
VALUES (default, 2, 3, "Malisimas!", default, default, default);
INSERT INTO comentarios
VALUES (default, 2, 4, "Muy comodas", default, default, default);
INSERT INTO comentarios
VALUES (default, 3, 1, "Muy buenas", default, default, default);
INSERT INTO comentarios
VALUES (default, 3, 2, "Excelente producto", default, default, default);
INSERT INTO comentarios
VALUES (default, 3, 3, "Malisimas!", default, default, default);
INSERT INTO comentarios
VALUES (default, 3, 4, "Muy comodas", default, default, default);
INSERT INTO comentarios
VALUES (default, 4, 1, "Muy buenas", default, default, default);
INSERT INTO comentarios
VALUES (default, 4, 2, "Excelente producto", default, default, default);
INSERT INTO comentarios
VALUES (default, 4, 3, "Malisimas!", default, default, default);
INSERT INTO comentarios
VALUES (default, 4, 4, "Muy comodas", default, default, default);
INSERT INTO comentarios
VALUES (default, 5, 1, "Muy buenas", default, default, default);
INSERT INTO comentarios
VALUES (default, 5, 2, "Excelente producto", default, default, default);
INSERT INTO comentarios
VALUES (default, 5, 3, "Malisimas!", default, default, default);
INSERT INTO comentarios
VALUES (default, 5, 4, "Muy comodas", default, default, default);
INSERT INTO comentarios
VALUES (default, 6, 1, "Muy buenas", default, default, default);
INSERT INTO comentarios
VALUES (default, 6, 2, "Excelente producto", default, default, default);
INSERT INTO comentarios
VALUES (default, 6, 3, "Malisimas!", default, default, default);
INSERT INTO comentarios
VALUES (default, 6, 4, "Muy comodas", default, default, default);
INSERT INTO comentarios
VALUES (default, 7, 1, "Muy buenas", default, default, default);
INSERT INTO comentarios
VALUES (default, 7, 2, "Excelente producto", default, default, default);
INSERT INTO comentarios
VALUES (default, 7, 3, "Malisimas!", default, default, default);
INSERT INTO comentarios
VALUES (default, 7, 4, "Muy comodas", default, default, default);
INSERT INTO comentarios
VALUES (default, 8, 1, "Muy buenas", default, default, default);
INSERT INTO comentarios
VALUES (default, 8, 2, "Excelente producto", default, default, default);
INSERT INTO comentarios
VALUES (default, 8, 3, "Malisimas!", default, default, default);
INSERT INTO comentarios
VALUES (default, 8, 4, "Muy comodas", default, default, default);
INSERT INTO comentarios
VALUES (default, 9, 1, "Muy buenas", default, default, default);
INSERT INTO comentarios
VALUES (default, 9, 2, "Excelente producto", default, default, default);
INSERT INTO comentarios
VALUES (default, 9, 3, "Malisimas!", default, default, default);
INSERT INTO comentarios
VALUES (default, 9, 4, "Muy comodas", default, default, default);
INSERT INTO comentarios
VALUES (default, 10, 1, "Muy buenas", default, default, default);
INSERT INTO comentarios
VALUES (default, 10, 2, "Excelente producto", default, default, default);
INSERT INTO comentarios
VALUES (default, 10, 3, "Malisimas!", default, default, default);
INSERT INTO comentarios
VALUES (default, 10, 4, "Muy comodas", default, default, default);
