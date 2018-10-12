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
-- Table structure for table `history_action`
--

DROP TABLE IF EXISTS `history_action`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `history_action` (
  `idHistoryAction` int(11) NOT NULL AUTO_INCREMENT,
  `date` text NOT NULL,
  `comment` text NOT NULL,
  `photo` text NOT NULL,
  `active` int(11) NOT NULL,
  `id_doctor` int(11) NOT NULL,
  `id_action` int(11) NOT NULL,
  PRIMARY KEY (`idHistoryAction`),
  KEY `id_doctor` (`id_doctor`),
  KEY `id_action` (`id_action`),
  CONSTRAINT `history_action_ibfk_1` FOREIGN KEY (`id_doctor`) REFERENCES `doctor` (`idDoctor`),
  CONSTRAINT `history_action_ibfk_2` FOREIGN KEY (`id_action`) REFERENCES `action` (`idAction`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history_action`
--

LOCK TABLES `history_action` WRITE;
/*!40000 ALTER TABLE `history_action` DISABLE KEYS */;
INSERT INTO `history_action` VALUES (1,'01/01/2018','Todo esta bien','https://www.bristolgate.com/wp-content/uploads/2018/09/orionthemes-placeholder-image.png',1,1,1),(2,'11/11/2018','NADA esta bien','https://www.bristolgate.com/wp-content/uploads/2018/09/orionthemes-placeholder-image.png',1,1,1);
/*!40000 ALTER TABLE `history_action` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-12  0:20:50
