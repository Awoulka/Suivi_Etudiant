 <?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Choix extends CI_Controller {

	public function  __construct()
	{
		parent:: __construct();

		
		if (empty($this->session->id_personnel)) {
			redirect('authentification/');
		}

		//$this ->load->library( 'Pdf' );
		//$this ->load->view( 'view_file' );
	}
	public function acceuil(){
		
			$this->load->view('templates/admin/header.php');
			//$this->load->view('template/salle.php');
			$this->load->view('templates/admin/footer.php');
	
	}

	
	
}

?>
	