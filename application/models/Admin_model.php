<?php  

 class Admin_model extends CI_Model {

 	public function getfaculte()
     {
        $query = $this->db->get('facultes');
       if ($query->num_rows()> 0){
           return $query->result();
       }else{
           return [];
       }
      }

     public function submit_faculte()
      {
          $val=array(
            "libele_faculte"    =>$this->input->post("nom_faculte"),
            "abreviation_faculte"    =>$this->input->post("abreviation_faculte")
          );
          $this->db->insert('facultes',$val);
          if($this->db->affected_rows()>0)
          {
              return true;
          } else return false;
      } 

      public function getfaculteById($id)
    {
      $this->db->where('id_faculte', $id);
       $query=$this->db->get('facultes');
       if($query->num_rows()> 0)
       {
        return $query->row();
       }else return false;
    }


    public function update_faculte(){
        $id=$this->input->post("id_hidden");
        $val=array(
            "libele_faculte"        =>$this->input->post("nom_faculte"),
             "abreviation_faculte"        =>$this->input->post("abreviation_faculte")

          );
        
            $this->db->where('id_faculte', $id); 
            $this->db->update('facultes',$val);

           if($this->db->affected_rows()>0 )
              {
               return true;
            }else 
             {
               return false;
             }
     } 

     public function delete_faculte($id){

        $this->db->where('id_faculte', $id);
        $this->db->delete('facultes');
        if($this->db->affected_rows()>0)
          {
            return  true;
          } else return false;
        }
 	



///////////////////////**********GESTION DES MENTIONS***********////////////////////////////////

     /***************************************************************************************/

    //   public function count_cycle()
    // {
    //   $query=$this->db->count_all($this->table_cycles);
    //   return $query;
    // }
      public function submit_mention()
      {
          $val=array(
            "intitule_mention"                =>$this->input->post("nom_mention"),
            //"abreviation_mention"        =>$this->input->post("abreviation"),
            "facilte_id"        =>$this->input->post("faculte_id")
          );
          $this->db->insert('mentions',$val);
          
          // $query=$this->db->where(array('nom_mention'=>$this->input->post("nom_mention"),'abreviation_mention'=>$this->input->post("abreviation")))
          //                   ->get($this->table_mentions)
          //                  ->result();
           
           
            // for($i=1 ; $i<=$this->count_cycle() ; $i++)
            // {
            //    $val1=array();
            //    if($this->input->post("cycle".$i) != null)
            //    {

            //     $cycle=$this->input->post("cycle".$i);
            //      $val1=array(
            //          "mention_id"    =>$query[0]->id_mention,
            //          "cycle_id"        =>$cycle
            //       );
            //        $this->db->insert("cycle_mention",$val1);
            //    }else{
            //     $val1=array();
                
            //    }
            // }
            if($this->db->affected_rows()>0)
          {
              return true;
          } else return false;


      } 
     

    public function delete_mention($id){

        $this->db->where('id_mention', $id);
        $this->db->delete($this->table_mentions);
        if($this->db->affected_rows()>0)
          {
            return  true;
          } else return false;
        }

    public function getmention()
	   {
	      $query = $this->db->select('*')
	                     ->from('mentions')
	                     ->join('facultes', 'facultes.id_faculte = mentions.faculte_id', 'LEFT')
	                      ->get();
	       if ($query->num_rows()> 0){
	           return $query->result();
	        }else{
	           return [];
	       }
	   }


    public function getmentionById($id)
    {
      $this->db->where('id_mention', $id);
       $query=$this->db->get($this->table_mentions);
       if($query->num_rows()> 0)
       {
        return $query->row();
       }else return false;
    }

    public function update_mention(){
        $id=$this->input->post("id_hidden");
        $val=array(
            "nom_mention"                =>$this->input->post("nom_mention"),
            "abreviation_mention"        =>$this->input->post("abreviation")

        );
        
            $this->db->where('id_mention', $id); 
            $this->db->update($this->table_mentions,$val);

            $query=$this->db->where(array('nom_mention'=>$this->input->post("nom_mention"),'abreviation_mention'=>$this->input->post("abreviation")))
                            ->get($this->table_mentions)
                           ->result(); 

            for($i=1 ; $i<=$this->count_cycle() ; $i++)
            {
               $val1=array();
               
                $cycle=$this->input->post("cycle".$i);
                 $val1=array(
                     "mention_id"    =>$query[0]->id_mention,
                     "cycle_id"        =>$cycle
                  );
                 $this->db->where(
                     "mention_id",$id
                  );
                   $this->db->delete("cycle_mention");
               
            }



            for($i=1 ; $i<=$this->count_cycle() ; $i++)
            {
               $val1=array();
               if($this->input->post("cycle".$i) != null)
               {

                $cycle=$this->input->post("cycle".$i);
                 $val1=array(
                     "mention_id"    =>$query[0]->id_mention,
                     "cycle_id"        =>$cycle
                  );
                   $this->db->insert("cycle_mention",$val1);
               }else{
                $val1=array();
                
               }
            }


          if($this->db->affected_rows()>0 )
          {
               return true;
          }else 
             {
               return false;
             }
     } 


 }
