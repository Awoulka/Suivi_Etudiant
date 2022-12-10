
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
                           <strong class="card-title">Gerer les mentions</strong><br>

                    <a href="<?php echo base_url('admin/admin/add_mention') ?>" style="border-radius:20px;" id="btn_add" class="btn btn-outline-success float-right">
                    <i class="glyphicon glyphicon-plus fa fa-plus"></i>Ajouter une mention </a>

                 </div>
        <div class="card-body">
           <div class="content mt-3">
              <div class="animated fadeIn">
                     <div class="row">

          
<?php $this->load->view('page/admin/mention/table') ?> 



                        <div class="col-md-6" id="form">
               <div class="login-content">
                 <div class="login-form">
                                <form action="<?php echo base_url('admin/admin/submit_mention')?>" method="POST">
                                

                            <div class="form-group ">
                        <label for="Cycle"><strong>Cycle</strong></label><br>
                             <?php 
                             $i=1;
                                    foreach($cycles as $cycle)
                                   {
                                    
                                     echo '<input  type="checkbox" value="'.$cycle->id_cycle.'" name="cycle'.$i.'" > &nbsp';
                                     echo $cycle->abreviation_cycle;
                                     echo "&nbsp &nbsp &nbsp";
                                     $i++;
                                   }
                             ?>
                    </div> 

                                    <div class="form-group">
                                        <label for="nom"><strong>Nom mention</strong><i style="color: red;">*</i></label>
                                        <input type="text" name="nom_mention" class="form-control" class="form-control" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="abreviation"><strong>Abreviation</strong></label>
                                        <input type="text" name="abreviation" class="form-control" class="form-control" >
                                    </div>
                                    <div class="form-group">
                                        <label for="abreviation"><strong>Initiale</strong></label>
                                        <input type="text" name="initial" class="form-control" class="form-control" >
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


