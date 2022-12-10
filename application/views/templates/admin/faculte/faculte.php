
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

                   <!--  <a href="<?php echo base_url('admin/admin/add_service') ?>" style="border-radius:20px;" class="btn btn-outline-success float-left">
                    <i class="glyphicon glyphicon-plus fa fa-plus"></i> Ajouter Faculté</a> -->

                    <a href="<?php echo base_url('admin/admin/add_faculte') ?>" style="border-radius:20px; border-color: green; color: green" id="btn_add" class="btn btn-outline-success float-right">
                    <i class="glyphicon glyphicon-plus fa fa-plus"></i>Ajouter une Faculte</a>

                <div id="message_erreur"></div>
                 </div>
        <div class="card-body">
           <div class="content mt-3">
              <div class="animated fadeIn">
                     <div class="row">

                      <div class="col-md-7">
                        <div class="card">
                            <div class="card-header">
                                <strong class="card-title">Gerer les Facultés</strong><br>Liste des Facultés
                     
                            </div>
                        </div>
                <div class="card-body">
                     <table class="table  table-bordered table-responsive" 
                    >
                                    <thead>
                            <tr>
                                <th>#</th>
                                <th>Noms</th>
                                 <th>Abreviations</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                             <?php 
                             $n=1;
                                if($facultes)
                                {
                                    foreach($facultes as $faculte)
                                    {
                                  ?>
                            <tr>
                                <td><?php echo  $n++; ?></td>
                                <td><?php echo $faculte->libele_faculte ?> </td>
                                <td><?php echo $faculte->abreviation_faculte ?> </td>
                                <td>
                                <a href="<?php echo base_url('admin/admin/modifier_faculte/'.$faculte->id_faculte);?>" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-warning update"><i class=" fa fa-pencil-square-o"></i></a>

                                    <a href="<?php echo base_url('admin/admin/delete_faculte/'.$faculte->id_faculte); ?>"  onclick="return confirm('etes vous sur de vouloir supprimer?');" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-danger delete"><i class=" fa fa-trash-o"></i></a>
                                  
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
 