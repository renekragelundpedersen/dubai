<?php
session_start();
@include_once("connect.php"); 
$txtCode=isset($_REQUEST['q'])?$_REQUEST['q']:"";
if( $_SESSION['security_number'] == $txtCode && !empty($_SESSION['security_number'] ) ) 
{
echo 1;
}
else
{
echo 2;
}
?>