
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

                    <a href="<?php echo base_url('admin/admin/add_service') ?>" style="border-radius:20px;" class="btn btn-outline-success float-left">
                    <i class="glyphicon glyphicon-plus fa fa-plus"></i> Ajouter service</a>

                <div id="message_erreur"></div>
                 </div>
        <div class="card-body">
           <div class="content mt-3">
              <div class="animated fadeIn">
                     <div class="row">

                      <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <strong class="card-title">Gerer les postes</strong><br>Liste des postes
                    <button type="button" href="<?php echo base_url('admin/admin/add_poste/'); ?>" class="btn btn-outline-secondary float-right"  style="border-radius:20px;" ><i class="glyphicon glyphicon-plus fa fa-plus"></i>Ajouter poste
                        </button>
                            </div>
                        </div>
                <div class="card-body">
                     <table class="table  table-bordered table-responsive">
                                    <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom poste</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                             <?php 
                             $n=1;
                                if($postes)
                                {
                                    foreach($postes as $poste)
                                    {
                                  ?>
                            <tr>
                                <td><?php echo  $n++; ?></td>
                                <td><?php echo $poste->nom_poste ?> </td>
                                <td>
                                <a href="<?php echo base_url('admin/admin/modifier_compte/'.$poste->id_poste);?>" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-warning update"><i class=" fa fa-pencil-square-o"></i></a>

                                    <a href="<?php echo base_url('admin/admin/delete_compte/'.$poste->id_poste); ?>"  onclick="return confirm('etes vous sur de vouloir supprimer?');" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-danger delete"><i class=" fa fa-trash-o"></i></a>
                                  
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
             </div>
        </div>

                <div style="clear:both">
                	<br><br><br><br>
                </div>

    <!-- Right Panel -->
 