-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-04-2025 a las 00:52:40
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `escuela`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `id` int(2) DEFAULT NULL,
  `nombre` varchar(19) DEFAULT NULL,
  `apellidos` varchar(20) DEFAULT NULL,
  `nacimiento` varchar(10) DEFAULT NULL,
  `promedio` int(2) DEFAULT NULL,
  `sexo` varchar(1) DEFAULT NULL,
  `idEscuela` int(1) DEFAULT NULL,
  `idSalon` int(1) DEFAULT NULL,
  `idCurso` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`id`, `nombre`, `apellidos`, `nacimiento`, `promedio`, `sexo`, `idEscuela`, `idSalon`, `idCurso`) VALUES
(1, 'Adrian Jesus', 'Aceves Pastor', '1998-12-02', 5, 'M', 1, 2, 3),
(2, 'Adriana', 'Acevedo Hernandez', '1996-10-04', 7, 'F', 2, 1, 2),
(3, 'Alejandro', 'Aceves Lopez de Nava', '1999-09-06', 9, 'M', 3, 2, 1),
(4, 'Alejandro', 'Acosta Garcia', '1995-08-08', 4, 'M', 1, 3, 2),
(5, 'Alicia', 'Acosta Baeza', '1991-07-10', 6, 'F', 2, 1, 3),
(6, 'Alicia Maria', 'Acosta Garcia', '1980-06-12', 8, 'F', 3, 2, 1),
(7, 'Ana Lilia', 'Acuna Gallareta', '1978-05-11', 10, 'F', 1, 3, 2),
(8, 'Arturo', 'Adame Gomez', '1984-04-09', 5, 'M', 2, 1, 3),
(9, 'Benjamin', 'Aguado Medina', '1998-04-07', 7, 'M', 3, 2, 1),
(10, 'Blanca Araceli', 'Aguario Albarran', '1995-03-06', 9, 'M', 1, 3, 2),
(11, 'Carmen Julieta', 'Aguilar Tellez', '1993-02-06', 4, 'F', 2, 1, 3),
(12, 'Diana', 'Aguilar Casillas', '1991-03-05', 6, 'F', 3, 2, 1),
(13, 'Edgar', 'Aguilar Flores', '1989-04-03', 8, 'M', 1, 3, 2),
(14, 'Edmundo Rafael', 'Aguilar Galvan', '1970-06-02', 10, 'M', 2, 1, 3),
(15, 'Elvira', 'Aguilar De Llano', '1989-07-04', 5, 'F', 3, 2, 1),
(16, 'Erika', 'Aguilar Castro', '1988-09-07', 7, 'F', 1, 3, 2),
(17, 'Fernanda', 'Aguilar Ramirez', '1978-07-09', 9, 'F', 2, 1, 3),
(18, 'Francisco Alejandro', 'Escobar Diaz', '1999-11-01', 4, 'M', 3, 2, 1),
(19, 'Gabriel', 'Acevedo Hernandez', '1997-12-03', 6, 'M', 1, 3, 2),
(20, 'Hector', 'Aceves Pulido', '1993-11-05', 8, 'M', 2, 1, 3),
(21, 'Irais', 'Aceves Alvarado', '1994-09-07', 10, 'F', 3, 2, 1),
(22, 'Jose Luis', 'Acosta Gonzalez', '1992-08-09', 5, 'M', 1, 3, 2),
(23, 'Jose Maria', 'Acosta Moctezuma', '1990-07-11', 7, 'M', 2, 1, 3),
(24, 'Josefina', 'Acosta Aguirre', '1981-06-12', 9, 'F', 3, 2, 1),
(25, 'Juan Jesus', 'Adame Garcia', '1979-05-10', 4, 'M', 1, 3, 2),
(26, 'Julio Cesar', 'Adams Huitron', '1978-04-08', 6, 'M', 2, 1, 3),
(27, 'Laura Patricia', 'Aguado ', '1996-05-05', 8, 'F', 3, 2, 1),
(28, 'Monica', 'Aguayo Labastida', '1994-03-07', 10, 'F', 1, 3, 2),
(29, 'Monica', 'Aguilar Ochoa', '1992-02-07', 5, 'F', 2, 1, 3),
(30, 'Nora Karina', 'Aguilar Ramirez', '1989-03-04', 7, 'F', 3, 2, 1),
(31, 'Pavel Alfonso', 'Aguilar Rendon', '1979-05-02', 9, 'M', 1, 3, 2),
(32, 'Roberto Carlos', 'Aguilar Gomez Tagle', '1988-05-03', 4, 'M', 2, 1, 3),
(33, 'Tania Gabriela', 'Aguilar Pedrero', '1977-08-06', 6, 'F', 3, 2, 1),
(34, 'Victoria Eugenia', 'Aguilar Sanchez', '1989-07-08', 8, 'F', 1, 3, 2),
(35, 'Virginia', 'Aguilar Flores', '1998-11-10', 10, 'F', 2, 1, 3);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
