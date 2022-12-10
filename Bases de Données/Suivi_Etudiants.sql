-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : sam. 10 déc. 2022 à 10:17
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `Suivi_Etudiants`
--

-- --------------------------------------------------------

--
-- Structure de la table `annees_academiques`
--

CREATE TABLE `annees_academiques` (
  `id_annee` int(11) NOT NULL,
  `debut_annee` date NOT NULL,
  `fin_annee` date NOT NULL,
  `rendu_annee` varchar(25) NOT NULL,
  `statut_annee` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `comptes`
--

CREATE TABLE `comptes` (
  `id_compte` int(11) NOT NULL,
  `login` varchar(30) NOT NULL,
  `pass` varchar(30) NOT NULL,
  `personnel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `comptes`
--

INSERT INTO `comptes` (`id_compte`, `login`, `pass`, `personnel_id`) VALUES
(1, 'admin', 'admin', 1),
(2, 'scolarite', '12345', 2),
(3, 'cel_info', '12345', 3);

-- --------------------------------------------------------

--
-- Structure de la table `cycles`
--

CREATE TABLE `cycles` (
  `id_cycle` int(11) NOT NULL,
  `intitule_cycle` varchar(30) NOT NULL,
  `abreviation_cycle` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `cycles`
--

INSERT INTO `cycles` (`id_cycle`, `intitule_cycle`, `abreviation_cycle`) VALUES
(1, 'Licence', 'L'),
(2, 'Master', 'M'),
(3, 'Doctorat', 'D');

-- --------------------------------------------------------

--
-- Structure de la table `dossiers`
--

CREATE TABLE `dossiers` (
  `id_dossier` int(11) NOT NULL,
  `matricule_et` varchar(15) NOT NULL,
  `NPC_id` int(11) NOT NULL,
  `annee_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `etudiants`
--

CREATE TABLE `etudiants` (
  `matricule` varchar(20) NOT NULL,
  `nom_Et` varchar(30) NOT NULL,
  `prenom_Et` varchar(30) DEFAULT NULL,
  `sexe_Et` varchar(10) NOT NULL,
  `date_naiss_Et` varchar(8) NOT NULL,
  `lieu_naiss_Et` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `examens`
--

CREATE TABLE `examens` (
  `id_examen` int(11) NOT NULL,
  `ue_id` int(11) NOT NULL,
  `type_ex_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `facultes`
--

CREATE TABLE `facultes` (
  `id_faculte` int(11) NOT NULL,
  `libele_faculte` varchar(25) NOT NULL,
  `abreviation_faculte` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `facultes`
--

INSERT INTO `facultes` (`id_faculte`, `libele_faculte`, `abreviation_faculte`) VALUES
(1, 'Faculté de Science', 'FSE'),
(4, 'wsdkf', 'wsdfcqdf');

-- --------------------------------------------------------

--
-- Structure de la table `mentions`
--

CREATE TABLE `mentions` (
  `id_mention` int(11) NOT NULL,
  `intitule_mention` varchar(100) NOT NULL,
  `faculte_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `mentions`
--

INSERT INTO `mentions` (`id_mention`, `intitule_mention`, `faculte_id`) VALUES
(1, 'Mathematique et Informatique', 1);

-- --------------------------------------------------------

--
-- Structure de la table `niveaux`
--

CREATE TABLE `niveaux` (
  `id_niveau` int(11) NOT NULL,
  `num_niveau` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `niveaux`
--

INSERT INTO `niveaux` (`id_niveau`, `num_niveau`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Structure de la table `notes`
--

CREATE TABLE `notes` (
  `id_note` int(11) NOT NULL,
  `valeur_note` double NOT NULL,
  `examen_id` int(11) NOT NULL,
  `dossier_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `notes_generales`
--

CREATE TABLE `notes_generales` (
  `id_notes_G` int(11) NOT NULL,
  `note_cc` double NOT NULL,
  `note_tpe` double NOT NULL,
  `note_sn` double NOT NULL,
  `moyenne_note_G` double NOT NULL,
  `dossier_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `NPC`
--

CREATE TABLE `NPC` (
  `id_NPC` int(11) NOT NULL,
  `rendu` varchar(10) NOT NULL,
  `parcour_id` int(11) NOT NULL,
  `cycle_id` int(11) NOT NULL,
  `niveau_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `NPC`
--

INSERT INTO `NPC` (`id_NPC`, `rendu`, `parcour_id`, `cycle_id`, `niveau_id`) VALUES
(1, 'L1Info', 1, 1, 1),
(2, 'L2Info', 1, 1, 2),
(3, 'M1SLED', 3, 2, 1);

-- --------------------------------------------------------

--
-- Structure de la table `NPC_semestre`
--

CREATE TABLE `NPC_semestre` (
  `NPC_id` int(11) NOT NULL,
  `semestre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `parcours`
--

CREATE TABLE `parcours` (
  `id_parcour` int(11) NOT NULL,
  `intitule_parcour` varchar(50) NOT NULL,
  `mention_id` int(11) NOT NULL,
  `abreviation_parcour` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `parcours`
--

INSERT INTO `parcours` (`id_parcour`, `intitule_parcour`, `mention_id`, `abreviation_parcour`) VALUES
(1, 'Informatique', 1, 'Info'),
(2, 'Mathematique', 1, 'Math'),
(3, 'Systèmes et Logiciel en Environnement Distribué', 1, 'SLED');

-- --------------------------------------------------------

--
-- Structure de la table `personnels`
--

CREATE TABLE `personnels` (
  `id_personnel` int(11) NOT NULL,
  `nom_personnel` varchar(30) NOT NULL,
  `prenom_personnel` varchar(30) NOT NULL,
  `faculte_id` int(11) NOT NULL,
  `email_personnel` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `personnels`
--

INSERT INTO `personnels` (`id_personnel`, `nom_personnel`, `prenom_personnel`, `faculte_id`, `email_personnel`) VALUES
(1, 'admin', 'admin', 1, ''),
(2, 'scolarité', 'scolarité', 1, ''),
(3, 'cellule_info', 'cellule_info', 1, '');

-- --------------------------------------------------------

--
-- Structure de la table `posseder`
--

CREATE TABLE `posseder` (
  `poste_id` int(11) NOT NULL,
  `personnel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `posseder`
--

INSERT INTO `posseder` (`poste_id`, `personnel_id`) VALUES
(1, 2),
(2, 3),
(3, 1);

-- --------------------------------------------------------

--
-- Structure de la table `postes`
--

CREATE TABLE `postes` (
  `id_poste` int(11) NOT NULL,
  `libele_poste` varchar(50) NOT NULL,
  `abreviation_poste` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `postes`
--

INSERT INTO `postes` (`id_poste`, `libele_poste`, `abreviation_poste`) VALUES
(1, 'chef de la scolarité', 'scolarite'),
(2, 'chef de la cellule informatique', 'cellule_info'),
(3, 'administrateur', 'admin');

-- --------------------------------------------------------

--
-- Structure de la table `semestres`
--

CREATE TABLE `semestres` (
  `id_semestre` int(11) NOT NULL,
  `num_semestre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `semestres`
--

INSERT INTO `semestres` (`id_semestre`, `num_semestre`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6);

-- --------------------------------------------------------

--
-- Structure de la table `types_ex`
--

CREATE TABLE `types_ex` (
  `id_type_ex` int(11) NOT NULL,
  `libele_type_ex` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `ue`
--

CREATE TABLE `ue` (
  `id_ue` int(11) NOT NULL,
  `intitule_ue` varchar(100) NOT NULL,
  `duree_ue` int(11) NOT NULL,
  `NPC_id` int(11) NOT NULL,
  `semestre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `annees_academiques`
--
ALTER TABLE `annees_academiques`
  ADD PRIMARY KEY (`id_annee`);

--
-- Index pour la table `comptes`
--
ALTER TABLE `comptes`
  ADD PRIMARY KEY (`id_compte`),
  ADD KEY `personnel_id` (`personnel_id`);

--
-- Index pour la table `cycles`
--
ALTER TABLE `cycles`
  ADD PRIMARY KEY (`id_cycle`);

--
-- Index pour la table `dossiers`
--
ALTER TABLE `dossiers`
  ADD PRIMARY KEY (`id_dossier`),
  ADD KEY `matricule_et` (`matricule_et`),
  ADD KEY `NPC_id` (`NPC_id`,`annee_id`),
  ADD KEY `annee_id` (`annee_id`);

--
-- Index pour la table `etudiants`
--
ALTER TABLE `etudiants`
  ADD PRIMARY KEY (`matricule`);

--
-- Index pour la table `examens`
--
ALTER TABLE `examens`
  ADD PRIMARY KEY (`id_examen`),
  ADD KEY `ue_id` (`ue_id`,`type_ex_id`),
  ADD KEY `type_ex_id` (`type_ex_id`);

--
-- Index pour la table `facultes`
--
ALTER TABLE `facultes`
  ADD PRIMARY KEY (`id_faculte`);

--
-- Index pour la table `mentions`
--
ALTER TABLE `mentions`
  ADD PRIMARY KEY (`id_mention`),
  ADD KEY `faculte_id` (`faculte_id`);

--
-- Index pour la table `niveaux`
--
ALTER TABLE `niveaux`
  ADD PRIMARY KEY (`id_niveau`);

--
-- Index pour la table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id_note`),
  ADD KEY `examen_id` (`examen_id`,`dossier_id`),
  ADD KEY `dossier_id` (`dossier_id`);

--
-- Index pour la table `notes_generales`
--
ALTER TABLE `notes_generales`
  ADD PRIMARY KEY (`id_notes_G`),
  ADD KEY `dossier_id` (`dossier_id`);

--
-- Index pour la table `NPC`
--
ALTER TABLE `NPC`
  ADD PRIMARY KEY (`id_NPC`),
  ADD KEY `parcour_id` (`parcour_id`,`cycle_id`,`niveau_id`),
  ADD KEY `cycle_id` (`cycle_id`),
  ADD KEY `niveau_id` (`niveau_id`);

--
-- Index pour la table `NPC_semestre`
--
ALTER TABLE `NPC_semestre`
  ADD KEY `NPC_id` (`NPC_id`,`semestre_id`),
  ADD KEY `semestre_id` (`semestre_id`);

--
-- Index pour la table `parcours`
--
ALTER TABLE `parcours`
  ADD PRIMARY KEY (`id_parcour`),
  ADD KEY `mention_id` (`mention_id`);

--
-- Index pour la table `personnels`
--
ALTER TABLE `personnels`
  ADD PRIMARY KEY (`id_personnel`),
  ADD KEY `faculte_id` (`faculte_id`);

--
-- Index pour la table `posseder`
--
ALTER TABLE `posseder`
  ADD KEY `poste_id` (`poste_id`,`personnel_id`),
  ADD KEY `personnel_id` (`personnel_id`);

--
-- Index pour la table `postes`
--
ALTER TABLE `postes`
  ADD PRIMARY KEY (`id_poste`);

--
-- Index pour la table `semestres`
--
ALTER TABLE `semestres`
  ADD PRIMARY KEY (`id_semestre`);

--
-- Index pour la table `types_ex`
--
ALTER TABLE `types_ex`
  ADD PRIMARY KEY (`id_type_ex`);

--
-- Index pour la table `ue`
--
ALTER TABLE `ue`
  ADD PRIMARY KEY (`id_ue`),
  ADD KEY `NPC_id` (`NPC_id`,`semestre_id`),
  ADD KEY `semestre_id` (`semestre_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `annees_academiques`
--
ALTER TABLE `annees_academiques`
  MODIFY `id_annee` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `comptes`
--
ALTER TABLE `comptes`
  MODIFY `id_compte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `cycles`
--
ALTER TABLE `cycles`
  MODIFY `id_cycle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `dossiers`
--
ALTER TABLE `dossiers`
  MODIFY `id_dossier` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `examens`
--
ALTER TABLE `examens`
  MODIFY `id_examen` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `facultes`
--
ALTER TABLE `facultes`
  MODIFY `id_faculte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `mentions`
--
ALTER TABLE `mentions`
  MODIFY `id_mention` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `niveaux`
--
ALTER TABLE `niveaux`
  MODIFY `id_niveau` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `notes`
--
ALTER TABLE `notes`
  MODIFY `id_note` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `notes_generales`
--
ALTER TABLE `notes_generales`
  MODIFY `id_notes_G` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `NPC`
--
ALTER TABLE `NPC`
  MODIFY `id_NPC` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `parcours`
--
ALTER TABLE `parcours`
  MODIFY `id_parcour` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `personnels`
--
ALTER TABLE `personnels`
  MODIFY `id_personnel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `postes`
--
ALTER TABLE `postes`
  MODIFY `id_poste` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `semestres`
--
ALTER TABLE `semestres`
  MODIFY `id_semestre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `types_ex`
--
ALTER TABLE `types_ex`
  MODIFY `id_type_ex` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `ue`
--
ALTER TABLE `ue`
  MODIFY `id_ue` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comptes`
--
ALTER TABLE `comptes`
  ADD CONSTRAINT `comptes_ibfk_1` FOREIGN KEY (`personnel_id`) REFERENCES `personnels` (`id_personnel`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `dossiers`
--
ALTER TABLE `dossiers`
  ADD CONSTRAINT `dossiers_ibfk_1` FOREIGN KEY (`annee_id`) REFERENCES `annees_academiques` (`id_annee`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dossiers_ibfk_2` FOREIGN KEY (`NPC_id`) REFERENCES `NPC` (`id_NPC`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dossiers_ibfk_3` FOREIGN KEY (`matricule_et`) REFERENCES `etudiants` (`matricule`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `examens`
--
ALTER TABLE `examens`
  ADD CONSTRAINT `examens_ibfk_1` FOREIGN KEY (`type_ex_id`) REFERENCES `types_ex` (`id_type_ex`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `examens_ibfk_2` FOREIGN KEY (`ue_id`) REFERENCES `ue` (`id_ue`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `mentions`
--
ALTER TABLE `mentions`
  ADD CONSTRAINT `mentions_ibfk_1` FOREIGN KEY (`faculte_id`) REFERENCES `facultes` (`id_faculte`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`examen_id`) REFERENCES `examens` (`id_examen`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `notes_ibfk_2` FOREIGN KEY (`dossier_id`) REFERENCES `dossiers` (`id_dossier`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `notes_generales`
--
ALTER TABLE `notes_generales`
  ADD CONSTRAINT `notes_generales_ibfk_1` FOREIGN KEY (`dossier_id`) REFERENCES `dossiers` (`id_dossier`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `NPC`
--
ALTER TABLE `NPC`
  ADD CONSTRAINT `NPC_ibfk_1` FOREIGN KEY (`cycle_id`) REFERENCES `cycles` (`id_cycle`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `NPC_ibfk_2` FOREIGN KEY (`niveau_id`) REFERENCES `niveaux` (`id_niveau`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `NPC_ibfk_3` FOREIGN KEY (`parcour_id`) REFERENCES `parcours` (`id_parcour`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `NPC_semestre`
--
ALTER TABLE `NPC_semestre`
  ADD CONSTRAINT `NPC_semestre_ibfk_1` FOREIGN KEY (`NPC_id`) REFERENCES `NPC` (`id_NPC`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `NPC_semestre_ibfk_2` FOREIGN KEY (`semestre_id`) REFERENCES `semestres` (`id_semestre`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `parcours`
--
ALTER TABLE `parcours`
  ADD CONSTRAINT `parcours_ibfk_1` FOREIGN KEY (`mention_id`) REFERENCES `mentions` (`id_mention`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `personnels`
--
ALTER TABLE `personnels`
  ADD CONSTRAINT `personnels_ibfk_1` FOREIGN KEY (`faculte_id`) REFERENCES `facultes` (`id_faculte`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `posseder`
--
ALTER TABLE `posseder`
  ADD CONSTRAINT `posseder_ibfk_1` FOREIGN KEY (`personnel_id`) REFERENCES `personnels` (`id_personnel`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `posseder_ibfk_2` FOREIGN KEY (`poste_id`) REFERENCES `postes` (`id_poste`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `ue`
--
ALTER TABLE `ue`
  ADD CONSTRAINT `ue_ibfk_1` FOREIGN KEY (`NPC_id`) REFERENCES `NPC` (`id_NPC`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ue_ibfk_2` FOREIGN KEY (`semestre_id`) REFERENCES `semestres` (`id_semestre`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
