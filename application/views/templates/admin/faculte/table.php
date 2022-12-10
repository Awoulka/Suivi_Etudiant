 <div class="col-md-7">
                        <div class="card">
                            <div class="card-header">
                          Liste des Facultés

                            </div>
                        </div>
                <div class="card-body">
                      <table class="table  table-bordered table-responsive">
                                    <thead>
                            <tr>
                                <th>#</th>
                                <th>Noms</th>
                                 <th>Abreviations</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                             <?php 
                             $n=1;
                                if($facultes)
                                {
                                    foreach($facultes as $faculte)
                                    {
                                  ?>
                            <tr>
                                <td><?php echo  $n++; ?></td>
                                <td><?php echo $faculte->libele_faculte ?> </td>
                                <td><?php echo $faculte->abreviation_faculte ?> </td>
                                <td>
                                <a href="<?php echo base_url('admin/admin/modifier_faculte/'.$faculte->id_faculte);?>" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-warning update"><i class=" fa fa-pencil-square-o"></i></a>

                                    <a href="<?php echo base_url('admin/admin/delete_faculte/'.$faculte->id_faculte); ?>"  onclick="return confirm('etes vous sur de vouloir supprimer?');" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-danger delete"><i class=" fa fa-trash-o"></i></a>
                                  
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