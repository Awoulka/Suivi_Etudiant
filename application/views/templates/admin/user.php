

        <!-- Header-->
	<!-- Page Heading -->
    <div class="row">
        
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                
                         <?php  
                    print_r($this->input->post("poste"));
                       if($this->session->flashdata('success_msg')){
                     
                     ?>
                     <div class="alert  alert-success alert-dismissible fade show">
                         <?php echo $this->session->flashdata('success_msg');?>
                     </div>
                
                     <?php 
                     }if($this->session->flashdata('error_msg')){ 
                      ?>
                     <div class="alert  alert-danger alert-dismissible fade show">
                         <?php echo $this->session->flashdata('error_msg');?>
                     </div>
                      <?php 
                     } 
                      ?>

                    <a href="<?php echo base_url('admin/add_user') ?>" style="border-radius:20px;" class="btn btn-outline-success float-left">
                    <i class="glyphicon glyphicon-plus fa fa-plus"></i> Ajouter personnel</a>

                <div id="message_erreur"></div>
                </div>
                <div class="card-body">
                 <div class="content mt-3">
            <div class="animated fadeIn">
                <div class="row">

                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <strong class="card-title">Liste des menbres de l'administration</strong>
                            </div>
                        </div>
                <div class="card-body">
                     <table id="bootstrap-data-table-export" class="table table-striped table-bordered table-responsive">
                                    <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom et prenom </th>
                                <th>Adresse email</th>
                                <th>service</th>
                                <th>grade</th>
                                <th>role</th>
                                <th>poste</th>
                                <th>departement</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                             <?php 
                             $n=1;
                                if($blogs)
                                {
                                    foreach($blogs as $row)
                                    {
                                  ?>
                            <tr>
                                <td><?php echo  $n++; ?></td>
                                <td><?php echo $row->nom_prenom ?> </td>
                                <td><?php echo $row->email ?> </td>
                                <td><?php echo $row->nom_service ?></td>
                                <td><?php echo $row->nom_grade ?></td>
                                <td>
                                <?php 
                                  $role=$this->admin_model->getRolebyPerso($row->role_id);
                                     if($role)
                                     {
                                      
                                            foreach($role as $r)
                                            {
                                          
                                            echo $r->type_role.'&nbsp; &nbsp; &nbsp; &nbsp;' ;
                                           
                                             }
                                      }
                                  ?>
                                  </td>
                                <td>
                                <?php 
                                  $pos=$this->admin_model->getPostebyPerso($row->id_personnel);
                                     if($pos)
                                     {
                                      
                                            foreach($pos as $po)
                                            {
                                          
                                            echo $po->nom_poste.'&nbsp; &nbsp; &nbsp; &nbsp;' ;
                                           
                                             }
                                      }
                                  ?>
                                  </td>
                                 <td><?php echo $row->nom_departement ?></td>
                                <td>
                                <a href="<?php echo base_url('admin/admin/modifier/'.$row->id_personnel)?>" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-warning"><i class=" fa fa-pencil-square-o"></i></a>
                                    <a href="<?php echo base_url('admin/admin/delete/'.$row->id_personnel); ?>"  onclick="return confirm('etes vous sur de vouloir supprimer?');" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-danger <?php if($row->role_id=='1') echo 'disabled'  ?>"><i class=" fa fa-trash-o"></i></a>
                                 

                                </td>
                            </tr>
                                <?php
                                    }
                                }
                             ?>
                               </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                </div>
            </div><!-- .animated -->
        </div><!-- .content -->

                <div style="clear:both">
                	<br><br><br><br>
                </div>

                </div>
            </div>
        </div>
    </div> 

    <!-- Right Panel -->
   
 <script type="text/javascript">
 	$(document).ready(function(){
        load_data();
        function load_data(query)
        {
        	$.ajax({
        		url:"<?php echo base_url();?>home/fetch_user ",
        		method: "POST",
        		data:{query:query},
        		success: function(data){
        			$('#result').html(data);
        		}

        	})
        }

        $('#search_text').keyup(function(){
        	var search= $(this).val();
        	if(search!='')
        	{
        		load_data(search);
        	}
        	else{
        		load_data();
        	}
        })

 	});
 </script>