
   

    $(document).ready(
      function(){

 
                

                $.ajax({

                  
                  url: base_url + "choix/ch1" ,
                  type: "POST",
                  async: false,

                  data : {mention : $id_mention,
                          cycle : $id_cycle},
                  dataType: "json",
                  success: function(data){
                    

           $(".Parcour option").remove();
           for (var i = 0; data.parcours.length - 1 >= i; i++) {

              if (data.parcours[i].mention_id == $id_mention) {
                
                $("select.Parcour,select.P").append("<option id="+data.parcours[i].id_parcour+">"+ data.parcours[i].abreviation_parcour+"</option>");
              }
           }
           $(".Niveau option").remove();
           $.ajax({

                  
                    url: base_url + "Choix/niveau_p" ,
                    type: "POST",
                    async: false,

                    data : {id_parcour: $("select.Parcour").children(".Parcour option:selected").attr('id'),
                            cycle:$("select.Cycle").children(".Cycle option:selected").attr('id')},
                    dataType: "json",
                    success: function(data){
                      
                        
                             for (var i = 0; data.niv.length - 1 >= i; i++) {
                               $("select.Niveau,select.N").append("<option id="+data.niv[i].id_niv_par+">"+ data.niv[i].rendu+"</option>");
                              
           } 
        

        }
                });
            
             $(".bouton_precedent").attr("href",base_url+"Enregistrement/precedent/" + $("select.Niveau").children(".Niveau option:selected").attr('id')+ "/" + $("select.Cycle").children(".Cycle option:selected").attr('id'))

          $(".bouton_n_edit").attr("href",base_url+"Enregistrement/nouvelle_edition/" + $("select.Niveau").children(".Niveau option:selected").attr('id')+ "/" + $("select.Cycle").children(".Cycle option:selected").attr('id'))

        }
                });


                
      //chargement des parcours lorsqu'on change la valeur du cycle selectionné
          $(".Cycle").change(function(){

            $(".Parcour option").remove();
            $(".Niveau option").remove();


            $.post(
              base_url + "choix/ch1",
              { cycle : $("select.Cycle").children(".Cycle option:selected").attr('id'),
                mention : $id_mention},
              function(data){
            
              
           
           for (var i = 0; data.parcours.length - 1 >= i; i++) {
             
             if (data.parcours[i].mention_id == $id_mention) {

                   $("select.Parcour,select.P").append("<option id="+data.parcours[i].id_parcour+">"+ data.parcours[i].abreviation_parcour+"</option>");
              }
           }
           
          $.ajax({

                  
                    url: base_url + "Choix/niveau_p" ,
                    type: "POST",
                    async: false,

                    data : {id_parcour: $("select.Parcour").children(".Parcour option:selected").attr('id'),
                            cycle:$("select.Cycle").children(".Cycle option:selected").attr('id')},
                    dataType: "json",
                    success: function(data){
                      
                        
                             for (var i = 0; data.niv.length - 1 >= i; i++) {
                               $("select.Niveau,select.N").append("<option id="+data.niv[i].id_niv_par+">"+ data.niv[i].rendu+"</option>");
                              
           } 
        

        }
                });

            //systeme_plage();
            $(".bouton_precedent").attr("href",base_url+"Enregistrement/precedent/" + $("select.Niveau").children(".Niveau option:selected").attr('id')+ "/" + $("select.Cycle").children(".Cycle option:selected").attr('id'))

          $(".bouton_n_edit").attr("href",base_url+"Enregistrement/nouvelle_edition/" + $("select.Niveau").children(".Niveau option:selected").attr('id')+ "/" + $("select.Cycle").children(".Cycle option:selected").attr('id'))


            },
            "json"
            );
       

            
          });


     //chargement des niveaux lorsqu'on change la valeur du parcour selectionné
          $(".Parcour").change(function(){

            $.post(
              base_url + "choix/niveau_p",
              { id_parcour: $("select.Parcour").children(".Parcour option:selected").attr('id'),
                            cycle:$("select.Cycle").children(".Cycle option:selected").attr('id')},
              function(data){
  
           $(".Niveau option").remove();
           for (var i = 0; data.niv.length - 1 >= i; i++) {
             $("select.Niveau").append("<option id="+data.niv[i].id_niv_par+">"+ data.niv[i].rendu+"</option>");
          
        
           }

            //systeme_plage();
            $(".bouton_precedent").attr("href",base_url+"Enregistrement/precedent/" + $("select.Niveau").children(".Niveau option:selected").attr('id')+ "/" + $("select.Cycle").children(".Cycle option:selected").attr('id'))

          $(".bouton_n_edit").attr("href",base_url+"Enregistrement/nouvelle_edition/" + $("select.Niveau").children(".Niveau option:selected").attr('id')+ "/" + $("select.Cycle").children(".Cycle option:selected").attr('id'))

            },
            "json"
            );

            
          });
         
      $(".Niveau").change(function(){

          $(".bouton_precedent").attr("href",base_url+"Enregistrement/precedent/" + $("select.Niveau").children(".Niveau option:selected").attr('id')+ "/" + $("select.Cycle").children(".Cycle option:selected").attr('id'))

          $(".bouton_n_edit").attr("href",base_url+"Enregistrement/nouvelle_edition/" + $("select.Niveau").children(".Niveau option:selected").attr('id')+ "/" + $("select.Cycle").children(".Cycle option:selected").attr('id'))

          //alert($("select.Niveau").children(".Niveau option:selected").attr('id'));
        });






    //chargement du dernier emploi du TEMPS 

//ajax(table);
    $("#choix_ok").click(function(){

     

$(".pn").html($("select.Niveau").children(".Niveau option:selected").val());
nivv=$("select.Niveau").children(".Niveau option:selected").attr('id');      //$("td.td").empty();

      for (var i = 1; 7 - 1 >= i; i++) {
        
             tableau_id[i].length=0;

             tableau_valeurs[i].length=0;


         }

      for (var i = 1; 7 - 1 >= i; i++) {
        
             tableau_id_[i].length=0;

             tableau_valeurs_[i].length=0;


         }

         tableau_d.length=0;
         $("#table_entete").hide();
          $("#table").hide();

/*$.ajax({

                  
                  url: base_url + "Enregistrement/precedent" ,
                  type: "POST",
                  async: false,

                  data : {niv: $("select.Niveau").children(".Niveau option:selected").attr('id')},
                  dataType: "text",
                  success: function(data){

                    //alert(data);
                    $(".preced").html(data);
                  },
                  error:function(){
                    alert("erreur de requetes ");
                  }
                });
*/

ajax("Enregistrement/charge_",table);

 $(".n_edit").hide();
       $(".preced").fadeIn(1000);
        $("#edit").css('background-color','green');
  $("#pre").css('background-color','blue');

 for (var i = 1; i <7 ; i++) {
                     //alert("i="+i);
                     for (var j = 1; j <= 50 ; j++) {
                     

                           
                        tableau_id_[i][j]=-1;
                      
                      
                     }
                   }
      });


     $("#choix_date_ok").click(
          function(){
            $(".choix_dt").css("display","none");
          mois=[" ","janvier","fevrier","mars","avril","mai","juin","juillet","auout","septembre","octobre","novembre","decembre"];
            //select_periode=1;
            //$(".choix_date").hide();

          deb_s=$("select.annee_d").children(".annee_d option:selected").val()+
          "-"+$("select.moi_d").children(".moi_d option:selected").attr('class')+
          "-"+$("select.jour_d").children(".jour_d option:selected").attr('class');

          
          fin_s=$("select.annee_f").children(".annee_f option:selected").val()+
          "-"+$("select.moi_f").children(".moi_f option:selected").attr('class')+
          "-"+$("select.jour_f").children(".jour_f option:selected").attr('class');
          
          //alert("du "+deb_s+" au"+fin_s);
          
          if ($("select.moi_d").children(".moi_d option:selected").attr('class') == $("select.moi_f").children(".moi_f option:selected").attr('class')) {
            deb=$("select.jour_d").children(".jour_d option:selected").attr('class');
          }
          else{
          deb=$("select.jour_d").children(".jour_d option:selected").attr('class')+" "+$("select.moi_d").children(".moi_d option:selected").val();
              }
          fin=$("select.jour_f").children(".jour_f option:selected").attr('class')+" "+$("select.moi_f").children(".moi_f option:selected").val();

          $("select.periode").append("<option id=>"+"du "+deb+" au "+fin+"</option>");
           // alert(fin_s);

            if (tableau_semaine[1]!=deb_s) {
            //alert($("select.sem").children(".sem option:selected").val());
              tableau_semaine[0]=$("select.sem").children(".sem option:selected").val();
              tableau_semaine[1]=deb_s;
              tableau_semaine[2]=fin_s;
              tableau_semaine[3]="<?php foreach ($annee as $row) {echo $row->id_annee;} ?>";
              tableau_semaine[4]=tableau_nbh.length;
              tableau_semaine[5]=0;
              tableau_semaine[6]=$("select.Semestre").children(".Semestre option:selected").attr('id');

             
            }
            
      });

  $("#periode").change(
          function(){

            
            
      });


        
            $("select.Semestres").change(function(){


              $(".Enseignant option").remove();
                   $(".EC option").remove();
                    $("input[name=optradio]").removeAttr('checked'); 
                    $(".Salle option").remove();
                    $(".heure option").remove();
                    $(".evolution option").remove();
                    
                $.post(
                          base_url + "Choix_planification/ch",
                          { PN : nivv,
                            Semestre : $("select.Semestres").children(".Semestres option:selected").attr('id')},
                          function(data){
                                                 //alert(data);
                                          $(".UE option").remove();

                                          $("select.UE").append("<option id='nul'></option>");
                                           
                                          for (var i = 0; data.ue.length - 1 >= i; i++) {
                                               $("select.UE").append("<option id="+data.ue[i].id_ue+">"+ data.ue[i].intitule_ue+"</option>");
                                             }
                                          for (var i = 0; data.salle.length - 1 >= i; i++) {
                                               $("select.Salle").append(
                                                                          "<option id="+data.salle[i].id_salle+">"+data.salle[i].nom_salle+"("+data.salle[i].intitule_salle+")</option>"
                                                                          );
                                           }

                       
                         },
                        "json"
                );
              
                   
              
            })

      //chargement des UE lorsqu'on clique sur une plage
          
    //chargement des EC etdes enseignant a la selection de l'UE

        $(".UE").change(function(){
              if ($("select.UE").children(".UE option:selected").attr('id')!="nul") {
                      $.post(
                                    base_url + "Choix_planification/ch1",
                                    { UE : $("select.UE").children(".UE option:selected").attr('id')},
                                    function(data){
                                      //alert(aaa[1]);
                                           $(".EC option").remove();
                                           for (var i = 0; data.ec.length - 1 >= i; i++) {
                                               $("select.EC").append("<option id="+data.ec[i].id_ec+">"+data.ec[i].code_ec+"("+data.ec[i].intitule_ec+")"+"</option>");
                                              }

                                              //alert('hbcvksjdghisufgiwsdu');
                                           $(".Enseignant option").remove();
                                           $(".heure option").remove();


                                           for (var i = 0; data.enseignant.length - 1 >= i; i++) {
                                       //alert(data);
                    //$(".b").html(data); 
                            $("select.Enseignant").append("<option id="+data.enseignant[i].id_personnel+">"+ data.enseignant[i].nom_prenom+"</option>");
                                             }


                                           $("select.heure").append("<option>"+data.ec[0].heure+"</option>");

                                           $(".evolution option").remove();

                                            if (data.evolution[0]!=null ) {
                                                d=data.evolution;
                                              }
                                           else{
                                                d=0;
                                                }

                                       for (var i =1; aaa[1] >=i ; i++) {
                                                                
                                          k=tableau_d.length; 
                                          if (i==aaa[1]) {  
                                           k=aaa[2]-1;
                                          }
                                              for (var j =1; k >=j ; j++) {
                                               //alert(j);
                                                    if (tableau_valeurs_[i][j]!=null) {
                                                        if (tableau_id_[i][j][3]==$("select.EC").children(".EC option:selected").attr('id')) {
                                                                if (parseInt(tableau_id_[i][j][4],10)!=0) {

                                                                d=parseInt(tableau_id_[i][j][4],10);
                                                                
                                                              }
                                                    
                                              }
                                                                              
                                           }
                                                                              
                                   }
                                 }
                                                      
                       $("select.evolution").append("<option>"+d+"</option>");
                                            
                                            
                                 
                                           
                                           
                         },
                        "json"
            );

                    $("select.EC,select.UE,select.Enseignant").css("border-color","white");
            }

            else
              {
                    //$(".UE option").remove();
                    $(".EC option").remove();
                     $(".Enseignant option").remove();
              }
            }); 
      // chargement des enseignant au changement de l'EC

        $(".EC").change(function(){

              
                      $.post(
                            base_url + "Choix_planification/ch2",
                            { EC : $("select.EC").children(".EC option:selected").attr('id')},
                            function(data){

                                     $(".Enseignant option").remove();
                                     $(".heure option").remove();

                                     for (var i = 0; data.enseignant.length - 1 >= i; i++) {
                                            $("select.Enseignant").append("<option id="+data.enseignant[i].id_personnel+">"+ data.enseignant[i].nom_prenom+"</option>");
                                     }

                                     $("select.heure").append("<option>"+data.ec[0].heure+"</option>");

                                    

                                      $(".evolution option").remove();

                                          if (data.evolution[0]!=null ) {
                                                d=data.evolution;
                                                
                                              }
                                           else{
                                                d=0;
                                                }

                                     
                                       for (var i =1; aaa[1] >=i ; i++) {
                                                                
                                          k=tableau_d.length; 
                                          if (i==aaa[1]) {
                                           k=aaa[2]-1;
                                          }
                                              for (var j =1; k >=j ; j++) {
                                               //alert(j);
                                                    if (tableau_valeurs_[i][j]!=null) {
                                                        if (tableau_id_[i][j][3]==$("select.EC").children(".EC option:selected").attr('id')) {
                                                                if (parseInt(tableau_id_[i][j][4],10)!=0) {

                                                                d=parseInt(tableau_id_[i][j][4],10);
                                                                
                                                              }
                                                    
                                              }
                                                                              
                                           }
                                                                              
                                   }
                                 }
                                      

                                                            
                       $("select.evolution").append("<option>"+d+"</option>");
                                            
                           },
                          "json"
                );
            }); 
     //Gestion des radio sur le formilaire d'enregistrement d'une plage
     $("input[name=optradio]").change(
          function(){
                          $(".radio").css("border","none");
                           $("select.EC,select.UE,select.Enseignant").css("border-color","white");
                          if ($("input[name=optradio]:checked").val()=="BIBLIOTHEQUE"  || $("input[name=optradio]:checked").val()=="Congé" || $("input[name=optradio]:checked").val()=="INVESTISSEMENT HUMAIN" || $("input[name=optradio]:checked").val()=="Vider") {

                                  $("select.EC").attr("disabled","true");
                                  $("select.UE").attr("disabled","true");
                                  $("select.Enseignant").attr("disabled","true");
                                  $("select.Salle").attr("disabled","true");

                                  if ($("select.UE").children(".UE option:selected").attr('id')!="nul" ) {
                                          //$(".UE option").remove();
                                        $("select.UE").children(".UE option[id=nul]").attr("selected","selected");
                                        //$("select.UE").prepend("<option id='nul' >2</option>");
                                       // $("select.UE").trigger('change');
                                        //$("select.UE").children(".UE option:selected").remove();
                                }
                            
                          }
                          else if ( $("input[name=optradio]:checked").val()=="Cour"    || 
                                    $("input[name=optradio]:checked").val()=="TP"      || 
                                    $("input[name=optradio]:checked").val()=="TPE"     ||
                                    $("input[name=optradio]:checked").val()=="TD"      || 
                                    $("input[name=optradio]:checked").val()=="CC"      ||
                                    $("input[name=optradio]:checked").val()=="SYNTHESE"|| 
                                    $("input[name=optradio]:checked").val()=="PROJET"  ||
                                    $("input[name=optradio]:checked").val()=="RATRAPAGE"
                            ) {
                           
                                  $("select.EC").removeAttr("disabled","false");
                                  $("select.UE").removeAttr("disabled","false");
                                  $("select.Enseignant").removeAttr("disabled","false");
                                  $("select.Salle").removeAttr("disabled","false");

                                  if ($("input[name=optradio]:checked").val()!="Cour") {

                                      $("select.Enseignant").attr("disabled","true");

                                  }
                            

                          }

                     //   $(".evolution option").remove();

                                         

                                     /*for (var i =1; aaa[1] >=i ; i++) {

                                                            
                                          k=3; 
                                          if (i==aaa[1]) {
                                           k=aaa[2]-1;
                                          }
                                              for (var j =1; k >=j ; j++) {
                                               
                                                    if (tableau_valeurs[i][j]!=null) {
                                                        if (tableau_id[i][j][3]==$("select.EC").children(".EC option:selected").attr('id')) {
                                                            if (parseInt(tableau_id[i][j][4],10)!=0) {

                                                                d=parseInt(tableau_id[i][j][4],10);
                                                              }
                                                                    
                                              }
                                                                              
                                           }
                                                                              
                                   }
                                 }
                                                            
                       $("select.evolution").append("<option>"+d+"</option>");*/
            
          });



    //enregistrement d'une plage

         
         
    });




        
      $("#enreg").click(
          function(){

            if  ($("input[name=optradio]:checked").val()!="BIBLIOTHEQUE"  && $("input[name=optradio]:checked").val()!="Congé" && $("input[name=optradio]:checked").val()!="Vider" && $("input[name=optradio]:checked").val()!="PROJET" && $("input[name=optradio]:checked").val()!="SYNTHESE" && $("input[name=optradio]:checked").val()!="INVESTISSEMENT HUMAIN" && $("input[name=optradio]:checked").val()!="RATRAPAGE") {

             $.ajax({

                  
                  url: base_url + "enregistrement/verification" ,
                  type: "POST",
                  //async: false,

                  data : {EC:$("select.EC").children(".EC option:selected").attr('id'),
                          debut:tableau_semaine[1],
                          jour:tableau_id_jour[aaa[1]-1],
                          plage:tableau_d[aaa[2]-1][1],
                          plage1:tableau_d[aaa[2]-1][2]},
                  dataType: "json",
                  success: function(data){
                    if (data.planifications.length!=0) {
                    info='';
            for (var i = 0; data.planifications.length - 1 >= i; i++) {

              info+="   "+(i+1)+"- "+data.planifications[i].nom_prenom+" est programmé en "+data.planifications[i].rendu+" de "+data.planifications[i].heure_debut[0]+data.planifications[i].heure_debut[1]+"h à "+data.planifications[i].heure_fin[0]+data.planifications[i].heure_fin[1]+"h pour un "+data.planifications[i].type_planing+'" de "'+data.planifications[i].intitule_ec+'" dans la meme journée"\n';
             

           }

                    swal('ATENTION!!!',info,'info');

                  }
                    //alert(data);
                    //$(".b").html(data);
                  },
                  error:function(){
                    alert("erreur de requetes d:!jyhqmh");
                  }
                });
           }



            mat=0;
            //alert($("input[name=optradio]:checked").val());
            val=$("select.EC").children(".EC option:selected").val();
            $("select.EC,select.UE,select.Enseignant").css("border-color","white");
            $(".radio").css("border","none");
            
            if ($("input[name=optradio]:checked").val()==null) {
                $(".radio").css("border","1px solid red");

            }
            else{
                  if (val==null && ($("input[name=optradio]:checked").val()!="BIBLIOTHEQUE"  && $("input[name=optradio]:checked").val()!="Congé" && $("input[name=optradio]:checked").val()!="Vider" && $("input[name=optradio]:checked").val()!="INVESTISSEMENT HUMAIN") ) {

                    $("select.EC,select.UE,select.Enseignant").css("border-color","red");
                    if ($("input[name=optradio]:checked").val()=="TP"      || 
                    $("input[name=optradio]:checked").val()=="TPE"     ||
                    $("input[name=optradio]:checked").val()=="TD"      || 
                    $("input[name=optradio]:checked").val()=="CC"      ||
                    $("input[name=optradio]:checked").val()=="SYNTHESE"|| 
                    $("input[name=optradio]:checked").val()=="PROJET"  ||
                    $("input[name=optradio]:checked").val()=="RATRAPAGE"
                      ) {
                     $("select.Enseignant").css("border-color","white");

                    }
                    
                  }
                  else{

        
                 num_jour=aaa[1];
                 num_plage=aaa[2];

                 debut=$debut;


                   
                                   

                                      

                       
                
                if (tableau_valeurs_[num_jour][num_plage]!=null){
                          mat=tableau_id_[num_jour][num_plage][3];
                }
                  val=$("select.evolution").children(".evolution option:selected").val();
          


                            if (val!=null) {

                             Evolution=parseInt(val,10)+parseInt(nbh,10);
                             //alert(Evolution);
                        }

                        else{                                                                
                              if (tableau_valeurs_[num_jour][num_plage]!=null) {
                                Evolution=tableau_valeurs_[num_jour][num_plage][4];
                              }
                              else{
                                Evolution=0;
                              }
                          
                        }
                  
               

                         
              
                if ( $("input[name=optradio]:checked").val()=="BIBLIOTHEQUE"  || $("input[name=optradio]:checked").val()=="Congé" || $("input[name=optradio]:checked").val()=="INVESTISSEMENT HUMAIN") {

                        Salle_id=$("select.Salle").children(".Salle option:selected").attr('id');
                        EC_id=null;
                        UE_id=0;
                        Evolution=0;
                        Salle=0;
                        EC=0;
                        Enseignant1=0;
                        Enseignant2=0;
                        heure=0;
                        UE=0;


                  }  
                  else{     
                  if (                $("input[name=optradio]:checked").val()=="TP"      || 
                                      $("input[name=optradio]:checked").val()=="TPE"     ||
                                      $("input[name=optradio]:checked").val()=="TD"      || 
                                      $("input[name=optradio]:checked").val()=="CC"      || 
                                      $("input[name=optradio]:checked").val()=="Cour" ) 
                                     {

                        Salle_id=$("select.Salle").children(".Salle option:selected").attr('id');
                        EC_id=$("select.EC").children(".EC option:selected").attr('id');
                        UE_id=$("select.UE").children(".UE option:selected").attr('id');
                        Salle=$("select.Salle").children(".Salle option:selected").val();
                        EC=$("select.EC").children(".EC option:selected").val();
                        Enseignant1=$("select.Enseignant").children(".Enseignant option:selected").val();
                        Enseignant2=$("select.Enseignant").children(".Enseignant option:eq(1)").val();
                        heure=$("select.heure").children(".heure option:selected").val();
                        UE=$("select.UE").children(".UE option:selected").val();

                    
                  }
                  else{

                        Salle_id=$("select.Salle").children(".Salle option:selected").attr('id');
                        EC_id=$("select.EC").children(".EC option:selected").attr('id');
                        UE_id=$("select.UE").children(".UE option:selected").attr('id');
                        Evolution=0;
                        Salle=$("select.Salle").children(".Salle option:selected").val();
                        EC=$("select.EC").children(".EC option:selected").val();
                        Enseignant1=$("select.Enseignant").children(".Enseignant option:selected").val();
                        Enseignant2=$("select.Enseignant").children(".Enseignant option:eq(1)").val();
                        heure=$("select.heure").children(".heure option:selected").val();
                        UE=$("select.UE").children(".UE option:selected").val();
                  }

                }


                        //alert(Evolution);  
                     if ( $("input[name=optradio]:checked").val()!="Vider"  ) {
                       tableau_id_[num_jour][num_plage]=[
                            tableau_id_jour[num_jour-1],
                            tableau_d[num_plage-1][3],
                            Salle_id,
                            EC_id,
                            Evolution,
                            UE_id,
                            $("input[name=optradio]:checked").val(),
                            tableau_d[0][4]
                            ];

                            tableau_valeurs_[num_jour][num_plage]=[
                            tableau_id_jour[num_jour-1],
                            tableau_d[num_plage-1][3],
                            Salle,
                            EC,
                            Evolution,
                            Enseignant1,
                            Enseignant2,
                            heure,
                            UE,
                            $("input[name=optradio]:checked").val()
                            ];



                  
                   // alert(index);

                       

                   $(".choix").css("display","none");
                      s=$("select.Semestre").children(".Semestre option:selected").attr('id');
                       Remplir(tableau_valeurs_,aaa[1],aaa[2],index);

                      evolution(tableau_id_,tableau_id_[num_jour][num_plage][3]);
                      
                      if (mat!=0 && mat!=null) {
                        evolution(tableau_id_,mat);

                      }
                     // alert(tableau_valeurs[num_jour][num_plage]);
                      }
                      else{
                        if (tableau_valeurs_[num_jour][num_plage]!=null) {
                        tableau_valeurs_[num_jour][num_plage]=-1;
                            tableau_id_[num_jour][num_plage]=-1;
                            $("#"+index).empty();
                      if (mat!=0 && mat!=null) {

                        evolution(tableau_id_,mat);
                      }
                          
                          }

                      }
                     // alert(tableau_valeurs_);

                      $(".choix").css("display","none");
                      s=$("select.Semestre").children(".Semestre option:selected").attr('id');

                              }


                                   
             
            }
           
                                    });


      $("#Imprimer").click(function(){
//alert(tableau_id_jour);
              $.ajax({

                  
                  url: base_url + "enregistrement/enreg" ,
                  type: "POST",
                  //async: false,

                  data : {tableau_plages:tableau_id_,tableau_semaine:tableau_semaine,niv:$("select.Niveau").children(".Niveau option:selected").attr('id')},
                  dataType: "text",
                  success: function(data){
                   swal('','Emploi du temps Enregistré avec success','success');


                  
                   notif();
                    //alert(data);
                    //$(".b").html(data);
                  },
                  error:function(){
                    alert("erreur de requetes ");
                  }
                });


      });


$("#pre").css('background-color','blue');
//$(".n_edit").hide();
$("#edit").click(function(){
 
//$(".preced").hide();
$("#edit").css('background-color','blue');
  $("#pre").css('background-color','green');
//$(".n_edit").fadeIn(1000);


                });
$("#pre").click(function(){
  //    $(".n_edit").hide();
    //   $(".preced").fadeIn(1000);
        $("#edit").css('background-color','green');
  $("#pre").css('background-color','blue');

                });


     