-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Mer 02 Mai 2018 à 17:30
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `me_wedding`
--

-- --------------------------------------------------------

--
-- Structure de la table `family`
--
-- Création :  Jeu 01 Mars 2018 à 23:03
-- Dernière modification :  Ven 02 Mars 2018 à 00:03
--

DROP TABLE IF EXISTS `family`;
CREATE TABLE IF NOT EXISTS `family` (
  `id_family` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `password_tmp` varchar(255) NOT NULL,
  PRIMARY KEY (`id_family`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `gift`
--
-- Création :  Mer 02 Mai 2018 à 17:19
-- Dernière modification :  Mer 02 Mai 2018 à 17:19
--

DROP TABLE IF EXISTS `gift`;
CREATE TABLE IF NOT EXISTS `gift` (
  `gift_id` int(11) NOT NULL,
  `gift_name` varchar(255) NOT NULL,
  `gift_description` varchar(255) DEFAULT NULL,
  `gift_total` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `gift_participant`
--
-- Création :  Mer 02 Mai 2018 à 17:19
--

DROP TABLE IF EXISTS `gift_participant`;
CREATE TABLE IF NOT EXISTS `gift_participant` (
  `participant_id` int(11) NOT NULL,
  `gift_id` int(11) NOT NULL,
  `participant_name` varchar(255) NOT NULL,
  `participant_amount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `guest`
--
-- Création :  Ven 23 Février 2018 à 11:02
-- Dernière modification :  Sam 03 Mars 2018 à 22:58
--

DROP TABLE IF EXISTS `guest`;
CREATE TABLE IF NOT EXISTS `guest` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `post_code` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `present` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `guest_family`
--
-- Création :  Jeu 01 Mars 2018 à 23:08
-- Dernière modification :  Ven 02 Mars 2018 à 00:08
-- Dernière vérification :  Jeu 01 Mars 2018 à 23:08
--

DROP TABLE IF EXISTS `guest_family`;
CREATE TABLE IF NOT EXISTS `guest_family` (
  `id_guest` int(11) NOT NULL,
  `id_family` int(11) NOT NULL,
  KEY `id_family` (`id_family`),
  KEY `id_guest` (`id_guest`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--
-- Création :  Mar 06 Février 2018 à 12:53
-- Dernière modification :  Mar 06 Février 2018 à 13:53
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
