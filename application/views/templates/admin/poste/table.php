 <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                          Liste des postes

                            </div>
                        </div>
                <div class="card-body">
                     <table id="" class="table  table-bordered table-responsive">
                                    <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom poste</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                             <?php 
                             $n=1;
                                if($postes)
                                {
                                    foreach($postes as $poste)
                                    {
                                  ?>
                            <tr>
                                <td><?php echo  $n++; ?></td>
                                <td><?php echo $poste->nom_poste ?> </td>
                                <td>
                                <a href="<?php echo base_url('admin/admin/modifier_poste/'.$poste->id_poste);?>" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-warning update"><i class=" fa fa-pencil-square-o"></i></a>

                                    <a href="<?php echo base_url('admin/admin/delete_poste/'.$poste->id_poste); ?>"  onclick="return confirm('etes vous sur de vouloir supprimer?');" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-danger delete"><i class=" fa fa-trash-o"></i></a>
                                  
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