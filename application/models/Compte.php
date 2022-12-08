<?php  

 class Compte extends CI_Model {

 	public function verifier($condition = array( )) {

 		$this->db->from('comptes');
 		$this->db->where($condition);
 		return $this->db->count_all_results();


 	}

   

 	public function select_id($condition=array()){

 		$this->db->where($condition);
 		return $this->db->get('comptes')->result();
 	}
 	public function select_personnel($condition=array()){

        $this->db->select('*');
            $this->db->from('postes');
            $this->db->join('posseder','posseder.poste_id=postes.id_poste');
            $this->db->join('personnels','personnels.id_personnel=posseder.personnel_id'); 
            $this->db->join('facultes','facultes.id_faculte=personnels.faculte_id'); 
 		$this->db->where($condition);
 		return $this->db->get()->result();
 	} 

	public function select_mention($condition=array())   
        {   $this->db->select('*');
            $this->db->from('mentions');
            $this->db->join('parcours','parcours.mention_id=mentions.id_mention');    
            $this->db->where($condition);
                return $this->db->get()->result();
        }

    public function select_poste($condition=array()){

        	$this->db->select('nom_poste');
            $this->db->from('postes');
            $this->db->join('posseder','posseder.poste_id=postes.id_poste');
            $this->db->join('personnels','personnels.id_personnel=posseder.personnel_id');    
 		$this->db->where($condition);
 		return $this->db->get()->result();
 	} 

        public function select_role($condition=array()){

            $this->db->select('*');
            $this->db->from('roles');
            $this->db->join('personnels','personnels.role_id=roles.id_role');    
        $this->db->where($condition);
        return $this->db->get()->result();
    }

 }
