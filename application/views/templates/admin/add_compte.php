
        <div class="container">
            <div class="login-content">
                <div class="login-logo">
                            <div class="card-header">
                                <strong class="card-title">Formulaire d'ajout d'un compte</strong>
                            </div>
                    <a href="<?php echo base_url('admin/compte_page')?>" class="btn btn-default">
                        Retour
                    </a>
                </div>
                <div class="login-form">
                    <form action="<?php echo base_url('admin/admin/submit_compte')?>" method="POST">
                     
                       <input type="hidden" name="id_user" class="form-control" >
                        <div class="form-group" >
                            <label for="speudo"><strong>Pseudo</strong><i style="color: red;">*</i></label>
                            <input type="text" id="speudo" name="speudo" placeholder="05 caractères minimun" class="form-control" minlength="5" required >
                            <span id="speudo_result"></span>
                        </div> 

                
                      <div class="form-group">
                          <label for="service"><strong>Service</strong></label>
                         <select name="service" id="service" class="form-control">
                             <option value="">selectionner le service</option>
                             <?php 

                                   foreach($services as $service)
                                   {
                                     echo '<option value="'.$service->id_service.'">'.$service->nom_service.'</option>';
                                   }

                            
                             ?>
                             </select>
                        </div>
                 
                      <div class="form-group">
                          <label for="departement"><strong>departement</strong></label>
                         <select name="departement" id="departement" class="form-control">
                             <option value="">selectionner le departement</option>
                             <?php 

                                   foreach($departements as $departement)
                                   {
                                     echo '<option value="'.$departement->id_departement.'">'.$departement->nom_departement.'</option>';
                                   }

                            
                             ?>
                             </select>
                        </div>


                    <div class="form-group">
                          <label for="nom"><strong>Personnel</strong><i style="color: red;">*</i></label>
                         <select name="nom" id="perso" class="form-control" required>
                             <option value="nom">selectionner personnel</option>
                     
                        </select>
                    </div>                       
                         <!--  
                      <div class="form-group">
                          <label for="nom"><strong>Personnel</strong><i style="color: red;">*</i></label>
                         <select name="nom" class="form-control">
                             <option value="nom">selectionner personnel</option>
                             <?php 

                                   foreach($blogs as $blog)
                                   {
                                     echo '<option value="'.$blog->id_personnel.'">'.$blog->nom_prenom.'</option>';
                                   }
                             ?>
                        </select>
                    </div>  -->

        
                        <div class="text-center">
                        <button class="btn btn-primary btn-lg" name="enregistrer">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

  
     <script type="text/javascript">
    $(document).ready(function(){
        $('#speudo').change(function(){
            var speudo= $('#speudo').val();
            if(speudo !='')
            {
            $.ajax({
                url:"<?php echo base_url();?>admin/admin/speudo_avaibility",
                method: "POST",
                data:{speudo:speudo},
                success: function(data){
                    $('#speudo_result ').html(data);
                }

            });
            }
        });


        $('#service').change(function()
        {
            var id_service = $('#service').val();
            if(id_service!='')
            {
               $.ajax({

                   url :'<?php echo base_url('admin/admin/fetch_perso1') ?>',    
                   method:"POST",    
                   data:{id_service:id_service},    
                   success: function(data)    
                   {    
                    $('#perso').html(data);
                   }
                })     
            }
        });

        $('#departement').change(function()
        {
            var id_departement = $('#departement').val();
            if(id_departement!='')
            {
               $.ajax({

                   url :'<?php echo base_url('admin/admin/fetch_perso2') ?>',    
                   method:"POST",    
                   data:{id_departement:id_departement},    
                   success: function(data)    
                   {    
                    $('#perso').html(data);
                   }
                })     
            }
        });

     

    });
 </script>
