
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
                <strong class="card-title">Gerer les parcours</strong>
       
                    <a href="<?php echo base_url('admin/admin/add_parcour') ?>" style="border-radius:20px;" id="btn_add" class="btn btn-outline-success float-right">
                    <i class="glyphicon glyphicon-plus fa fa-plus"></i>Ajouter un parcour </a>

                 </div>
        <div class="card-body">
           <div class="content mt-3">
              <div class="animated fadeIn">
              
             <div class="container">
               <div class="login-content">
                 <div class="login-form">
                                <form action="<?php echo base_url('admin/admin/update_parcour')?>" method="POST">

                                    <div class="form-group">
                                        <label for="nom"><strong>parcour</strong><i style="color: red;">*</i></label>
                                        <input type="text" name="nom_parcour" class="form-control" value="<?= $blog->nom_parcour ; ?>" class="form-control" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="nom"><strong>Abreviation</strong></label>
                                        <input type="text" name="abreviation" value="<?= $blog->abreviation_parcour ; ?>" class="form-control" class="form-control" >
                                    </div>
                                    <input type="hidden" name="id_hidden" value="<?= $blog->id_parcour ; ?>">
                       <div class="form-group ">
                        <label for="niveau"><strong>Niveau</strong><i style="color: red;">*</i></label><br>
                             <?php

                             $i=1;
                           
                                   foreach($niveaux as $niveau)
                                   {
                                    
                                     echo '<input  type="checkbox" value="'.$niveau->id_niveau.'" name="niveau'.$i.'" ';
                                        foreach($po as $p)
                                        {
                                         echo ($niveau->id_niveau==$p->id_niveau) ? "checked" : "";
                                        }
                                       echo ' >&nbsp';
                                     echo $niveau->niveau;
                                     $i++;
                                    echo "&nbsp &nbsp &nbsp";
                                   }
                      
                             ?>
                      </div>

                              <div class="form-group">
                                <label for="departement"><strong>departement</strong><i style="color: red;">*</i></label>
                               <select name="departement" class="form-control">
                               <option value=""></option>
                               <?php
                                $g=$blog->departement_id;  
                                       foreach($departements as $departement)
                                         {
                                        ?>
                                            <option value="<?= $departement->id_departement; ?>" <?= ($departement->id_departement == $g) ? "selected" : "" ?> >
                                              <?=$departement->nom_departement; ?>
                                            </option>;
                                        <?php
                                         }
                                   ?>
                              </select>                       
                              </div>
                              <div class="form-group">
                                <label for="mention"><strong>mention</strong><i style="color: red;">*</i></label>
                               <select name="mention" class="form-control">
                               <option value=""></option>
                               <?php
                                $g=$blog->mention_id;  
                                       foreach($mentions as $mention)
                                         {
                                        ?>
                                            <option value="<?= $mention->id_mention; ?>" <?= ($mention->id_mention == $g) ? "selected" : "" ?> >
                                              <?=$mention->nom_mention; ?>
                                            </option>;
                                        <?php
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


   