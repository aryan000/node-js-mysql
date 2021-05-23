-- Creating database: covid_repo
create database covid_repo;

-- Creating Patient/User table

CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,  
  `name` varchar(150) NOT NULL,  
  `age` int NOT NULL,
  `date_of_birth` datetime(6) NOT NULL,
  `email` varchar(254) DEFAULT NULL,  
  `date_joined` datetime(6) DEFAULT NULL,
  `user_id` varchar(20) NOT NULL,
  `secQues1` varchar(100) DEFAULT NULL,
  `secQues2` varchar(100) DEFAULT NULL,
  `secQues3` varchar(100) DEFAULT NULL,
  `secAns1` varchar(100) DEFAULT NULL,
  `secAns2` varchar(100) DEFAULT NULL,
  `secAns3` varchar(100) DEFAULT NULL,
  `phoneNumber` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- covidseverityapp.covidapp_comorbidity definition

CREATE TABLE `covidapp_comorbidity` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `diabetes` BOOLEAN DEFAULT false,
  `copd` BOOLEAN DEFAULT false,
  `renal` BOOLEAN DEFAULT false,
  `pvd` BOOLEAN DEFAULT false,
  `chf` BOOLEAN DEFAULT false,
  `dementia` BOOLEAN DEFAULT false,
  `cancer` BOOLEAN DEFAULT false,
  `stroke` BOOLEAN DEFAULT false,
  `hepatic` BOOLEAN DEFAULT false,
  `heart` BOOLEAN DEFAULT false,
  `ulcer` BOOLEAN DEFAULT false,
  `paralysis` BOOLEAN DEFAULT false,
  `aids` BOOLEAN DEFAULT false,
  `arthritis` BOOLEAN DEFAULT false,
  `user_id` varchar(20) NOT NULL,
  `dateFirstSymptoms` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `covidapp_comorbidity_user_id_27e35ade_fk_auth_user_id` (`user_id`),
  CONSTRAINT `covidapp_comorbidity_user_id_27e35ade_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`user_id`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- covidseverityapp.covidapp_reportvalues definition

CREATE TABLE `covidapp_reportvalues` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ferritin` double DEFAULT NULL,
  `pct` double DEFAULT NULL,
  `ddimer` double DEFAULT NULL,
  `crp` double DEFAULT NULL,
  `ldh` double DEFAULT NULL,
  `il6` double DEFAULT NULL,
  `lymphocyte` double DEFAULT NULL,
  `neutrophil` double DEFAULT NULL,
  `lympho_neutro_ratio` double DEFAULT NULL,
  `bilirubin` double DEFAULT NULL,
  `temperature` double DEFAULT NULL,
  `oxygensat` double DEFAULT NULL,
  `blood_pressure` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `date_added` date NOT NULL,
  `date_report` date NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `rtpcrCycleNumber` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `covidapp_reportvalues_user_id_4cd52302_fk_auth_user_id` (`user_id`),
  CONSTRAINT `covidapp_reportvalues_user_id_4cd52302_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- covidseverityapp.covidapp_symptoms definition

CREATE TABLE `covidapp_symptoms` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `sore_throat` BOOLEAN DEFAULT false,
  `diarhea` BOOLEAN DEFAULT false,
  `fever` BOOLEAN DEFAULT false,
  `dry_cough` BOOLEAN DEFAULT false,
  `body_ache` BOOLEAN DEFAULT false,
  `headache` BOOLEAN DEFAULT false,
  `runny_nose` BOOLEAN DEFAULT false,
  `nausea` BOOLEAN DEFAULT false,
  `vomiting` BOOLEAN DEFAULT false,
  `anosmia` BOOLEAN DEFAULT false,
  `ageusia` BOOLEAN DEFAULT false,
  `rashes` BOOLEAN DEFAULT false,
  `conjunctivitis` BOOLEAN DEFAULT false,
  `date` date NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `covidseverity` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `covidapp_symptoms_user_id_fbeefed8_fk_auth_user_id` (`user_id`),
  CONSTRAINT `covidapp_symptoms_user_id_fbeefed8_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`user_id`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
