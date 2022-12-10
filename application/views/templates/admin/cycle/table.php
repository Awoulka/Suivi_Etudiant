                      <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                          Liste des cycles

                            </div>
                        </div>
                <div class="card-body">
                     <table id="" class="table  table-bordered table-responsive">
                                    <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom cycle</th>
                                <th>Abreviation</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                             <?php 
                             $n=1;
                                if($cycles)
                                {
                                    foreach($cycles as $cycle)
                                    {
                                  ?>
                            <tr>
                                <td><?php echo  $n++; ?></td>
                                <td><?php echo $cycle->intitule_cycle ?> </td>
                                <td><?php echo $cycle->abreviation_cycle ?> </td>
                                <td>
                                <a href="<?php echo base_url('admin/admin/modifier_cycle/'.$cycle->id_cycle);?>" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-warning update"><i class=" fa fa-pencil-square-o"></i></a>

                                    <a href="<?php echo base_url('admin/admin/delete_cycle/'.$cycle->id_cycle); ?>"  onclick="return confirm('etes vous sur de vouloir supprimer?');" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-danger delete"><i class=" fa fa-trash-o"></i></a>
                                  
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