
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
  MODIFY `gift_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
