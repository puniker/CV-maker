-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 29-11-2021 a las 16:28:15
-- Versión del servidor: 10.3.31-MariaDB-0ubuntu0.20.04.1
-- Versión de PHP: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cv-maker`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cv_data_estudios`
--

CREATE TABLE `cv_data_estudios` (
  `id` varchar(40) NOT NULL,
  `target_id` int(4) NOT NULL,
  `titulo` varchar(30) NOT NULL,
  `centro` varchar(20) NOT NULL,
  `lugar` varchar(20) NOT NULL,
  `fecha_inicio` varchar(20) NOT NULL,
  `fecha_fin` varchar(20) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `orden` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cv_data_estudios`
--

INSERT INTO `cv_data_estudios` (`id`, `target_id`, `titulo`, `centro`, `lugar`, `fecha_inicio`, `fecha_fin`, `descripcion`, `orden`) VALUES
('1', 2, 'bachiller', 'colegio basauri', 'basauri', '2000-01-01 00:00:00', '2010-01-01 00:00:00', 'estuve en el cole', '0'),
('2', 2, 'desarrollo apps', 'grado sup', 'bilbao', '2020-01-01 00:00:00', '2020-01-01 00:00:00', 'apredi apps', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cv_data_experiencia`
--

CREATE TABLE `cv_data_experiencia` (
  `id` int(4) NOT NULL,
  `target_id` int(20) NOT NULL,
  `puesto` varchar(30) NOT NULL,
  `Empresa` varchar(20) NOT NULL,
  `lugar` varchar(20) NOT NULL,
  `fecha_inicio` varchar(20) NOT NULL,
  `fecha_fin` varchar(20) NOT NULL,
  `descripción` varchar(70) NOT NULL,
  `orden` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cv_data_experiencia`
--

INSERT INTO `cv_data_experiencia` (`id`, `target_id`, `puesto`, `Empresa`, `lugar`, `fecha_inicio`, `fecha_fin`, `descripción`, `orden`) VALUES
(1, 2, 'Desarrollador de software', 'Dominion Global', 'Bilbao', '2017', '2021', 'Primer trabajo', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cv_data_general`
--

CREATE TABLE `cv_data_general` (
  `id` int(4) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `fecha_nacimiento` varchar(20) NOT NULL DEFAULT current_timestamp(),
  `direccion` varchar(60) NOT NULL,
  `telefono` varchar(9) NOT NULL,
  `lugar_nacimiento` varchar(20) NOT NULL,
  `c_postal` varchar(5) NOT NULL,
  `ciudad_pueblo` varchar(20) NOT NULL,
  `genero` varchar(10) NOT NULL,
  `nacionalidad` varchar(20) NOT NULL,
  `estado_civil` varchar(20) NOT NULL,
  `sitio_web` varchar(50) NOT NULL,
  `linkedin` varchar(50) NOT NULL,
  `twitter` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cv_data_general`
--

INSERT INTO `cv_data_general` (`id`, `nombre`, `apellido`, `email`, `fecha_nacimiento`, `direccion`, `telefono`, `lugar_nacimiento`, `c_postal`, `ciudad_pueblo`, `genero`, `nacionalidad`, `estado_civil`, `sitio_web`, `linkedin`, `twitter`) VALUES
(1, 'adminisa', 'adminnnnn', 'iker.sastre@gmail.-com', '1997-08-08 00:00:00', '7623486', '', '', '', '', '', '', '', '', '', ''),
(2, 'Iker', 'Sastre Antón', 'iker.sastre97@gmail.com', '1997-08-08', 'San Biator', '680983974', 'Barakaldo', '48970', 'basauri', 'Masculino', 'Española', 'En pareja', 'ikersastre.es', 'ikersastreanton', '@ikersastre8');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cv_users`
--

CREATE TABLE `cv_users` (
  `id` int(4) NOT NULL COMMENT 'uniq id del usuario',
  `username` varchar(20) NOT NULL COMMENT 'nombre de usuario',
  `password` varchar(50) NOT NULL COMMENT 'contraseña',
  `status` int(1) NOT NULL COMMENT 'Estado del usuario: 0- deshabilitado, 1-habilitado'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cv_users`
--

INSERT INTO `cv_users` (`id`, `username`, `password`, `status`) VALUES
(1, 'admin', 'admin', 1),
(2, 'puniker', 'admin', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cv_data_estudios`
--
ALTER TABLE `cv_data_estudios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cv_data_experiencia`
--
ALTER TABLE `cv_data_experiencia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cv_data_general`
--
ALTER TABLE `cv_data_general`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cv_users`
--
ALTER TABLE `cv_users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
