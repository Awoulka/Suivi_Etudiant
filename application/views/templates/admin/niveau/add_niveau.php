
<?php $this->load->view('templates/header') ?>


    <!-- Left Panel -->
<?php $this->load->view('templates/leftbar');
 ?>
        <?php $this->load->view('templates/headAdmin') ?>
        <!-- Header-->
	<!-- Page Heading -->
    <div class="row">
        
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                           <strong class="card-title">Gerer les niveaux</strong><br>

                    <a href="<?php echo base_url('admin/admin/add_niveau') ?>" style="border-radius:20px;" id="btn_add" class="btn btn-outline-success float-right">
                    <i class="glyphicon glyphicon-plus fa fa-plus"></i>Ajouter un niveau </a>

                 </div>
        <div class="card-body">
           <div class="content mt-3">
              <div class="animated fadeIn">
                     <div class="row">

          
<?php $this->load->view('page/admin/niveau/table') ?> 



                        <div class="col-md-6" id="form">
               <div class="login-content">
                 <div class="login-form">
                                <form action="<?php echo base_url('admin/admin/submit_niveau')?>" method="POST">
                                    <div class="form-group">
                                          <label for="cycle"><strong>cycle</strong></label>
                                         <select name="cycle" class="form-control">
                                             <option value="">selectionner cycle</option>
                                             <?php 
                                                  
                                                   foreach($cycles as $cycle)
                                                   {
                                                     echo '<option value="'.$cycle->id_cycle.'">'.$cycle->intitule_cycle.'</option>';
                                                   }
                                             ?>
                                        </select>
                                    </div>
                                    <!--div class="form-group">
                                        <label for="nom"><strong>Libele du Niveau</strong><i style="color: red;">*</i></label>
                                        <input type="text" name="niveau" class="form-control" class="form-control" required>
                                    </div-->

                                    <div class="form-group">
                                        <label for="nom"><strong>Niveau</strong><i style="color: red;">*</i></label>
                                        <input type="number" name="niv" class="form-control" class="form-control" min=1 required>
                                    </div>
				                     
                                    <div class="text-center">
                                    <button class="btn btn-primary btn-xs" name="enregistrer">Enregistrer</button>
                                    </div>
                                </form>
                            </div>
                         </div>
                     </div>


                    </div>

                    </div>
             </div>
        </div>



    <!-- Right Panel -->


  <?php $this->load->view('templates/footer') ?>


