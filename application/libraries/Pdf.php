<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use Dompdf\Dompdf;
require_once  APPPATH.'libraries/dompdf/autoload.inc.php';


class Pdf extends CI_Controller 
{
    protected $ci;

	public function __construct()
    {
        //$this->load->helper('url');
       	$this->ci =& get_instance();
    }
    
    
    public function generate($view,$data=array(),$filename='download',$paper='A4',$orientation='landscape')
    { 
    	$dompdf= new Dompdf();
        $html= $this->ci->load->view($view,$data,TRUE);
        $dompdf->loadHtml($html);
		// (Optional) Setup the paper size and orientation
		$dompdf->setPaper($paper, $orientation);
		// Render the HTML as PDF
		$dompdf->render();
	    ob_clean();
	    $dompdf->stream($filename.".pdf", array("Attachment" => FALSE));

        
    }

}
?>
