CREATE TABLE `oc_calendar` (
  `id` mediumint(9) NOT NULL auto_increment,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY  (`id`)
) AUTO_INCREMENT=1 ;