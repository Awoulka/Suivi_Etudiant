                      <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                          Liste des parcours

                            </div>
                        </div>
                <div class="card-body">
                     <table id="" class="table  table-bordered table-responsive">
                                    <thead>
                            <tr>
                                <th>#</th>
                                <th>parcour</th>
                                <th>Abreviation</th>
                                <th>Niveaux</th>
                                <th>Departement</th>
                                <th>Mention</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                             <?php 
                             $n=1;
                                if($parcours)
                                {
                                    foreach($parcours as $parcour)
                                    {
                                  ?>
                            <tr>
                                <td><?php echo  $n++; ?></td>
                                <td><?php echo $parcour->nom_parcour ?> </td>
                                <td><?php echo $parcour->abreviation_parcour ?> </td>
                                <td>
                                <?php 
                                  $pos=$this->admin_model->getNiveaubyParcour($parcour->id_parcour);
                                     if($pos)
                                     {
                                      
                                            foreach($pos as $po)
                                            {
                                          
                                            echo $po->niveau.'&nbsp; &nbsp; &nbsp; &nbsp;' ;
                                           
                                             }
                                      }
                                  ?>
                                  </td>
                                <td><?php echo $parcour->nom_departement ?> </td>
                                <td><?php echo $parcour->nom_mention ?> </td>
                                <td>
                                <a href="<?php echo base_url('admin/admin/modifier_parcour/'.$parcour->id_parcour);?>" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-warning update"><i class=" fa fa-pencil-square-o"></i></a>

                                    <a href="<?php echo base_url('admin/admin/delete_parcour/'.$parcour->id_parcour); ?>"  onclick="return confirm('etes vous sur de vouloir supprimer?');" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-danger delete"><i class=" fa fa-trash-o"></i></a>
                                  
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