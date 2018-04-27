
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
