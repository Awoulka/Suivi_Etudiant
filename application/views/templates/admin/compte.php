
        <!-- Header-->
	<!-- Page Heading -->
    <div class="row">
        
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                
                         <?php   
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

                    <a href="<?php echo base_url('admin/add_compte') ?>" style="border-radius:20px;" class="btn btn-outline-success float-left">
                    <i class="glyphicon glyphicon-plus fa fa-plus"></i> Creer nouveau compte</a>
                     <a href="<?php echo base_url('admin/admin/download') ?>" style="border-radius:15px;"  class="btn btn-outline-secondary btn-blog float-right">
                    <i class="glyphicon glyphicon-plus fa fa-eye"></i> appercu de la liste des Comptes</a><br>
                </div>
                <div class="card-body">
                 <div class="content mt-3">
            <div class="animated fadeIn">
                <div class="row">

                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <strong class="card-title">Liste des menbres de l'administration possèdant un compte</strong>
                            </div>
                        </div>
                <div class="card-body">
                     <table id="bootstrap-data-table-export" class="table table-striped table-bordered table-responsive">
                                    <thead>
                            <tr>
                                 <th>#</th>
                                <th>Nom utilisateur</th>
                                <th>pseudo</th>
                                <th>mot de passe</th>
                                <th>Statut</th>
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
                                <td><?php echo $row->speudo ?></td>
                                <td><?php echo $this->encryption->decrypt($row->pass)?></td>
                                <td>
                                 <?php 
                                 $statut=$row->statut;
                                 if($statut == 1){
                                  ?>
                                    <a href="<?php echo base_url('admin/admin/update_statut/'.$row->id_compte.'/'.$statut) ?>" class="btn btn-success " style="border-radius: 10px; margin-bottom: 5px;">Activé</a>
                                 <?php 
                                  }  if($statut == 0){
                                  ?>
                                  <a href="<?php echo base_url('admin/admin/update_statut/'.$row->id_compte.'/'.$statut) ?>" style="border-radius: 10px; margin-bottom: 5px;" class="btn btn-danger">Désactivé</a>
                                  <?php 
                                  }
                                   ?>
                                </td>
                                <td>
                                <a href="<?php echo base_url('admin/admin/modifier_compte/'.$row->id_compte);?>" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-warning"><i class=" fa fa-pencil-square-o"></i></a>

                                    <a href="<?php echo base_url('admin/admin/delete_compte/'.$row->id_compte); ?>"  onclick="return confirm('etes vous sur de vouloir supprimer?');" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-danger <?php if($row->role_id=='1') echo 'disabled'  ?>"><i class=" fa fa-trash-o"></i></a>
                                  
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
 
