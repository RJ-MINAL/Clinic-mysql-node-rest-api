-- MySQL dump 10.13  Distrib 5.7.23, for Linux (x86_64)
--
-- Host: localhost    Database: impati
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient` (
  `idPatient` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `last_name` text NOT NULL,
  `email` text NOT NULL,
  `phone` text NOT NULL,
  `address` text NOT NULL,
  `dpi` text NOT NULL,
  `inscription_date` text NOT NULL,
  `age` int(11) NOT NULL,
  `id_avatar` int(11) NOT NULL,
  `id_country` int(11) NOT NULL,
  `id_clinic` int(11) NOT NULL,
  `id_ocupation` int(11) NOT NULL,
  `active` int(11) NOT NULL,
  PRIMARY KEY (`idPatient`),
  KEY `id_clinic` (`id_clinic`),
  KEY `id_ocupation` (`id_ocupation`),
  KEY `id_avatar` (`id_avatar`),
  KEY `id_country` (`id_country`),
  CONSTRAINT `patient_ibfk_1` FOREIGN KEY (`id_clinic`) REFERENCES `clinic` (`idClinic`),
  CONSTRAINT `patient_ibfk_2` FOREIGN KEY (`id_ocupation`) REFERENCES `ocupation` (`idOcupation`),
  CONSTRAINT `patient_ibfk_3` FOREIGN KEY (`id_avatar`) REFERENCES `avatar` (`idAvatar`),
  CONSTRAINT `patient_ibfk_4` FOREIGN KEY (`id_country`) REFERENCES `country` (`idCountry`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (1,'Olivia Marie','Whites Lex','correo@correo.com','58594212','3era avenida Lote 54 zona 6','2304193123131','2018-05-19',25,2,1,1,2,1),(2,'Ken','Bon','KenBon@gmail.com','56456578','address paciente','235465784545','12-01-18',16,2,1,1,1,1),(3,'Paciente3','Apellido','paciente3@gmail.com','56456578','address paciente','235465784545','12-01-18',37,2,1,1,1,0);
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-12  0:20:49
