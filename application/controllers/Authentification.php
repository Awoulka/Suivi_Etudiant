<?php

class Authentification extends CI_Controller
{


	public function __construct(){

		parent::__construct();
		$this->load->helpers('url');
		$this->load->model('compte');
		$this->load->library('session');

		$this->encryption->initialize(array('driver' => 'mcrypt'));
	}	
	
	public function index(){

		$this->load->helpers('url');
		//$this->load->view('templates/Authentification');
		$this->load->view('templates/page-login');
		
	

	}
	public function poste() {

		$this->load->helpers('url');

		$this->load->view('poste');
	}
	public function connexion(){


		$login=$this->input->post('login');
		$password=$this->input->post('pass');

		
		$parametre=array('login'=>$login);
		$v=$this->compte->verifier($parametre);
		if($v==1){

				$p=$this->compte->select_id(array('login'=>$login));
				
				if ( $password == $p[0]->pass) {

							$resultat=$this->compte->select_id($parametre);
							
							if (!empty($resultat)) {
								$this->session->set_userdata('id_personnel',$resultat[0]->personnel_id) ;
							}else{
								$this->session->set_userdata('id_personnel','') ;
							}
							
							$c=array('posseder.personnel_id'=> $this->session->id_personnel);

							$resultat1=$this->compte->select_personnel($c);
						
							$this->session->set_userdata('nom_personnel',$resultat1[0]->nom_personnel) ;
							$this->session->set_userdata('faculte_id',$resultat1[0]->faculte_id) ;
							$this->session->set_userdata('faculte',$resultat1[0]->libele_faculte) ;
							$this->session->set_userdata('postes',$resultat1);

							

		                    foreach ($this->session->postes as  $value) {
                
		                     		if ($value->abreviation_poste=="scolarite"){

		        							redirect('/scolarite/Dashboard/acceuil');
		                  

		                     		}
		                     		elseif ($value->abreviation_poste=="cellule_info"){

		        							echo "cellule_info";
		        							die();
		                  

		                     		}
		                     		elseif ($value->abreviation_poste=="admin"){

		        							redirect('/admin/Choix/acceuil');
		                  

		                     		}

                 			}
             			
		 		}
				else{
					$this->session->set_flashdata('message',"le mot de passe de l'utilisateur est faux");
	                	redirect('');
				}

			
			
		 }
		 else {
		 	 $this->session->set_flashdata("message","le Pseudo n'est pas valide");
             redirect('');
		
			$data['message']=1;
			$this->load->view('templates/Authentification',$data);
			
		}
	}
	public function deconnexion(){
		$this->session->sess_destroy();


		redirect('authentification/');
		
	

	}

}