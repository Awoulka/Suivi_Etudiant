                      <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                          Liste des mentions

                            </div>
                        </div>
                <div class="card-body">
                     <table id="" class="table  table-bordered table-responsive">
                                    <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom mentions</th>
                                <!-- <th>Abreviation</th> -->
                                <th>Facultés</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                             <?php 
                             $n=1;
                                if($mentions)
                                {
                                    foreach($mentions as $mention)
                                    {
                                  ?>
                            <tr>
                                <td><?php echo  $n++; ?></td>
                                <td><?php echo $mention->intitule_mention ?> </td>
                                <td><?php echo $mention->libele_faculte ?> </td>
                                <!-- <td><?php echo $mention->intitule_faculte ?> </td> -->
                                <td>
                                <a href="<?php echo base_url('admin/admin/modifier_mention/'.$mention->id_mention);?>" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-warning update"><i class=" fa fa-pencil-square-o"></i></a>

                                    <a href="<?php echo base_url('admin/admin/delete_mention/'.$mention->id_mention); ?>"  onclick="return confirm('etes vous sur de vouloir supprimer?');" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-danger delete"><i class=" fa fa-trash-o"></i></a>
                                  
                                </td>
                            </tr>
                                <?php
                                    }
                                }
                             ?>
                               </tbody>
                                </table>




                                <table id="bootstrap-data-table-export" class="table table-striped table-bordered table-responsive">
                                    <thead>
                            <tr>
                                <th>#</th>
                                <th>Mentions</th>
                                <th>Facultés</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                             <?php 
                             $n=1;
                                if($mentions)
                                {
                                    foreach($mentions as $row)
                                    {
                                  ?>
                            <tr>
                                <td><?php echo  $n++; ?></td>
                                <td><?php echo $row->intitule_mention ?> </td>
                                <td><?php echo $row->libele_faculte ?> </td>
                                
                                <td>
                                <a href="<?php echo base_url('admin/admin/modifier_mention/'.$mention->id_mention);?>" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-warning update"><i class=" fa fa-pencil-square-o"></i></a>

                                    <a href="<?php echo base_url('admin/admin/delete_mention/'.$mention->id_mention); ?>"  onclick="return confirm('etes vous sur de vouloir supprimer?');" style="border-radius:20px; margin-bottom: 5px; " class="btn btn-outline-danger delete"><i class=" fa fa-trash-o"></i></a>
                                 

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

<script src="<?php  echo base_url('assets/');?>sufee/vendors/admin/datatables.net/js/jquery.dataTables.min.js"></script>
    <script src="<?php  echo base_url('assets/');?>sufee/vendors/admin/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
    <script src="<?php  echo base_url('assets/');?>sufee/vendors/admin/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
    <script src="<?php  echo base_url('assets/');?>sufee/vendors/admin/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"></script>
 <script src="<?php  echo base_url('assets/');?>sufee/vendors/admin/datatables.net-buttons/js/buttons.html5.min.js"></script>
    <script src="<?php  echo base_url('assets/');?>sufee/vendors/admin/datatables.net-buttons/js/buttons.print.min.js"></script>
    <script src="<?php  echo base_url('assets/');?>sufee/vendors/admin/datatables.net-buttons/js/buttons.colVis.min.js"></script>
    <script src="<?php  echo base_url('assets/');?>sufee/admin/js/init-scripts/data-table/datatables-init.js"></script>