
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
                           <strong class="card-title">Gerer les parcours</strong><br>

                    <a href="<?php echo base_url('admin/admin/add_parcour') ?>" style="border-radius:20px;" id="btn_add" class="btn btn-outline-success float-right">
                    <i class="glyphicon glyphicon-plus fa fa-plus"></i>Ajouter un parcour </a>

                 </div>
        <div class="card-body">
           <div class="content mt-3">
              <div class="animated fadeIn">
                 

             <div class="container">
               <div class="login-content">
                 <div class="login-form">
                                <form action="<?php echo base_url('admin/admin/submit_parcour')?>" method="POST">

                                    <div class="form-group">
                                        <label for="nom"><strong>Nom parcour</strong><i style="color: red;">*</i></label>
                                        <input type="text" name="nom_parcour" class="form-control" class="form-control" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="nom"><strong>Abreviation</strong></label>
                                        <input type="text" name="abreviation" class="form-control" class="form-control" >
                                    </div>

                                    <div class="form-group ">
                        <label for="niveau"><strong>cycles</strong></label><br>
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
                       <div class="form-group ">
                        <label for="niveau"><strong>niveau</strong></label><br>
                             <?php 
                             $i=1;
                                   foreach($niveaux as $niveau)
                                   {
                                    
                                     echo '<input  type="checkbox" value="'.$niveau->id_niveau.'" name="niveau'.$i.'" > &nbsp';
                                     echo $niveau->niveau;
                                     echo "&nbsp &nbsp &nbsp";
                                     $i++;
                                   }
                             ?>
                    </div>                                    
                                     <div class="form-group">
                                          <label for="departement"><strong>departement</strong></label>
                                         <select name="departement" class="form-control" required>
                                             <option value="">selectionner departement</option>
                                             <?php 
                                                  
                                                   foreach($departements as $departement)
                                                   {
                                                     echo '<option value="'.$departement->id_departement.'">'.$departement->nom_departement.'</option>';
                                                   }
                                             ?>
                                        </select>
                                    </div>
                                     <div class="form-group">
                                          <label for="mention"><strong>mention</strong></label>
                                         <select name="mention" class="form-control" required>
                                             <option value="">selectionner mention</option>
                                             <?php 
                                                  
                                                   foreach($mentions as $mention)
                                                   {
                                                     echo '<option value="'.$mention->id_mention.'">'.$mention->nom_mention.'</option>';
                                                   }
                                             ?>
                                        </select>
                                    </div>
                                    <div class="text-center">
                                    <button class="btn btn-primary btn-xs" name="enregistrer">Enregistrer</button>
                                    </div>
                                </form>
                            </div>
                         </div>
                     </div>
          

     <?php $this->load->view('page/admin/parcour/table') ?> 

      




               

                    </div>
             </div>
        </div>



    <!-- Right Panel -->


  <?php $this->load->view('templates/footer') ?>


