/*
SQLyog Ultimate v11.33 (64 bit)
MySQL - 5.7.27-0ubuntu0.16.04.1 : Database - scrapWebsite
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`scrapWebsite` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `scrapWebsite`;

/*Table structure for table `mediumData` */

DROP TABLE IF EXISTS `mediumData`;

CREATE TABLE `mediumData` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(10000) NOT NULL,
  `COUNT` tinyint(4) NOT NULL DEFAULT '1',
  `parameters` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
