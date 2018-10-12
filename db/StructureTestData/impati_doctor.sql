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
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `doctor` (
  `idDoctor` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `last_name` text NOT NULL,
  `phone` text NOT NULL,
  `dpi` text NOT NULL,
  `address` text NOT NULL,
  `blocked` tinyint(1) NOT NULL,
  `age` int(11) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `configured` tinyint(1) NOT NULL,
  `id_clinic` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `id_avatar` int(11) NOT NULL,
  `id_country` int(11) NOT NULL,
  `active` int(11) NOT NULL,
  PRIMARY KEY (`idDoctor`),
  KEY `id_clinic` (`id_clinic`),
  KEY `id_rol` (`id_rol`),
  KEY `id_avatar` (`id_avatar`),
  KEY `id_country` (`id_country`),
  CONSTRAINT `doctor_ibfk_1` FOREIGN KEY (`id_clinic`) REFERENCES `clinic` (`idClinic`),
  CONSTRAINT `doctor_ibfk_2` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`idRol`),
  CONSTRAINT `doctor_ibfk_3` FOREIGN KEY (`id_avatar`) REFERENCES `avatar` (`idAvatar`),
  CONSTRAINT `doctor_ibfk_4` FOREIGN KEY (`id_country`) REFERENCES `country` (`idCountry`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (1,'Kenneth','Moriel','23324565','2315687416465','8va calle zona 10',0,35,'kenmo@gmail.com','password',1,1,1,1,1,1),(2,'Kevin','Ochoa','65486823','568468962354','9na calle zona 10',0,25,'kechoa@gmail.com','password',1,1,1,2,1,1),(3,'Jhon','Tellheimer','6578965','568468962354','9ta calle zona 10',0,40,'kechoa@gmail.com','password',1,1,1,3,2,1);
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
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
