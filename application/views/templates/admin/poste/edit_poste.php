
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
                <strong class="card-title">Gerer les postes</strong>
       
                    <a href="<?php echo base_url('admin/admin/add_poste') ?>" style="border-radius:20px;" id="btn_add" class="btn btn-outline-success float-right">
                    <i class="glyphicon glyphicon-plus fa fa-plus"></i>Ajouter un poste </a>

                 </div>
        <div class="card-body">
           <div class="content mt-3">
              <div class="animated fadeIn">
                     <div class="row">

          
        <?php $this->load->view('page/admin/poste/table') ?>  


                        <div class="col-md-6" id="form">
               <div class="login-content">
                 <div class="login-form">
                                <form action="<?php echo base_url('admin/admin/update_poste')?>" method="POST">

                                    <div class="form-group">
                                        <label for="nom"><strong>Nom poste</strong><i style="color: red;">*</i></label>
                                        <input type="text" name="nom_poste" class="form-control" value="<?= $blog->nom_poste ; ?>" class="form-control" required>
                                    </div>
                                    <input type="hidden" name="id_hidden" value="<?= $blog->id_poste ; ?>">
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


   