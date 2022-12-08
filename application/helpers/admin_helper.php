    <?php
    function pivot_crypt_pass($pass)
    {
    	$pre_sel= '**&@1f2900cb90/\|12d005db9^52a5dc93a7--]gg[-+987/5*6##@$$';
        $post_sel= '@#$a79b%1ee621cf8f1df*/4a4b&f1)7f2190(2fe2afc459c_)(@';

	    $pwd_cry = hash('sha512', $pre_sel . $pass . $post_sel . '[*]' .$pass);

	    return $pwd_cry;
	}
      
	if ( ! function_exists('icone'))
	{
		function icone($nom)
		{
			return '<link rel="apple-touch-icon" href="'.img_url_admin($nom).'"/><link rel="shortcut icon" href="'.img_url_admin($nom).'"/>';
		}
	}


	if ( ! function_exists('css_url_admin'))
	{
		function css_url_admin($nom) 
		{
			return '<link rel="stylesheet" type="text/css" href="'. base_url().'assets/css/'.$nom.'.css" media="all" >';
		}
	} 



	if ( ! function_exists('js_url_admin'))
	{
	   function js_url_admin($nom)
	   {
	       return '<script src="' . base_url() . 'assets/js/' . $nom . '.js"></script>';
	   } 
	}

	if ( ! function_exists('img_admin'))
	{
		function img_admin($nom, $alt='', $classe='', $width='', $height='', $id='')
		{
			return '<img src="'.img_url_admin($nom).'" alt="'.$alt.'" class="'.$classe.'" width="'.$width.'" height="'.$height.'" id="'.$id.'" />';
		}
	}




	if ( ! function_exists('img_url_admin'))
	{
		function img_url_admin($n)
		{
			return base_url().'/assets/images/'.$n ;
		}
	}
