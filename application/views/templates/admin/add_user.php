



        <div class="container">
            <div class="login-content">
                <div class="login-logo">
                           <div class="card-header">
                                <strong class="card-title">Formulaire d'ajout d'un personnel</strong>
                            </div>
                    <a href="<?php echo base_url('admin/user_page')?>" class="btn btn-default">
                       <SPAN class="fa fa-reply" style="color: black;"></SPAN> Retour
                    </a>
                </div>
                <div class="login-form">
                    <form action="<?php echo base_url('admin/admin/submit_user')?>" method="POST">
            
                            <input type="hidden" name="id_user" class="form-control" >
                        
                        <div  class="form-group">
                            <label for="nom"><strong>nom </strong><i style="color: red;">*</i></label>
                            <input type="text" name="nom" id="nom" class="form-control" placeholder="5 caractères minimun" required>
                          
                        </div>

                        <div  class="form-group">
                            <label for="nom"><strong>prenom </strong><i style="color: red;">*</i></label>
                            <input type="text" name="nom" id="nom" class="form-control" placeholder="5 caractères minimun" required>
                          
                        </div>
                        
                        <div class="form-group">
                            <label for="email"><strong>Email </strong><i style="color: red;">*</i></label>
                            <input type="email" name="email" id="email" class="form-control" placeholder="ex: joseph@gmail.com" required>
                            <span id="email_result"></span>
                           
                        </div>
                      <!-- <div class="form-group">
                            <label for="logo">photo</label>
                            <img src="<?php echo base_url('assets/').$photo; ?>">
                            <input type="file" name="photo" value="<?php echo $photo;?>" accept=".jpg, .jpeg, .png, .gif, .JPG, .JPEG, .PNG, .GIF" class="form-control" >
                        </div>-->
                        <div id="role"  class="form-group">
                          <label for="role" ><strong>Role</strong></label>
                         <select name="role" class="form-control">
                             <option value="">selectionner role</option>
                             <?php 

                                   foreach($roles as $role)
                                   {
                                     echo '<option value="'.$role->id_role.'">'.$role->type_role.'</option>';
                                   }
                             ?>
                        </select>
                        </div>         
                        <div id="qualite"  class="form-group">
                          <label for="qualite" ><strong>Qualité</strong></label>
                         <select name="qualite" class="form-control">
                             <option value="">Aucune </option>
                             <?php 

                                   foreach($qualite as $qualite)
                                   {
                                     echo '<option value="'.$qualite->id_qualite.'">'.$qualite->intitule_qualite.'</option>';
                                   }
                             ?>
                        </select>
                        </div>                     
                        <div id="service"  class="form-group">
                          <label for="service" ><strong>service</strong></label>
                         <select name="service" class="form-control">
                             <option value="">selectionner service</option>
                             <?php 

                                   foreach($blogs as $blog)
                                   {
                                     echo '<option value="'.$blog->id_service.'">'.$blog->nom_service.'</option>';
                                   }
                             ?>
                        </select>
                    </div>

                    <div id="date_ar" class="form-group">
                        <label for="date_entree"><strong>Date d'entrée</strong></label>
                        <input type="date" min="1993-01-01" max="<?= date("Y-m-d") ?>" class="form-control" name="date_ar">
                    </div>
                        <div class="form-group">
                          <label for="grade"><strong>grade</strong></label>
                         <select name="grade" class="form-control">
                             <option value="">selectionner grade</option>
                             <?php 
                                  
                                   foreach($grades as $grade)
                                   {
                                     echo '<option value="'.$grade->id_grade.'">'.$grade->nom_grade.'</option>';
                                   }
                             ?>
                        </select>
                    </div>
                       <div class="form-group ">
                        <label for="poste"><strong>poste</strong></label><br>
                             <?php 
                             $i=1;
                                   foreach($postes as $poste)
                                   {
                                    
                                     echo '<input  type="checkbox" value="'.$poste->id_poste.'" name="poste'.$i.'" > &nbsp';
                                     echo $poste->nom_poste;
                                     echo "&nbsp &nbsp &nbsp";
                                     $i++;
                                   }
                             ?>
                    </div>
             
                        <div class="form-group">
                          <label for="departement"><strong>departement</strong></label>
                         <select name="departement" class="form-control">
                             <option value="">selectionner departement</option>
                             <?php 

                                   foreach($deps as $dep)
                                   {
                                     echo '<option value="'.$dep->id_departement.'">'.$dep->nom_departement.'</option>';
                                   }
                             ?>
                        </select>
                    </div>    

                        <div class="text-center">
                        <button class="btn btn-primary " name="enregistrer">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    <script type="text/javascript">
    $(document).ready(function(){
        $('#email').change(function(){
            var email= $('#email').val();
            if(email !='')
            {
            $.ajax({
                url:"<?php echo base_url();?>admin/admin/email_avaibility",
                method: "POST",
                data:{email:email},
                success: function(data){
                    $('#email_result ').html(data);
                }

            });
            }
        });
           
         $('#date_ar').hide();
        $('#service').change(function(){
            var estRempli=true;
            $('#service').each(function(){
                   if($(this)=="")
                   {
                    estRempli=false;
                   }  
            });
            if(estRempli)
            {
                $('#date_ar').show();
            }else { $('#date_ar').hide() ; }

        });


    });
 </script>
