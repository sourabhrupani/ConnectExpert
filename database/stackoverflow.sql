-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 11, 2018 at 02:31 AM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `stackoverflow`
--

-- --------------------------------------------------------

--
-- Table structure for table `ceanswer`
--

CREATE TABLE IF NOT EXISTS `ceanswer` (
  `CEA_id` int(100) NOT NULL AUTO_INCREMENT,
  `CEQ_id` int(100) NOT NULL,
  `E_id` int(100) NOT NULL,
  `Solution` varchar(500) NOT NULL,
  `Snippet` varchar(500) NOT NULL,
  PRIMARY KEY (`CEA_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `ceanswer`
--

INSERT INTO `ceanswer` (`CEA_id`, `CEQ_id`, `E_id`, `Solution`, `Snippet`) VALUES
(1, 11, 2, 'hyper text markup language', ''),
(2, 13, 6, 'It is used for designing webpages ', ''),
(3, 13, 4, 'css is use for desgning the webpages ', '');

-- --------------------------------------------------------

--
-- Table structure for table `cequestion`
--

CREATE TABLE IF NOT EXISTS `cequestion` (
  `CEQ_id` int(100) NOT NULL AUTO_INCREMENT,
  `S_userid` varchar(100) NOT NULL,
  `S_name` varchar(100) NOT NULL,
  `Question` varchar(500) NOT NULL,
  PRIMARY KEY (`CEQ_id`),
  UNIQUE KEY `Question` (`Question`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `cequestion`
--

INSERT INTO `cequestion` (`CEQ_id`, `S_userid`, `S_name`, `Question`) VALUES
(11, '1', 'Purvesh', 'full form of html?'),
(12, '4', 'saurabhN', 'what is the use of sublime?'),
(13, '7', 'zhihan', 'use of css?');

-- --------------------------------------------------------

--
-- Table structure for table `civanswer`
--

CREATE TABLE IF NOT EXISTS `civanswer` (
  `CIVA_id` int(100) NOT NULL AUTO_INCREMENT,
  `CIVQ_id` int(100) NOT NULL,
  `E_id` int(100) NOT NULL,
  `Solution` varchar(500) NOT NULL,
  `Snippet` varchar(500) NOT NULL,
  PRIMARY KEY (`CIVA_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1114 ;

--
-- Dumping data for table `civanswer`
--

INSERT INTO `civanswer` (`CIVA_id`, `CIVQ_id`, `E_id`, `Solution`, `Snippet`) VALUES
(1111, 111, 2, 'Concrete slab are constructed to provide flat, useful surfaces. It is a horizontal structural component, with top and bottom surfaces parallel or near so.', ''),
(1112, 112, 3, 'hoe,head pan,masonary trowel', ''),
(1113, 113, 4, 'Civil Engineers plan, design, and supervise the construction of facilities essential to modern life like space satellites and launching facilities, offshore structures, bridges, buildings, tunnels, highways, transit systems, dams, airports, harbors, water supply system and wastewater treatment plants', '');

-- --------------------------------------------------------

--
-- Table structure for table `civquestion`
--

CREATE TABLE IF NOT EXISTS `civquestion` (
  `CIVQ_id` int(100) NOT NULL AUTO_INCREMENT,
  `S_userid` varchar(100) NOT NULL,
  `S_name` varchar(100) NOT NULL,
  `Question` varchar(500) NOT NULL,
  PRIMARY KEY (`CIVQ_id`),
  UNIQUE KEY `Question` (`Question`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=114 ;

--
-- Dumping data for table `civquestion`
--

INSERT INTO `civquestion` (`CIVQ_id`, `S_userid`, `S_name`, `Question`) VALUES
(111, '3', 'chinese', 'how we made a slabe?'),
(112, '5', 'Rajat', 'name the instrument used in civil engineering?'),
(113, '6', 'Kaushik', 'what is civil engineering?');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE IF NOT EXISTS `department` (
  `Dept_id` int(100) NOT NULL AUTO_INCREMENT,
  `Dept_name` varchar(500) NOT NULL,
  PRIMARY KEY (`Dept_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=107 ;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`Dept_id`, `Dept_name`) VALUES
(101, 'Mech/Automobile'),
(102, 'Civil'),
(103, 'It/Cse'),
(104, 'Electrical'),
(105, 'Aeronautics'),
(106, 'Mechatronics');

-- --------------------------------------------------------

--
-- Table structure for table `ecanswer`
--

CREATE TABLE IF NOT EXISTS `ecanswer` (
  `ECA_id` int(100) NOT NULL AUTO_INCREMENT,
  `ECQ_id` int(100) NOT NULL,
  `E_id` int(100) NOT NULL,
  `Solution` varchar(500) NOT NULL,
  `Snippet` varchar(500) NOT NULL,
  PRIMARY KEY (`ECA_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `ecanswer`
--

INSERT INTO `ecanswer` (`ECA_id`, `ECQ_id`, `E_id`, `Solution`, `Snippet`) VALUES
(1, 11112, 5, 'A potentiometer is a three-terminal resistor with a sliding or rotating contact that forms an adjustable voltage divider. If only two terminals are used, one end and the wiper, it acts as a variable resistor or rheostat.', ''),
(2, 11113, 2, 'multimeter', ''),
(3, 11111, 4, 'In STAR connection, the starting or finishing ends (Similar ends) of three phases(coils) are connected together to form the neutral point. A common wire is taken out from the neutral point which is called Neutral.There is no such connection in Delta network.', '');

-- --------------------------------------------------------

--
-- Table structure for table `ecquestion`
--

CREATE TABLE IF NOT EXISTS `ecquestion` (
  `ECQ_id` int(100) NOT NULL AUTO_INCREMENT,
  `S_userid` varchar(100) NOT NULL,
  `S_name` varchar(100) NOT NULL,
  `Question` varchar(500) NOT NULL,
  PRIMARY KEY (`ECQ_id`),
  UNIQUE KEY `Question` (`Question`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11114 ;

--
-- Dumping data for table `ecquestion`
--

INSERT INTO `ecquestion` (`ECQ_id`, `S_userid`, `S_name`, `Question`) VALUES
(11111, '2', 'Pinakin', 'how star connection works ?'),
(11112, '1', 'Purvesh', 'what is poteniometer ?'),
(11113, '6', 'Kaushik', 'what is used to mesaure resistance of any body ?');

-- --------------------------------------------------------

--
-- Table structure for table `expert`
--

CREATE TABLE IF NOT EXISTS `expert` (
  `E_id` int(100) NOT NULL AUTO_INCREMENT,
  `E_name` text NOT NULL,
  `E_point` int(1) NOT NULL,
  `Dept_id` varchar(100) NOT NULL,
  `Euser_id` varchar(100) NOT NULL,
  `E_password` varchar(100) NOT NULL,
  PRIMARY KEY (`E_id`),
  UNIQUE KEY `Euser_id` (`Euser_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `expert`
--

INSERT INTO `expert` (`E_id`, `E_name`, `E_point`, `Dept_id`, `Euser_id`, `E_password`) VALUES
(1, 'ABC', 4, 'Mech/Automobile', 'abc@gmail.com', '123456'),
(2, 'XYZ', 8, 'Civil', 'xyz@gmail.com', '6789'),
(3, 'PQR', 9, 'Civil', 'pqr@gmail.com', 'abcde8'),
(4, 'Haresh', 5, 'IT/Cse', 'haresh@gmail.com', 'haresh@12'),
(5, 'Bhide', 6, 'Electrical', 'bhie@gmail.com', 'bhie123'),
(6, 'Shreyans', 8, 'Mechatronics', 'shrey@gmail.com', 'hsgjdjg556'),
(7, 'Chahal', 8, 'Aeronautics', 'chahal@gmail.com', 'chachal@12');

-- --------------------------------------------------------

--
-- Table structure for table `meanswer`
--

CREATE TABLE IF NOT EXISTS `meanswer` (
  `MEA_id` int(100) NOT NULL AUTO_INCREMENT,
  `MEQ_id` int(100) NOT NULL,
  `E_id` int(100) NOT NULL,
  `Solution` varchar(500) NOT NULL,
  `Snippet` varchar(500) NOT NULL,
  PRIMARY KEY (`MEA_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=800 ;

--
-- Dumping data for table `meanswer`
--

INSERT INTO `meanswer` (`MEA_id`, `MEQ_id`, `E_id`, `Solution`, `Snippet`) VALUES
(788, 122, 1, 'a disc or short cylinder fitting closely within a tube in which it moves up and down against a liquid or gas, used in an internal combustion engine to derive motion, or in a pump to impart motion.', ''),
(789, 121, 5, 'a mechanical device using suction or pressure to raise or move liquids, compress gases, or force air into inflatable objects such as tyres.', ''),
(799, 123, 2, 'A clutch is a mechanical device which engages and disengages power transmission especially from driving shaft to driven shaft.', '');

-- --------------------------------------------------------

--
-- Table structure for table `mequestion`
--

CREATE TABLE IF NOT EXISTS `mequestion` (
  `MEQ_id` int(100) NOT NULL AUTO_INCREMENT,
  `S_userid` varchar(100) NOT NULL,
  `S_name` varchar(100) NOT NULL,
  `Question` varchar(500) NOT NULL,
  PRIMARY KEY (`MEQ_id`),
  UNIQUE KEY `Question` (`Question`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=124 ;

--
-- Dumping data for table `mequestion`
--

INSERT INTO `mequestion` (`MEQ_id`, `S_userid`, `S_name`, `Question`) VALUES
(121, '6', 'Kaushik', 'what is pump?'),
(122, '1', 'Purvesh', 'what is piston?'),
(123, '4', 'saurabhN', 'how clutch works ?');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE IF NOT EXISTS `student` (
  `S_id` int(100) NOT NULL AUTO_INCREMENT,
  `S_name` varchar(100) NOT NULL,
  `S_userid` varchar(100) NOT NULL,
  `S_password` varchar(100) NOT NULL,
  `S_point` int(1) NOT NULL,
  PRIMARY KEY (`S_id`),
  UNIQUE KEY `S_userid` (`S_userid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`S_id`, `S_name`, `S_userid`, `S_password`, `S_point`) VALUES
(1, 'Purvesh', 'purvesh@gmail.com', 'Purvesh@12', 8),
(2, 'Pinakin', 'pinu@gmail.com', 'pinu@12', 8),
(3, 'chinese', 'chini@gmail.com', 'chini@12', 9),
(4, 'saurabhN', 'sr@gmail.com', 'Sr@12', 9),
(5, 'Rajat', 'rajo@gmail.com', 'Rajo@12', 9),
(6, 'Kaushik', 'kaush@gmail.com', 'kaushik@12', 8),
(7, 'zhihan', 'zhhh@mail.com', 'jjjshsj@12', 5);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `U_ID` int(11) NOT NULL AUTO_INCREMENT,
  `FNAME` varchar(250) NOT NULL,
  `LNAME` varchar(250) NOT NULL,
  `EMAIL` varchar(250) NOT NULL,
  `PASS` varchar(8) NOT NULL,
  `DESIGNATION` varchar(250) NOT NULL,
  `DOJ` date NOT NULL,
  PRIMARY KEY (`U_ID`),
  UNIQUE KEY `EMAIL` (`EMAIL`),
  UNIQUE KEY `EMAIL_2` (`EMAIL`),
  UNIQUE KEY `EMAIL_3` (`EMAIL`),
  UNIQUE KEY `EMAIL_4` (`EMAIL`),
  UNIQUE KEY `EMAIL_5` (`EMAIL`),
  UNIQUE KEY `EMAIL_6` (`EMAIL`),
  UNIQUE KEY `EMAIL_7` (`EMAIL`),
  UNIQUE KEY `EMAIL_8` (`EMAIL`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`U_ID`, `FNAME`, `LNAME`, `EMAIL`, `PASS`, `DESIGNATION`, `DOJ`) VALUES
(1, 's', 'ajs', 'asdjk@asdk.com', '123456', 'STUDENT', '2018-03-11'),
(2, 'adsjk', 'ak', 'jl@jk.com', '789456', 'STUDENT', '2018-03-11'),
(6, 'asf', 'afd', 'ads', 'afds', 'FACULTY', '2018-03-11');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
