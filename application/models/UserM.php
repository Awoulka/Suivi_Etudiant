
<?php

class UserM extends CI_Model {

		public $nom;
        public $prenom;
        public $email;
        public $psw;


        public function insert($n,$em,$ps)
        {
				$data= array(
				'name' => $n,
				'email' => $em,
				'password' => $ps
				);

                $this->db->insert('users', $data);
        }
        public function select()
        {
   
                return $this->db->get('users');
        }
    }
?>