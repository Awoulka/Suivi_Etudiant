 <?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {

	public function  __construct()
	{
		parent:: __construct();

		$this->load->model('Admin_model', 'model');

		
		if (empty($this->session->id_personnel)) {
			redirect('authentification/');
		}

		//$this ->load->library( 'Pdf' );
		//$this ->load->view( 'view_file' );
	}

	   public function user_page($id='')
	{

        if(empty($this->session->id_personnel))
			{
			   redirect('Authentification/'); 
			}
        //$data['blogs']=$this->model->getUser();
        //$data['pos']=$this->model->getPostebyPerso($id);
		
		$this->load->view('templates/admin/header');
     	$this->load->view('templates/admin/user.php');
     	$this->load->view('templates/admin/footer');
	}

	public function add_user()
	{
       if(empty($this->session->id_personnel))
			{
			   redirect('Authentification/'); 
			}
		// $data['blogs']=$this->model->getService();
		// $data['roles']=$this->model->getRole();
		// $data['grades']=$this->model->getGrade();
		// $data['deps']=$this->model->getDepartement();
		// $data['postes']=$this->model->getPoste();
		// $data['roles']=$this->model->getRole();
		// $data['qualite']=$this->model->getqualite();
		$this->load->view('templates/admin/header');
     	$this->load->view('templates/admin/add_user.php');
     	$this->load->view('templates/admin/footer');

	}

	public function add_compte()
	{

       if(empty($this->session->id_personnel))
			{
			   redirect('Authentification/'); 
			}
		//$data['services']=$this->model->getService();
        //$data['departements']=$this->model->getDepartement();

        $this->load->view('templates/admin/header');
     	$this->load->view('templates/admin/add_compte.php');
     	$this->load->view('templates/admin/footer');
     	

	}

	public function compte_page()
	{
		if(empty($this->session->id_personnel))
			{
			   redirect('Authentification/'); 
			}

        //$data['blogs']=$this->model->getCompte();

        $this->load->view('templates/admin/header');
     	$this->load->view('templates/admin/compte.php');
     	$this->load->view('templates/admin/footer');
      
	}


	///////////**************PARAMETRAGE DE L'APPLICATION***************************///////////
////////////////////////////////////////////////////////////////////////////////////////////////


    public function faculte_page()
    {
        $data['facultes']=$this->model->getfaculte();
		 $this->load->view('templates/admin/header');
     	$this->load->view('templates/admin/faculte/faculte.php',$data);
     	$this->load->view('templates/admin/footer');	
    }

	public function add_faculte()
	{
		 $data['facultes']=$this->model->getfaculte();
     	$this->load->view('templates/admin/faculte/add_faculte.php',$data);
	}
	public function submit_faculte()
	{
		$result=$this->model->submit_faculte();
		if($result)
		{
		   $this->session->set_flashdata('success_msg', ' faculté enregistrer avec success');
		}else
		{
			$this->session->set_flashdata('error_msg', ' echec lors de l\'enregidstrement de la faculté veuillez ressayer ');
		}
		redirect(base_url('admin/admin/faculte_page'));

   }

	public function modifier_faculte($id)
	{
		$data['facultes']=$this->model->getfaculte();
        $data['blog']=$this->model->getfaculteById($id);
	    $this->load->view('templates/admin/faculte/edit_faculte.php', $data);
	}
  
    public function update_faculte()
	{
		$result=$this->model->update_faculte();

		if($result)
		{
			$this->session->set_flashdata('success_msg', 'mise a jour avec succes');
		}else
		{
			$this->session->set_flashdata('error_msg', 'erreur lors de la modification');
		}
		redirect(base_url('admin/admin/faculte_page'));
	
	}

    public function delete_faculte($id)
	{
		$result=$this->model->delete_faculte($id);
		if($result)
		{
			$this->session->set_flashdata('success_msg',' faculté supprimer avec succes');
		}else
		{
			$this->session->set_flashdata('error_msg', 'erreur lors de la suppression ');
		}
		redirect(base_url('admin/admin/faculte_page'));
	}




////////////////////**************GESTION DES MENTIONS****************//////////////////////////

   //////////////////////////////////////////////////////////////////////////////////////
    public function mention()
    {
        $data['mentions']=$this->model->getmention();

        $this->load->view('templates/admin/header');
     	$this->load->view('templates/admin/mention/mention.php',$data);
     	$this->load->view('templates/admin/footer');
		
    }

	// public function add_mention()
	// {
	// 	 $data['mentions']=$this->model->getmention();
	// 	 $data['cycles']=$this->model->getCycle();
 //     	$this->load->view('page/admin/mention/add_mention.php',$data);
	// }
	// public function submit_mention()
	// {
	// 	$result=$this->model->submit_mention();
	// 	if($result)
	// 	{
	// 	   $this->session->set_flashdata('success_msg', ' mention enregistrer avec success');

	// 	}else
	// 	{
	// 		$this->session->set_flashdata('error_msg', ' echec lors de l\'enregidstrement de la mention ');
	// 	}
	// 	redirect(base_url('admin/admin/mention'));

 //   }

	// public function modifier_mention($id)
	// {
	// 	$data['mentions']=$this->model->getmention();
 //        $data['blog']   =$this->model->getmentionById($id);
 //        $data['cycles']=$this->model->getCycle();
 //        $data['cycle_mention']=$this->model->getCycle_mention($id);
 //        /*echo '<pre>';
 //        print_r($data['cycles']);
 //        echo '</pre>';
 //        die();*/
	//     $this->load->view('page/admin/mention/edit_mention.php', $data);
	// }
  
 //    public function update_mention()
	// {
	// 	$result=$this->model->update_mention();

	// 	if($result)
	// 	{
	// 		$this->session->set_flashdata('success_msg', 'mise a jour avec succes');
	// 	}else
	// 	{
	// 		$this->session->set_flashdata('error_msg', 'erreur lors de la modification');
	// 	}
	// 	redirect(base_url('admin/admin/mention'));
	
	// }

 //    public function delete_mention($id)
	// {
	// 	$result=$this->model->delete_mention($id);
	// 	if($result)
	// 	{
	// 		$this->session->set_flashdata('success_msg',' mention supprimer avec succes');
	// 	}else
	// 	{
	// 		$this->session->set_flashdata('error_msg', 'erreur lors de la suppression ');
	// 	}
	// 	redirect(base_url('admin/admin/mention'));

 //   }


//////////////////////**************GESTION DES PARCOURS********************/////////////////////////
        /////////////////////////////////////////////////////////////////////////////////



    public function parcour()
    {
        //$data['parcours']=$this->model->getparcour();
        $this->load->view('templates/admin/header');
     	$this->load->view('templates/admin/parcour/parcour.php');
     	$this->load->view('templates/admin/footer');
			
    }

	// public function add_parcour()
	// {
	// 	$data['parcours']=$this->model->getparcour();
	// 	 $data['parcours']=$this->model->getparcour();
	// 	 $data['departements']=$this->model->getdepartement();
	// 	 $data['mentions']=$this->model->getmention();
	// 	 $data['niveaux']=$this->model->getNiveau();
	// 	 $data['cycles']=$this->model->getCycle();
 //     	$this->load->view('page/admin/parcour/add_parcour.php',$data);
	// }
	// public function submit_parcour()
	// {
	// 	$result=$this->model->submit_parcour();
	// 	if($result)
	// 	{
	// 	   $this->session->set_flashdata('success_msg', ' parcour enregistrer avec success');
	// 	}else
	// 	{
	// 		$this->session->set_flashdata('error_msg', ' echec lors de l\'enregidstrement de la parcour ');
	// 	}
	// 	redirect(base_url('admin/admin/parcour'));

 //   }

	// public function modifier_parcour($id)
	// {
	// 	$data['blog']=$this->model->getparcourById($id);
	// 	 $data['parcours']=$this->model->getparcour();
	// 	 $data['departements']=$this->model->getdepartement();
	// 	 $data['mentions']=$this->model->getmention();
	// 	 $data['niveaux']=$this->model->getNiveau();
	// 	 $data['po']=$this->model->getNiveauByParcour($id);
	//     $this->load->view('page/admin/parcour/edit_parcour.php', $data);
	// }
  
 //    public function update_parcour()
	// {
	// 	$result=$this->model->update_parcour();

	// 	if($result)
	// 	{
	// 		$this->session->set_flashdata('success_msg', 'mise a jour avec succes');
	// 	}else
	// 	{
	// 		$this->session->set_flashdata('error_msg', 'erreur lors de la modification');
	// 	}
	// 	redirect(base_url('admin/admin/parcour'));
	
	// }

 //    public function delete_parcour($id)
	// {
	// 	$result=$this->model->delete_parcour($id);
	// 	if($result)
	// 	{
	// 		$this->session->set_flashdata('success_msg',' parcour supprimer avec succes');
	// 	}else
	// 	{
	// 		$this->session->set_flashdata('error_msg', 'erreur lors de la suppression ');
	// 	}
	// 	redirect(base_url('admin/admin/parcour'));

 //   }





/////////////////////**************GESTION DES CYCLES*******************///////////////////

	/////////////////////////////////////////////////////////////////////////////


    public function cycle()
    {
        //$data['cycles']=$this->model->getCycle();
        $this->load->view('templates/admin/header');
     	$this->load->view('templates/admin/cycle/cycle.php');
     	$this->load->view('templates/admin/footer');
		
    }

	// public function add_cycle()
	// {
	// 	 $data['cycles']=$this->model->getCycle();
 //     	$this->load->view('page/admin/cycle/add_cycle.php',$data);
	// }
	// public function submit_cycle()
	// {
	// 	$result=$this->model->submit_cycle();
	// 	if($result)
	// 	{
	// 	   $this->session->set_flashdata('success_msg', ' cycle enregistrer avec success');
	// 	}else
	// 	{
	// 		$this->session->set_flashdata('error_msg', ' echec lors de l\'enregidstrement du cycle ');
	// 	}
	// 	redirect(base_url('admin/admin/cycle'));

 //   }

	// public function modifier_cycle($id)
	// {
	// 	$data['cycles']=$this->model->getCycle();
 //        $data['blog']=$this->model->getCycleById($id);
	//     $this->load->view('page/admin/cycle/edit_cycle.php', $data);
	// }
  
 //    public function update_cycle()
	// {
	// 	$result=$this->model->update_cycle();

	// 	if($result)
	// 	{
	// 		$this->session->set_flashdata('success_msg', 'mise a jour avec succes');
	// 	}else
	// 	{
	// 		$this->session->set_flashdata('error_msg', 'erreur lors de la modification');
	// 	}
	// 	redirect(base_url('admin/admin/cycle'));
	
	// }

 //    public function delete_cycle($id)
	// {
	// 	$result=$this->model->delete_cycle($id);
	// 	if($result)
	// 	{
	// 		$this->session->set_flashdata('success_msg',' cycle supprimer avec succes');
	// 	}else
	// 	{
	// 		$this->session->set_flashdata('error_msg', 'erreur lors de la suppression ');
	// 	}
	// 	redirect(base_url('admin/admin/cycle'));
	// }

  ////////////////***********GESTION DES NIVEAUX************/////////////////////
         ////////////////////////////////////////////////////////////


    public function niveau()
    {
        //$data['niveaux']=$this->model->getNiveau();
        $this->load->view('templates/admin/header');
     	$this->load->view('templates/admin/niveau/niveau.php');
     	$this->load->view('templates/admin/footer');

		
    }

	// public function add_niveau()
	// {
	// 	 $data['niveaux']=$this->model->getNiveau();
	// 	 $data['cycles']=$this->model->getCycle();
 //     	$this->load->view('page/admin/niveau/add_niveau.php',$data);
	// }
	// public function submit_niveau()
	// {
	// 	$result=$this->model->submit_niveau();
	// 	if($result)
	// 	{
	// 	   $this->session->set_flashdata('success_msg', ' niveau enregistrer avec success');
	// 	}else
	// 	{
	// 		$this->session->set_flashdata('error_msg', ' echec lors de l\'enregidstrement du niveau ');
	// 	}
	// 	redirect(base_url('admin/admin/niveau'));

 //   }

	// public function modifier_niveau($id)
	// {
	// 	$data['niveaux']=$this->model->getNiveau();
	// 	$data['cycles'] =$this->model->getCycle();
 //        $data['blog']   =$this->model->getNiveauById($id);
	//     $this->load->view('page/admin/niveau/edit_niveau.php', $data);
	// }
  
 //    public function update_niveau()
	// {
	// 	$result=$this->model->update_niveau();

	// 	if($result)
	// 	{
	// 		$this->session->set_flashdata('success_msg', 'mise a jour avec succes');
	// 	}else
	// 	{
	// 		$this->session->set_flashdata('error_msg', 'erreur lors de la modification');
	// 	}
	// 	redirect(base_url('admin/admin/niveau'));
	
	// }

 //    public function delete_niveau($id)
	// {
	// 	$result=$this->model->delete_niveau($id);
	// 	if($result)
	// 	{
	// 		$this->session->set_flashdata('success_msg',' niveau supprimer avec succes');
	// 	}else
	// 	{
	// 		$this->session->set_flashdata('error_msg', 'erreur lors de la suppression ');
	// 	}
	// 	redirect(base_url('admin/admin/niveau'));

 //   }



	///////////**************PARAMETRAGE DE L'APPLICATION***************************///////////
////////////////////////////////////////////////////////////////////////////////////////////////


    public function poste_page()
    {
        //$data['postes']=$this->model->getPoste();
		 $this->load->view('templates/admin/header');
     	$this->load->view('templates/admin/poste.php');
     	$this->load->view('templates/admin/footer');	
    }

	// public function add_poste()
	// {
	// 	 $data['postes']=$this->model->getPoste();
 //     	$this->load->view('page/admin/poste/add_poste.php',$data);
	// }
	// public function submit_poste()
	// {
	// 	$result=$this->model->submit_poste();
	// 	if($result)
	// 	{
	// 	   $this->session->set_flashdata('success_msg', ' Poste enregistrer avec success');
	// 	}else
	// 	{
	// 		$this->session->set_flashdata('error_msg', ' echec lors de l\'enregidstrement du poste ');
	// 	}
	// 	redirect(base_url('admin/admin/poste_page'));

 //   }

	// public function modifier_poste($id)
	// {
	// 	$data['postes']=$this->model->getPoste();
 //        $data['blog']=$this->model->getPosteById($id);
	//     $this->load->view('page/admin/poste/edit_poste.php', $data);
	// }
  
 //    public function update_poste()
	// {
	// 	$result=$this->model->update_poste();

	// 	if($result)
	// 	{
	// 		$this->session->set_flashdata('success_msg', 'mise a jour avec succes');
	// 	}else
	// 	{
	// 		$this->session->set_flashdata('error_msg', 'erreur lors de la modification');
	// 	}
	// 	redirect(base_url('admin/admin/poste_page'));
	
	// }

 //    public function delete_poste($id)
	// {
	// 	$result=$this->model->delete_poste($id);
	// 	if($result)
	// 	{
	// 		$this->session->set_flashdata('success_msg',' poste supprimer avec succes');
	// 	}else
	// 	{
	// 		$this->session->set_flashdata('error_msg', 'erreur lors de la suppression ');
	// 	}
	// 	redirect(base_url('admin/admin/poste_page'));
	// }



////////////////////***********GESTION DES UE****************/////////////////////

	///////////////////////////////////////////////////////////////////////////////



    public function ue()
    {

        //$data['departements']=$this->model->getDepartement();
         $this->load->view('templates/admin/header');
     	$this->load->view('templates/admin/ue/ue.php');
     	$this->load->view('templates/admin/footer');
		
    }

	// public function add_departement()
	// {
	// 	$data['services']=$this->model->getService();
	// 	 $data['departements']=$this->model->getDepartement();
 //     	$this->load->view('page/admin/departement/add_departement.php',$data);
	// }
	// public function submit_departement()
	// {
	// 	$result=$this->model->submit_departement();
	// 	if($result)
	// 	{
	// 	   $this->session->set_flashdata('success_msg', ' departement enregistrer avec success');
	// 	}else
	// 	{
	// 		$this->session->set_flashdata('error_msg', ' echec lors de l\'enregidstrement du departement ');
	// 	}
	// 	redirect(base_url('admin/admin/departement'));

 //   }

	// public function modifier_departement($id)
	// {
	// 	$data['services']=$this->model->getService();
	// 	$data['departements']=$this->model->getDepartement();
 //        $data['blog']=$this->model->getDepartementById($id);
	//     $this->load->view('page/admin/departement/edit_departement.php', $data);
	// }
  
 //    public function update_departement()
	// {
	// 	$result=$this->model->update_departement();

	// 	if($result)
	// 	{
	// 		$this->session->set_flashdata('success_msg', 'mise a jour avec succes');
	// 	}else
	// 	{
	// 		$this->session->set_flashdata('error_msg', 'erreur lors de la modification');
	// 	}
	// 	redirect(base_url('admin/admin/departement'));
	
	// }

 //    public function delete_departement($id)
	// {
	// 	$result=$this->model->delete_departement($id);
	// 	if($result)
	// 	{
	// 		$this->session->set_flashdata('success_msg',' departement supprimer avec succes');
	// 	}else
	// 	{
	// 		$this->session->set_flashdata('error_msg', 'erreur lors de la suppression ');
	// 	}
	// 	redirect(base_url('admin/admin/departement'));
	// }


	
}

?>
	