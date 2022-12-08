<?php
	

	/*	-------------------------
	 *  | Fonction css_url      |
     *  -------------------------
	 *	Cette fonction attend un paramètre qui devra être une chaîne de caractères. Il nous suffit donc 
	 * simplement d'ajouter le nom de domaine avant, puis le chemin, ensuite le paramètre et enfin 
	 * l'extension.
	 * Le nom de domaine sera récupéré via la fonction base_url.
	 *
	 */
	/*********** css_url_user**********/
	if ( ! function_exists('css_url_user'))
	{
		function css_url_user($nom) 
		{
			return '<link rel="stylesheet" type="text/css" href="'. base_url().'assets/css/'.$nom.'.css" >';
		}
	} 


	/*********** css_url_font**********/
	if ( ! function_exists('css_url_font'))
	{
		function css_url_font($nom) 
		{
			return '<link rel="stylesheet" type="text/css" href="'. base_url().'assets/vendor/fontawesome-free/css/'.$nom.'.css" >';
		}
	}

	/*********** css_url_vendor_datatable**********/
	if ( ! function_exists('css_url_vendor_datable'))
	{
		function css_url_vendor_datable($nom) 
		{
			return '<link rel="stylesheet" type="text/css" href="'. base_url().'assets/vendor/datatables/'.$nom.'.css" >';
		}
	}

	/*********** css_url_plugins**********/
	if ( ! function_exists('css_url_plugins'))
	{
		function css_url_plugins($nom) 
		{
			return '<link rel="stylesheet" type="text/css" href="'. base_url().'assets/plugins/toast/'.$nom.'.css">';
		}
	} 

	/*********** css_url_skins**********/
	if ( ! function_exists('css_url_skins'))
	{
		function css_url_skins($nom) 
		{
			return '<link rel="stylesheet" type="text/css" href="'. base_url().'assets/dist/css/skins/'.$nom.'.css" media="all" >';
		}
	} 

	/*	-------------------------
	 *  |  Fonction js_url      |
     *  -------------------------
	 */

	/*********** js_url**********/

	if ( ! function_exists('js_url_user'))
	{
	   function js_url_user($nom)
	   {
	       return '<script src="' . base_url() . 'assets/user/js/' . $nom . '.js"></script>';
	   } 
	}

	/*********** js_url_demo**********/
	if ( ! function_exists('js_url_user_demo'))
	{
	   function js_url_user_demo($nom)
	   {
	       return '<script src="' . base_url() . 'assets/user/js/demo/' . $nom . '.js"></script>';
	   } 
	}
	/*********** js_url_vendor_datatable**********/
	if ( ! function_exists('js_url_vendor_datable'))
	{
	   function js_url_vendor_datable($nom)
	   {
	       return '<script src="' . base_url() . 'assets/user/vendor/datatables/' . $nom . '.js"></script>';
	   } 
	}
	
	/*********** js_url_vendor_jquery**********/
	if ( ! function_exists('js_url_vendor_jq'))
	{
	   function js_url_vendor_jq($nom)
	   {
	       return '<script src="' . base_url() . 'assets/user/vendor/jquery/' . $nom . '.js"></script>';
	   } 
	}

	/*********** js_url_vendor_jquery-easing**********/
	if ( ! function_exists('js_url_vendor_jqe'))
	{
	   function js_url_vendor_jqe($nom)
	   {
	       return '<script src="' . base_url() . 'assets/user/vendor/jquery-easing/' . $nom . '.js"></script>';
	   } 
	}

	/*********** js_url_vendor_boostrap**********/
	if ( ! function_exists('js_url_vendor_bst'))
	{
	   function js_url_vendor_bst($nom)
	   {
	       return '<script src="' . base_url() . 'assets/user/vendor/bootstrap/js/' . $nom . '.js"></script>';
	   } 
	}


	/*	---------------------------------
	 *  |  Fonction js_url ckeditor     |
     *  ---------------------------------
	 */

	if ( ! function_exists('ckeditor_url'))
	{
	   function ckeditor_url($nom)
	   {
	       return '<script src="' . base_url() . 'assets/user/ckeditor/' . $nom . '.js"></script>';
	   } 
	}



	/*	-------------------------
	 *  | Fonction img_url      |
     *  -------------------------
	 * En effet, cette fonction ne peut pas connaître à l'avance l'extension de l'image, contrairement aux 
	 * fichiers CSS et JavaScript.
	 */
	if ( ! function_exists('img_url_user'))
	{
		function img_url_user($n)
		{
			return base_url().'/assets/user/images/'.$n ;
		}
	}

	if ( ! function_exists('profil_url_user'))
	{
		function profil_url_user($n)
		{
			return base_url().'/uploads/avatars/'.$n ;
		}
	}

	/*	-------------------------
	 *  |     Fonction img      |
     *  -------------------------
     *
     * Cette fonction attend deux paramètres. Le premier est le nom de l'image. Nous allons donner cette 
     * variable directement à la fonction img_url. Le deuxième paramètre sera pour l'attribut alt de 
     * l'image. Il est donc facultatif.
     * usage: <?= img_admin($nom, $alt='', $classe='', $width='', $height='') ;?>
     */
	if ( ! function_exists('img_user'))
	{
		function img_user($nom, $alt='', $classe='', $width='', $height='', $id='')
		{
			return '<img src="'.img_url_user($nom).'" alt="'.$alt.'" class="'.$classe.'" width="'.$width.'" height="'.$height.'" id="'.$id.'" />';
		}
	}


	if ( ! function_exists('profil_user'))
	{
		function profil_user($nom, $alt='', $classe='', $width='', $height='', $id='')
		{
			return '<img src="'.profil_url_user($nom).'" alt="'.$alt.'" class="'.$classe.'" width="'.$width.'" height="'.$height.'" id="'.$id.'" />';
		}
	}



	/*	-------------------------
	 *  | Fonction img_url      |
     *  -------------------------
	 * En effet, cette fonction ne peut pas connaître à l'avance l'extension de l'image, contrairement aux 
	 * fichiers CSS et JavaScript.
	 */
	if ( ! function_exists('photo_url'))
	{
		function photo_url($nom)
		{
			return base_url().'assets/user/images/photo/'.$nom ;
		}
	}


	/*	-------------------------
	 *  |     Fonction img      |
     *  -------------------------
     *
     * Cette fonction attend deux paramètres. Le premier est le nom de l'image. Nous allons donner cette 
     * variable directement à la fonction img_url. Le deuxième paramètre sera pour l'attribut alt de 
     * l'image. Il est donc facultatif.
     */
	if ( ! function_exists('photo'))
	{
		function photo($nom, $alt='', $classe='', $width='', $height='')
		{
			return '<img src="'.photo_url($nom).'" alt="'.$alt.'" class="'.$classe.'" width="'.$width.'" height="'.$height.'" />';
		}
	}



