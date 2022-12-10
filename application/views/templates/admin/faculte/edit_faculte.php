
<?php $this->load->view('templates/admin/header') ?>



        <!-- Header-->
	<!-- Page Heading -->
    <div class="row">
        
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                           <strong class="card-title">Gerer les Facultés</strong><br>

                    <a href="<?php echo base_url('admin/admin/add_faculte') ?>" style="border-radius:20px; border-color: green; color: green" id="btn_add" class="btn btn-outline-success float-right">
                    <i class="glyphicon glyphicon-plus fa fa-plus"></i>Ajouter une Faculte</a>

                 </div>
        <div class="card-body">
           <div class="content mt-3">
              <div class="animated fadeIn">
                     <div class="row">

          
             <?php $this->load->view('templates/admin/faculte/table') ?>  


                        <div class="col-md-5" id="form">
               <div class="login-content">
                 <div class="login-form">
                                <form action="<?php echo base_url('admin/admin/update_faculte')?>" method="POST">

                                    <div class="form-group">
                                        <label for="nom"><strong>Nom de la Faculté</strong><i style="color: red;">*</i></label>
                                        <input type="text" name="nom_faculte" class="form-control" class="form-control" value="<?= $blog->libele_faculte ; ?>" required>

                                         <label for="nom"><strong>Abreviation</strong><i style="color: red;">*</i></label>
                                        <input type="text" name="abreviation_faculte" class="form-control" class="form-control" value="<?= $blog->abreviation_faculte ; ?>" required>
                                    </div>
                                    <input type="hidden" name="id_hidden" value="<?= $blog->id_faculte ; ?>">

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


  <?php $this->load->view('templates/admin/footer') ?>


   