
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
