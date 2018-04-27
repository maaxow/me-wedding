
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

--
-- Déchargement des données de la table `gift`
--

INSERT INTO `gift` (`gift_id`, `gift_name`, `gift_description`, `gift_total`) VALUES
(1, 'toto', 'max', 5),
(2, 'Drone', 'Drone pour faire des videos cool', 900),
(3, 'efzretr', 'moiutfygouh', 9876);