/*	-------------------------
	 *  |     Fonction img      |
     *  -------------------------
     *
     * Cette fonction attend deux paramètres. Le premier est le nom de l'image. Nous allons donner cette 
     * variable directement à la fonction img_url. Le deuxième paramètre sera pour l'attribut alt de 
     * l'image. Il est donc facultatif.
     */
	if ( ! function_exists('icone'))
	{
		function icone($nom)
		{
			return '<link rel="apple-touch-icon" href="'.img_url_admin($nom).'"/><link rel="shortcut icon" href="'.img_url_admin($nom).'"/>';
		}
	}




	function diff_dates($min_date, $sup_date)
    {
        $d1 = new DateTime($min_date);
        $d2 = new DateTime($sup_date);
        $diff = $d1->diff($d2);

        if ($d2 <= $d1) {
        	return FALSE;
        }
        else
        {
        	$nb_jours = $diff->d; 
            $nb_mois = $diff->m;
        
            $result =$nb_jours+$nb_mois*30; 
        
            if ($result >= 25 && $result <= 30*6) 
            {
                return $result;
            }
            else
            {    
                return FALSE;
            }
        }
    }



    function lambey_crypt_pass($pass)
    {
    	$pre_sel= '**&@1f2900cb90/\|12d005db9^52a5dc93a7--]gg[-+987/5*6##@$$';
        $post_sel= '@#$a79b%1ee621cf8f1df*/4a4b&f1)7f2190(2fe2afc459c_)(@';

	    $pwd_cry = hash('sha512', $pre_sel . $pass . $post_sel . '[*]' .$pass);

	    return $pwd_cry;
    }