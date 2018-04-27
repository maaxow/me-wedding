-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  ven. 27 avr. 2018 à 06:02
-- Version du serveur :  5.6.38
-- Version de PHP :  7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `me_wedding`
--
CREATE DATABASE IF NOT EXISTS `me_wedding` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `me_wedding`;

-- --------------------------------------------------------

--
-- Structure de la table `gift`
--
-- Création :  mer. 25 avr. 2018 à 18:45
--

CREATE TABLE `gift` (
  `gift_id` int(11) NOT NULL,
  `gift_name` varchar(255) NOT NULL,
  `gift_description` varchar(255) DEFAULT NULL,
  `gift_total` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `gift_participant`
--
-- Création :  mer. 25 avr. 2018 à 19:13
--

CREATE TABLE `gift_participant` (
  `participant_id` int(11) NOT NULL,
  `gift_id` int(11) NOT NULL,
  `participant_name` varchar(255) NOT NULL,
  `participant_amount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `guest`
--
-- Création :  lun. 26 fév. 2018 à 21:39
--

CREATE TABLE `guest` (
  `id` int(11) NOT NULL,
  `firstname` text NOT NULL,
  `lastname` text NOT NULL,
  `email` text,
  `phone_number` text,
  `address` text,
  `post_code` text,
  `city` text,
  `country` text,
  `present` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `guest`
--

INSERT INTO `guest` (`id`, `firstname`, `lastname`, `email`, `phone_number`, `address`, `post_code`, `city`, `country`, `present`) VALUES
(1, 'Maxime', 'Rose', 'maxime.rose@hotmail.fr', '0123456789', '13 rue', '59000', 'LILLE', 'FRANCE', 1),
(2, 'Elodie', 'Traulet', 'elodie.traulet@gmail.com', '0123456789', '13rue', '59000', 'LILLE', 'FRANCE', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `gift`
--
ALTER TABLE `gift`
  ADD PRIMARY KEY (`gift_id`);

--
-- Index pour la table `gift_participant`
--
ALTER TABLE `gift_participant`
  ADD PRIMARY KEY (`participant_id`),
  ADD KEY `gift_id` (`gift_id`);

--
-- Index pour la table `guest`
--
ALTER TABLE `guest`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `gift`
--
ALTER TABLE `gift`
  MODIFY `gift_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `gift_participant`
--
ALTER TABLE `gift_participant`
  MODIFY `participant_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `guest`
--
ALTER TABLE `guest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `gift_participant`
--
ALTER TABLE `gift_participant`
  ADD CONSTRAINT `gift_participant_ibfk_1` FOREIGN KEY (`gift_id`) REFERENCES `gift` (`gift_id`);
