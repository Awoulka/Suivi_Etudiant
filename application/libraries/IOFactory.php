<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once("PHPExcel/IOFactory.php");

    class IOFactory extends PHPExcel_IOFactory
    {
    	
    	function __construct()
    	{
    		parent::__construct();
    }

}
?>