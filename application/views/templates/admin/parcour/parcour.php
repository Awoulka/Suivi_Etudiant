

        <!-- Header-->
    <!-- Page Heading -->
    <div class="row">
        
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                 <strong class="card-title">Gerer les parcours</strong>
                         <?php 
                       if($this->session->flashdata('success_msg')){
                     ?>
                     <div class="alert  alert-success alert-dismissible fade show">
                         <?php echo $this->session->flashdata('success_msg');?>
                     </div>
                
                     <?php 
                     }if($this->session->flashdata('error_msg')){ 
                      ?>
                     <div class="alert  alert-danger alert-dismissible fade show">
                         <?php echo $this->session->flashdata('error_msg');?>
                     </div>
                      <?php 
                     } 
                      ?>

                    <a href="<?php echo base_url('admin/admin/add_parcour') ?>" style="border-radius:20px;" id="btn_add" class="btn btn-outline-success float-right">
                    <i class="glyphicon glyphicon-plus fa fa-plus"></i>Ajouter un parcour </a>

                 </div>
        <div class="card-body">
           <div class="content mt-3">
              <div class="animated fadeIn">
                     <div class="row">

  <?php $this->load->view('templates/admin/parcour/table') ?>          

                    </div>

                    </div>
             </div>
        </div>



    <!-- Right Panel -->

