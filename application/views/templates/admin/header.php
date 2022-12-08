<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>SuiviEtudiant</title>
    <meta name="description" content="Sufee Admin - HTML5 Admin Template">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" href="apple-icon.png">
    <link rel="shortcut icon" href="<?php  echo base_url('assets/');?>sufee/favicon.ico">

    <link rel="stylesheet" href="<?php  echo base_url('assets/');?>sufee/vendors/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php  echo base_url('assets/');?>sufee/vendors/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="<?php  echo base_url('assets/');?>sufee/vendors/themify-icons/css/themify-icons.css">
    <link rel="stylesheet" href="<?php  echo base_url('assets/');?>sufee/vendors/flag-icon-css/css/flag-icon.min.css">
    <link rel="stylesheet" href="<?php  echo base_url('assets/');?>sufee/vendors/selectFX/css/cs-skin-elastic.css">
    <link rel="stylesheet" href="<?php  echo base_url('assets/');?>sufee/vendors/jqvmap/dist/jqvmap.min.css">
    <script src="<?php  echo base_url('assets/');?>sweetalert/sweetalert.min.js"></script>



    <link rel="stylesheet" href="<?php  echo base_url('assets/');?>sufee/assets/css/style.css">

    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>
    <script>var base_url = "<?php echo base_url();?>";</script>

</head>

<body>


    <!-- Left Panel -->

    <aside id="left-panel" class="left-panel">
        <nav class="navbar navbar-expand-sm navbar-default">

            <div class="navbar-header">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="<?php  echo base_url();?>choix/consult_salle">SuiviEtudiant
                </a>
                <a class="navbar-brand hidden" href="<?php  echo base_url();?>choix/consult_salle">SE</a>
            </div>

           <div id="main-menu"  class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active">
                        <a href="<?php echo base_url('admin/admin/admin_page') ?>"style="color:black;"> <i class="menu-icon fa fa-dashboard"></i>ADMINISTRATEUR </a>
                    </li>
                    <h3 class="menu-title">Personnel</h3><!-- /.menu-title -->
                    <li>
                        <a href="<?php echo base_url('admin/admin/') ?>add_user"> <i class="menu-icon ti-user " ?></i>Ajouter personnel </a>
                    </li>
                    <li>
                        <a href="<?php echo base_url('admin/admin/') ?>user_page"> <i class="menu-icon ti-list " ?></i>Liste personnels</a>
                    </li>
                   <h3 class="menu-title">Comptes</h3><!-- /.menu-title -->
                    <li>
                        <a href="<?php echo base_url('admin/admin/') ?>add_compte"> <i class="menu-icon ti-user " ?></i>Ajouter compte </a>
                    </li>
                    <li>
                        <a href="<?php echo base_url('admin/admin/') ?>compte_page"> <i class="menu-icon ti-list " ?></i>Liste comptes</a>
                    </li>
                    <h3 class="menu-title">Paramétrage du système</h3><!-- /.menu-title -->
                    <li class="menu-item-has-children dropdown">
                      <a href="" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-gear"></i>Paramètres</a>
                        <ul class="sub-menu children dropdown-menu">

                            <li><i class="menu-icon fa fa-sign-in"></i><a href="<?php echo base_url('admin/admin/faculte_page') ?>">facultés</a></li>

                            <li><i class="menu-icon fa fa-sign-in"></i><a href="<?php echo base_url('admin/admin/mention') ?>">Mentions</a></li>

                            <li><i class="menu-icon fa fa-sign-in"></i><a href="<?php echo base_url('admin/admin/parcour') ?>">Parcours</a></li>

                            <li><i class="menu-icon fa fa-sign-in"></i><a href="<?php echo base_url('admin/admin/cycle') ?>">Cycles</a></li>

                            <li><i class="menu-icon fa fa-sign-in"></i><a href="<?php echo base_url('admin/admin/niveau') ?>">Niveaux</a></li>

                            <li><i class="menu-icon fa fa-sign-in"></i><a href="<?php echo base_url('admin/admin/ue') ?>">UE</a></li>

                            <li><i class="menu-icon fa fa-sign-in"></i><a href="<?php echo base_url('admin/admin/poste_page') ?>">Années académiques</a></li>

                            <li><i class="menu-icon fa fa-sign-in"></i><a href="<?php echo base_url('admin/admin/poste_page') ?>">Postes</a></li>

                           <!-- <li><i class="menu-icon fa fa-sign-in"></i><a href="<?php echo base_url('admin/admin/grade') ?>">Grades</a></li> -->
                           <!-- <li><i class="menu-icon fa fa-sign-in"></i><a href="<?php echo base_url('admin/admin/') ?>role">Roles</a></li> -->
                           <!-- <li><i class="menu-icon fa fa-sign-in"></i><a href="<?php echo base_url('admin/admin/') ?>service">Services</a></li> -->
                            <!-- <li><i class="menu-icon fa fa-sign-in"></i><a href="<?php echo base_url('admin/admin/departement') ?>">Departements</a></li> -->
                                                   
                          
                          

                          <!-- <li><i class="menu-icon fa fa-sign-in"></i><a href="<?php echo base_url('admin/admin/salle') ?>">Salle</a></li> -->
                          <!-- <li><i class="menu-icon fa fa-sign-in"></i><a href="<?php echo base_url('admin/admin/plage') ?>">Plages</a></li> -->
                          <li><i class="menu-icon fa fa-gear"></i><a href="<?php echo base_url('admin/admin/etablissement') ?>">Etablissement</a></li>
                                                    
                        </ul>
                    </li>

            </div><!-- /.navbar-collapse -->
        </nav>
    </aside><!-- /#left-panel -->

    <!-- Right Panel -->

    <div id="right-panel" class="right-panel">


        <!-- Header-->
        <header id="header" class="header">

            <div class="header-menu">
                <div class="col-sm-7">
                    <a id="menuToggle" class="menutoggle pull-left"><i class="fa fa fa-tasks"></i></a>
                    <div class="header-left">
                        <!--button class="search-trigger"><i class="fa fa-search"></i></button-->
                        <div class="form-inline">
                            <form class="search-form">
                                <input class="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search">
                                <button class="search-close" type="submit"><i class="fa fa-close"></i></button>
                            </form>
                        </div>

                        <div class="dropdown for-notification">
                            
                        </div>

                        <div class="dropdown for-message">
                            
                           
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-5">
                    <div class="user-area dropdown float-right"></br>
                        
                        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style=" color:blue; margin-right: 10px;">
                        <i class="fa fa-user-circle" ></i> <?php  echo $this->session->nom_personnel;?></a>
                        </a>

                        <div class="user-menu dropdown-menu">
                         <a style=" color:red; margin-right: 10px;" class="" href="<?php  echo base_url();?>index.php/authentification/deconnexion"><i class="fa fa-power-off"></i>  Deconexion</a>

                           
                        </div>
                    </div>

                    
            </div>

        </header><!-- /header -->
        <!-- Header-->
