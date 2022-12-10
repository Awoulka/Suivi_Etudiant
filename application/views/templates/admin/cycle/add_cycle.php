
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
                           <strong class="card-title">Gerer les cycles</strong><br>

                    <a href="<?php echo base_url('admin/admin/add_cycle') ?>" style="border-radius:20px;" id="btn_add" class="btn btn-outline-success float-right">
                    <i class="glyphicon glyphicon-plus fa fa-plus"></i>Ajouter un cycle </a>

                 </div>
        <div class="card-body">
           <div class="content mt-3">
              <div class="animated fadeIn">
                     <div class="row">

          
<?php $this->load->view('page/admin/cycle/table') ?> 



                        <div class="col-md-6" id="form">
               <div class="login-content">
                 <div class="login-form">
                                <form action="<?php echo base_url('admin/admin/submit_cycle')?>" method="POST">

                                    <div class="form-group">
                                        <label for="nom"><strong>Nom cycle</strong><i style="color: red;">*</i></label>
                                        <input type="text" name="nom_cycle" class="form-control" class="form-control" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="nom"><strong>Abreviation</strong></label>
                                        <input type="text" name="abreviation" class="form-control" class="form-control" >
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


