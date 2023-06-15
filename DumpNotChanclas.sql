-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 15, 2023 at 11:23 PM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proyectoIntDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_post` int(10) UNSIGNED DEFAULT NULL,
  `id_usuario` int(10) UNSIGNED DEFAULT NULL,
  `texto` varchar(1000) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id`, `id_post`, `id_usuario`, `texto`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, 'Muy buenas', '2023-04-10 14:35:18', '2023-04-10 14:35:18', NULL),
(2, 1, 2, 'Excelente producto', '2023-04-10 14:36:16', '2023-04-10 14:36:16', NULL),
(3, 1, 3, 'Malisimas!', '2023-04-10 14:36:18', '2023-04-10 14:36:18', NULL),
(4, 1, 4, 'Muy comodas', '2023-04-10 14:36:20', '2023-04-10 14:36:20', NULL),
(5, 2, 1, 'Muy buenas', '2023-04-10 14:36:47', '2023-04-10 14:36:47', NULL),
(6, 2, 2, 'Excelente producto', '2023-04-10 14:36:49', '2023-04-10 14:36:49', NULL),
(7, 2, 3, 'Malisimas!', '2023-04-10 14:36:51', '2023-04-10 14:36:51', NULL),
(8, 2, 4, 'Muy comodas', '2023-04-10 14:36:52', '2023-04-10 14:36:52', NULL),
(9, 3, 1, 'Muy buenas', '2023-04-10 14:37:34', '2023-04-10 14:37:34', NULL),
(10, 3, 2, 'Excelente producto', '2023-04-10 14:37:35', '2023-04-10 14:37:35', NULL),
(11, 3, 3, 'Malisimas!', '2023-04-10 14:37:37', '2023-04-10 14:37:37', NULL),
(12, 3, 4, 'Muy comodas', '2023-04-10 14:37:39', '2023-04-10 14:37:39', NULL),
(13, 4, 1, 'Muy buenas', '2023-04-10 14:37:57', '2023-04-10 14:37:57', NULL),
(14, 4, 2, 'Excelente producto', '2023-04-10 14:37:59', '2023-04-10 14:37:59', NULL),
(15, 4, 3, 'Malisimas!', '2023-04-10 14:38:00', '2023-04-10 14:38:00', NULL),
(16, 4, 4, 'Muy comodas', '2023-04-10 14:38:02', '2023-04-10 14:38:02', NULL),
(17, 5, 1, 'Muy buenas', '2023-04-10 14:38:16', '2023-04-10 14:38:16', NULL),
(18, 5, 2, 'Excelente producto', '2023-04-10 14:38:18', '2023-04-10 14:38:18', NULL),
(19, 5, 3, 'Malisimas!', '2023-04-10 14:38:19', '2023-04-10 14:38:19', NULL),
(20, 5, 4, 'Muy comodas', '2023-04-10 14:38:20', '2023-04-10 14:38:20', NULL),
(21, 6, 1, 'Muy buenas', '2023-04-10 14:39:01', '2023-04-10 14:39:01', NULL),
(22, 6, 2, 'Excelente producto', '2023-04-10 14:39:02', '2023-04-10 14:39:02', NULL),
(23, 6, 3, 'Malisimas!', '2023-04-10 14:39:03', '2023-04-10 14:39:03', NULL),
(24, 6, 4, 'Muy comodas', '2023-04-10 14:39:05', '2023-04-10 14:39:05', NULL),
(25, 7, 1, 'Muy buenas', '2023-04-10 14:39:17', '2023-04-10 14:39:17', NULL),
(26, 7, 2, 'Excelente producto', '2023-04-10 14:39:18', '2023-04-10 14:39:18', NULL),
(27, 7, 3, 'Malisimas!', '2023-04-10 14:39:19', '2023-04-10 14:39:19', NULL),
(28, 7, 4, 'Muy comodas', '2023-04-10 14:39:21', '2023-04-10 14:39:21', NULL),
(29, 8, 1, 'Muy buenas', '2023-04-10 14:39:45', '2023-04-10 14:39:45', NULL),
(30, 8, 2, 'Excelente producto', '2023-04-10 14:39:46', '2023-04-10 14:39:46', NULL),
(31, 8, 3, 'Malisimas!', '2023-04-10 14:39:47', '2023-04-10 14:39:47', NULL),
(32, 8, 4, 'Muy comodas', '2023-04-10 14:39:48', '2023-04-10 14:39:48', NULL),
(33, 9, 1, 'Muy buenas', '2023-04-10 14:40:01', '2023-04-10 14:40:01', NULL),
(34, 9, 2, 'Excelente producto', '2023-04-10 14:40:02', '2023-04-10 14:40:02', NULL),
(35, 9, 3, 'Malisimas!', '2023-04-10 14:40:04', '2023-04-10 14:40:04', NULL),
(36, 9, 4, 'Muy comodas', '2023-04-10 14:40:06', '2023-04-10 14:40:06', NULL),
(37, 10, 1, 'Muy buenas', '2023-04-10 14:40:34', '2023-04-10 14:40:34', NULL),
(38, 10, 2, 'Excelente producto', '2023-04-10 14:40:36', '2023-04-10 14:40:36', NULL),
(39, 10, 3, 'Malisimas!', '2023-04-10 14:40:37', '2023-04-10 14:40:37', NULL),
(40, 10, 4, 'Muy comodas', '2023-04-10 14:40:38', '2023-04-10 14:40:38', NULL),
(41, 3, 15, 'TRMEENDDASSSS', '2023-06-08 19:02:27', '2023-06-08 19:02:27', NULL),
(64, 12, 22, 'Muy comodas', '2023-06-15 23:05:58', '2023-06-15 23:05:58', NULL),
(65, 10, 22, 'No me gustaron', '2023-06-15 23:07:00', '2023-06-15 23:07:00', NULL),
(66, 9, 22, 'No me gustaron', '2023-06-15 23:21:17', '2023-06-15 23:21:17', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_usuario` int(10) UNSIGNED DEFAULT NULL,
  `nombre` varchar(400) NOT NULL,
  `descripcion` text,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `imagen` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `id_usuario`, `nombre`, `descripcion`, `createdAt`, `updatedAt`, `deletedAt`, `imagen`) VALUES
(1, 1, 'nike blazers jumbo', 'Alabadas por muchos por su aspecto y su sensación de resistencia, el básico de armario se actualiza con las Nike Blazer Mid \'77 Jumbo.Aprovecha el look clásico que más te gusta, que ahora cuenta con un talón elástico con textura de pana y unas presillas grandes para que puedas ponértelas y quitártelas fácilmente.El diseño Swoosh extragrande y los cordones enormes añaden un toque divertido', '2023-04-10 14:30:50', '2023-05-29 20:48:48', NULL, 'https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/D/Q/DQ1471-100_0.jpg'),
(2, 2, 'Converse Chuck 70s', 'Para un estilo en el que puedas confiar, las zapatillas Chuck Taylor All Star son un elemento básico de la moda. Las icónicas siluetas de caña alta y baja se mantienen fieles al legado. Esta es la opción que combina con todo, que no te vas a cansar', '2023-04-10 14:30:53', '2023-05-29 20:49:59', NULL, 'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw03ff94f4/products/CO_169953C/CO_169953C-1.JPG'),
(3, 3, 'Golden Goose Star', 'Las zapatillas \'Superstar\' de Golden Goose han sido cepilladas y enceradas a mano para darles la apariencia y la sensación de unos viejos favoritos. Confeccionadas en cuero suave, este par blanco está decorado con la aplicación de estrella característica de la marca. Úsalas durante el fin de semana con una camiseta y unos jeans.', '2023-04-10 14:30:55', '2023-05-29 20:50:35', NULL, 'https://static.goldengoose.com/image/upload/w_auto,c_scale,f_auto,q_auto/v1659111556/Style/ECOMM/GMF00102.F002729-10950'),
(4, 4, 'Nike Jordans mid', 'Inspiradas en las AJ1 originales, las Air Jordan 1 Mid ofrecen a los aficionados la oportunidad de seguir los pasos de MJ. El nuevo color ribetea los materiales clásicos e impecables', '2023-04-10 14:30:57', '2023-05-29 20:51:18', NULL, 'https://cdn.shopify.com/s/files/1/0017/5908/4588/products/599627_01_jpg_1200x.jpg?v=1640680862'),
(5, 5, 'Veja Esplar Low', 'Diseñado en una horma de zapato unisex utilizando tallas europeas, forro técnico hecho de botellas de plástico 100% recicladas. Un estilo minimalista y de líneas limpias, estas zapatillas Veja son un par que combina con todo', '2023-04-10 14:30:59', '2023-05-29 20:52:01', NULL, 'https://www.veja-store.com/media/catalog/product/cache/527447f8cffec2edb3591f96240a2d24/v/e/veja_eo020005_lateral.jpg'),
(6, 1, 'Nike Blazer Low', 'Inspiradas en el look clásico de baloncesto, las zapatillas Nike Blazer Low cuentan con una parte superior de piel y una zona del tobillo de corte bajo para ofrecer comodidad y durabilidad. Confección en autoclave que une la suela exterior con la mediasuela. Para ir al trabajo o disfrutar del fin de semana, luce un look estilizado para todos los días de la semana.', '2023-04-10 14:31:02', '2023-05-29 20:52:34', NULL, 'https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/D/N/DN2158-101_0_8.jpg'),
(7, 2, 'Z&V High Flash', 'Icónicas y esenciales, las zapatillas altas ZV1747 High Flash están disponibles en piel blanca tono sobre tono. Plantilla cuña de 2,5 cm.Este modelo calza normal, te recomendamos que cojas tu talla habitua', '2023-04-10 14:31:05', '2023-05-29 20:53:16', NULL, 'https://www.zadigetvoltaire.com.ar/uploads/picture/image/5338/PSHAT1709F01-1a__1_.jpg'),
(8, 3, 'Z&V High Canvas', 'Las zapatillas de alta gama ZV1747 High Flash están disponibles esta temporada en lona de algodón. Presentan bordes crudos, destellos pespunteados, cordones contrastantes y cierre de cremallera.', '2023-04-10 14:31:09', '2023-05-29 20:53:58', NULL, 'https://us-zadig-et-voltaire.imgix.net/catalog/product/s/w/swsn00405_flash_1_2.jpg'),
(9, 4, 'Off White Orange', 'Zapatillas Off-Court 3.0 de caña alta en blanco con el logotipo de Off-White™ en un lado y un parche de flecha tonal en el otro lado. Detalles de etiquetas naranjas. Suela de goma blanca. Cierre de cordones blancos.', '2023-04-10 14:31:12', '2023-05-29 20:54:39', NULL, 'https://www.mrporter.com/variants/images/42247633208420952/in/w1200_q60.jpg'),
(10, 15, 'Adidas Samba', 'Diseño vintage en colores clásicos, las adidas samba son la combinación perfecta.', '2023-04-10 14:31:15', '2023-06-15 23:09:50', NULL, 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc3416c01bff48249f77a7fd012dd9fd_9366/Zapatillas_Samba_Classic_Blanco_772109_01_standard.jpg'),
(12, 15, 'Nike Jordan Purple', 'Las famosas Nike Jordan en color violeta', '2023-06-12 14:45:56', '2023-06-15 22:58:41', NULL, 'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwebcd2992/products/NIDQ8426-517/NIDQ8426-517-1.JPG'),
(19, 22, 'Adidas Slides', 'En tu cara not chanclas!', '2023-06-15 23:02:06', '2023-06-15 23:02:41', NULL, 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9e4850c6019841138e38a7fa00de8937_9366/Adilette_Slides_Black_280647_01_standard.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(300) NOT NULL,
  `contraseña` varchar(500) NOT NULL,
  `foto_perfil` text,
  `fecha` date DEFAULT NULL,
  `dni` mediumint(9) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `nombre` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `contraseña`, `foto_perfil`, `fecha`, `dni`, `createdAt`, `updatedAt`, `deletedAt`, `nombre`) VALUES
(1, 'pedroper@gmail.com', 'hola123', 'https://img.freepik.com/vector-premium/logotipo-tienda-zapatillas-signo-deporte-atletico-emblema-diseno-tienda-ilustracion-vectorial_266660-539.jpg?w=1060', '2023-02-25', 3647483, '2023-04-10 13:47:06', '2023-06-15 23:17:17', NULL, 'PedroPerez'),
(2, 'pedrito@gmail.com', 'hola246', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sneaker-store-logo-brand-logo-design-template-ea9c8040d69fa064feee3014cb8e9827_screen.jpg?ts=1645976739', '2023-03-10', 3518273, '2023-04-10 13:47:08', '2023-06-15 23:19:02', NULL, 'Pedrito1'),
(3, 'oficial@nike.com', 'hola345', 'https://media.tycsports.com/files/2022/06/14/440400/las-20-mejores-fotos-de-perfil-para-tu-cuenta-de-free-fire_w862.webp', '2023-04-10', 3546578, '2023-04-10 13:47:11', '2023-06-15 23:16:33', NULL, 'Nike Store'),
(4, 'shoesworld@gmail.com', 'hola346', 'https://media.tycsports.com/files/2022/06/14/440395/las-20-mejores-fotos-de-perfil-para-tu-cuenta-de-free-fire_w862.webp', '2023-01-10', 3546478, '2023-04-10 13:47:13', '2023-06-15 23:15:38', NULL, 'Shoes World'),
(5, 'todozapas@gmail.com', 'hola246', 'https://www.digitary.net/wp-content/uploads/2021/07/Generic-Profile-Image.png', '2022-01-10', 3536478, '2023-04-10 13:47:15', '2023-06-15 23:13:46', NULL, 'TodoZapasCo'),
(9, 'userejemplo1@gmail.com', '$2a$10$PbKUAbObzCGLXxVEwhPNMOsaEqyjxkq8/xCg2euiyXi98siD0ikfy', 'https://www.digitary.net/wp-content/uploads/2021/07/Generic-Profile-Image.png', '2008-06-05', 786876, '2023-05-29 15:15:37', '2023-06-15 23:13:49', NULL, NULL),
(10, 'userejemplo2@gmail.com', '$2a$10$BY7Y8HCYuFHHmE/CJ8nxeu2mpyodfq17qfqYE6oFhEOhnD4mXk6Ba', 'ssss', '1000-01-01', 21212, '2023-05-29 19:52:57', '2023-05-29 19:52:57', NULL, NULL),
(11, 'manuka@gmail.com', '$2a$10$zp1p9IISfkGBbZSqP6B5VOqSPustfHhA1B6Dt.TBP/S9Y0rW2tMNC', 'https://media.gq.com/photos/60d21928430ae505071c3801/master/w_1600,c_limit/SNEAKER_GUIDE_BUYABLES_0436_V4_final.jpg', '2003-07-10', 4321, '2023-05-29 21:49:57', '2023-06-15 22:06:57', NULL, 'MANUKAvende'),
(12, 'userejemplo3@gmail.com', '$2a$10$rSKp0eWZdSnSWkK.IX3mQOo1dmk9Dz.S3SLr8F7a1.5tjlR35.4.S', 'ss', '2023-05-17', 32, '2023-05-29 21:50:28', '2023-05-29 21:50:28', NULL, NULL),
(13, 'juanba@g.com', '$2a$10$TZNrXKYTiMJJ0vR89DWySeKw6pCoVlkOcQN/ZirUPaWPMcPQF3Qbm', 'aSAssa', '1000-12-12', 1212, '2023-05-31 12:25:11', '2023-05-31 12:25:11', NULL, NULL),
(14, 'userejemplo4@gmail.com', '$2a$10$RQpBkj6KM6cD.37/sjJ4MOoquekKHQtS0KSMlide6KqoqbfUxRFui', '', '1222-12-12', 1212, '2023-06-05 12:42:54', '2023-06-05 12:42:54', NULL, NULL),
(15, 'tuti@g.com', '$2a$10$azu8m3/o6kBmEKTIu9byd.dhRqvP/TyR9PHHgn9qWhIqsKJmQAcRW', 'fototot', '1222-12-12', 121212, '2023-06-05 15:01:54', '2023-06-15 22:57:23', NULL, 'Tuti22'),
(22, 'mirta@gmail.com', '$2a$10$qHhria0TH1hyLFolUHXILuEXbVTC8DISHj7jQr5UakT6E55.X5gjS', 'https://thumbs.dreamstime.com/z/woman-line-icon-user-businesswoman-person-sign-vector-female-silhouette-symbol-geometric-shapes-random-cross-elements-linear-137823663.jpg', '1212-12-12', 1234, '2023-06-15 23:00:38', '2023-06-15 23:20:42', NULL, 'MirtaChanclas');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_post` (`id_post`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
