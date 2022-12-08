 var tableau_id_modif= new Array(4);
              tableau_id_modif[1]= new Array(7);
              tableau_id_modif[2]= new Array(7);
              tableau_id_modif[3]= new Array(7);
              tableau_id_modif[4]= new Array(7);
              tableau_id_modif[5]= new Array(7);
              tableau_id_modif[6]= new Array(7);
var tableau_valeurs_modif= new Array(4);
              tableau_valeurs_modif[1]= new Array(7);

             tableau_valeurs_modif[2]= new Array(7);
              tableau_valeurs_modif[3]= new Array(7);
              tableau_valeurs_modif[4]= new Array(7);
              tableau_valeurs_modif[5]= new Array(7);
              tableau_valeurs_modif[6]= new Array(7);
var tableau_nbh_modif=[];
var tableau_d_modif=[];

var tableau_s=[];
var tableau_id_plage= [];
var tableau_id_jour_modif= [];
var tableau_semaine= [];

for (var i = 1; i <7 ; i++) {
  //alert("i="+i);
  for (var j = 1; j <= 50 ; j++) {
  

        
     tableau_id_modif[i][j]=-1;
   
   
  }
}




function creer_tableau_modif(tableau,tableau_entete,tableau_emploie){
  
  var tableau_jour=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];

       celulle="<tr><th style='' width='100px'></th>";

                                  for (var i = 0; i < tableau.length ; i++) {

                                          if(tableau[i][0]=="cour"){

                      
                                            if((tableau[i+1]!=null && tableau[i+1][0]=="pause") || tableau[i+1]==null){

                                               celulle+="<td>"+tableau[i][1][0]+tableau[i][1][1]+"h<div align='right' style='float: right;'>"+tableau[i][2][0]+tableau[i][2][1]+"h</div></td>";
                                    //            alert(tableau_d[i][1][0]+tableau_d[i][1][1]);

                                            }
                                          else{
                                                 celulle+="<td>"+tableau[i][1][0]+tableau[i][1][1]+"h</td>";
                                      //          alert(tableau_d[i][1][0]+tableau_d[i][1][1]);

                                          }
                                        }
                                          else{
                                            celulle+="<td width='40px'></td>";
                                            
                                          }

                                  };
                                  celulle+="</tr>";

                                  $("#"+tableau_entete).html(celulle);

                                  

                                  

                                   celulle="";
                                   
                                  for (var i = 0; i < 6 ; i++) {


                                     celulle+="<tr style='table-layout: fixed; border: 0.1em solid '><th style='border-top: 1px solid black' width='100px'><center>"+tableau_jour[i]+"</center></th>";
                                        for (var j = 0; j < tableau.length ; j++) {
                                            
                                          if (i==0) {
                                            if(tableau[j][0]=="cour"){
                                            celulle+="<td class='td' style='table-layout: fixed; border: 0.1em solid ' id=ppp"+(i+1)+(j+1)+"></td>";
                                              }
                                            else{
                                              
                                              celulle+="<td style='table-layout: fixed; border: 0.1em solid ' rowspan='6' width='40px'></td>";
                                            }
                                          }
                                          else{

                                            if (tableau[j][0]!="pause") {                                            
                                            

                                                celulle+="<td class='td' style='table-layout: fixed; border: 0.1em solid '  id=ppp"+(i+1)+(j+1)+"></td>";
                                            

                                          }
                                            
                                          }

                                          
                                      }
                                      celulle+="</tr>";


                                  $("#"+tableau_emploie).html(celulle);


                                  };
                            $("#"+tableau_entete).fadeIn(1000);
                             $("#"+tableau_emploie).fadeIn(1000);
                             
            $("td.td").click(function(){
               $("select.EC,select.UE,select.Enseignant,select.Semestres,select.Salle,select.groupe,.evolution,.heure").css("border-color","gray");
       

                aaa=$(this).attr('id');
                index=$(this).attr('id');
                nbh=tableau_nbh_modif[aaa[4]];
                //alert(nbh);
                  
                 $(".Enseignant option").remove();
                   $(".EC option").remove();
                    $("input[name=optradio]").removeAttr('checked'); 
                    $(".Salle option").remove();

                    $("input[name=optradio]").removeAttr('checked');
                $("input[name=select_ev]").removeAttr('checked',false); 
                 $("input.ev").attr('checked',true);

                     $("input.evolution").val('');
            $("input.heure").val('');
                                                      //$("select.Semestres").children(".Semestres option[id="+tableau_valeurs_modif[aaa[3]][aaa[4]][10]+"]").attr("selected","selected");
                      
                       if (tableau_id_modif[aaa[3]][aaa[4]][5]!=null && tableau_id_modif[aaa[3]][aaa[4]][5]!=0 ) {
             $.post(
                           base_url + "Enregistrement/sem",
                           { UE : tableau_id_modif[aaa[3]][aaa[4]][5],niv:$n},
                           function(data){
                             //alert(data.sem.id_semestre);
                             $(".Semestres option").remove();
                             for (var i = 0; data.semestre.length - 1 >= i; i++) {

                                if (data.sem.id_semestre==data.semestre[i].id_semestre) {

                                    $("select.Semestres").append("<option id="+data.semestre[i].id_semestre+" selected>"+ 
                                        data.semestre[i].semestre+"</option>");
                                }
                                else{
                                      $("select.Semestres").append("<option id="+data.semestre[i].id_semestre+">"+ 
                                        data.semestre[i].semestre+"</option>");
                                  }
                                    }

                                     $.post(
                          base_url + "Choix_planification/ch",
                          { PN : $n,
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

                                           if (tableau_valeurs_modif[aaa[3]][aaa[4]][0]!=null) {
                                            

                                                      $("select.UE").children(".UE option[id="+tableau_id_modif[aaa[3]][aaa[4]][5]+"]").attr("selected","selected");
                                                      
            $.post(
                                    base_url + "Choix_planification/ch1_td",
                                    { UE : $("select.UE").children(".UE option:selected").attr('id')},
                                    function(data){
                                      //alert(aaa[3]);
                                           $(".EC option").remove();
                                           for (var i = 0; data.ec.length - 1 >= i; i++) {
                                               $("select.EC").append("<option id="+data.ec[i].id_ec+">"+data.ec[i].code_ec+"("+data.ec[i].intitule_ec+")"+"</option>");
                                              }

                                              $("select.EC").children(".EC option[id="+tableau_id_modif[aaa[3]][aaa[4]][3]+"]").attr("selected","selected");      
                                           
                                           $(".ens_absent").html("<i style=''></i>");
                                           for (var i = 0; data.enseignant.length - 1 >= i; i++) {

                                    if (tableau_id_modif[aaa[3]][aaa[4]][10]==data.enseignant[i].id_personnel) {
                                         $("select.Enseignant").append("<option selected id='"+data.enseignant[i].id_personnel+"'>"+data.enseignant[i].nom_prenom+"</option>");
                                    }else {
                                         $("select.Enseignant").append("<option id='"+data.enseignant[i].id_personnel+"'>"+data.enseignant[i].nom_prenom+"</option>");
                                    }
                                    
                                    }

                                    if (data.enseignant.length > 1) {

                                         if (tableau_id_modif[aaa[3]][aaa[4]][10]==-1) {
                                         $("select.Enseignant").append("<option selected id="+-1+">Tous les enseignants</option>");
                                         
                                    }else {
                                         $("select.Enseignant").append("<option id="+-1+">Tous les enseignants</option>");
                                         
                                    }


                                    }

                                    if (data.enseignant.length == 0) {

                                         //$("select.Enseignant").append("<option id='"+null+"'>Aucun enseignant effecté !!</option>");
                                         $(".ens_absent").append("<i style='color: blue;'>( Aucun enseignant effecté pour l'année en cour veuillez affecter avant de programmer !!!! )</i>");
                                    }
                         },
                        "json"
            );


                                                  //$("select.EC").append("<option id="+tableau_id[aaa[3]][aaa[4]][3]+">"+tableau_valeurs[aaa[3]][aaa[4]][3]+"</option>");

                                                  

                                              
                                                       
                                                      // $("select.Enseignant").append("<option id=>"+tableau_valeurs_modif[aaa[3]][aaa[4]][5]+"</option>");
                                                       
                                          if (tableau_valeurs_modif[aaa[3]][aaa[4]][6]!=tableau_valeurs_modif[aaa[3]][aaa[4]][5]) {

                                                    //$("select.Enseignant").append("<option id=>"+tableau_valeurs_modif[aaa[3]][aaa[4]][6]+"</option>");
                                                  }

                                                   $("select.heure").append("<option id=>"+tableau_valeurs_modif[aaa[3]][aaa[4]][7]+"</option>");

                                                   $("select.Salle").children(".Salle option[id="+tableau_id_modif[aaa[3]][aaa[4]][2]+"]").attr("selected","selected");

                                                            //alert("aaaaa");
                                                            $(".evolution option").remove();
                                                              d=parseInt(tableau_id_modif[aaa[3]][aaa[4]][4],10)-parseInt(nbh[0]+nbh[1]);
                                                              if (d<0) {d=0;}
                                                                //alert(parseInt(nbh[0]+nbh[1]));
                                                            
                                                                $("select.evolution").append("<option>"+d+"</option>");
                                                  /*$(".evolution option").remove();
                                                  $("select.evolution").append("<option>"+tableau_id[aaa[3]][aaa[4]][4]+"</option>");*/
                                             
                                                       
                                                        
                                              
                                             

                                                   
                                          }

                                          


                       
                         },
                        "json"
                );
                                  
                },
               "json"
   );}

else
{

$.post(
                           base_url + "Enregistrement/sem_",
                           { niv:$n},
                           function(data){
                             //alert(data.sem.id_semestre);
                             $(".Semestres option").remove();
                             for (var i = 0; data.semestre.length - 1 >= i; i++) {
                              //alert(data.semestre[i].semestre);
                              
                                      $("select.Semestres").append("<option id="+data.semestre[i].id_semestre+">"+ 
                                        data.semestre[i].semestre+"</option>");
                                  
                                    }




                                    $.post(
                          base_url + "Choix_planification/ch",
                          { PN : $n,
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

                                         /*  if (tableau_valeurs_modif[aaa[3]][aaa[4]][0]!=null) {
                                            

                                                      $("select.UE").children(".UE option[id="+tableau_id_modif[aaa[3]][aaa[4]][5]+"]").attr("selected","selected");
                                                      
            $.post(
                                    base_url + "Choix_planification/ch1_td",
                                    { UE : $("select.UE").children(".UE option:selected").attr('id')},
                                    function(data){
                                      //alert(aaa[3]);
                                           $(".EC option").remove();
                                           for (var i = 0; data.ec.length - 1 >= i; i++) {
                                               $("select.EC").append("<option id="+data.ec[i].id_ec+">"+data.ec[i].code_ec+"("+data.ec[i].intitule_ec+")"+"</option>");
                                              }

                                              $("select.EC").children(".EC option[id="+tableau_id_modif[aaa[3]][aaa[4]][3]+"]").attr("selected","selected");      
                                           
                                           $(".ens_absent").html("<i style=''></i>");
                                           for (var i = 0; data.enseignant.length - 1 >= i; i++) {

                                    if (tableau_id_modif[aaa[3]][aaa[4]][10]==data.enseignant[i].id_personnel) {
                                         $("select.Enseignant").append("<option selected id='"+data.enseignant[i].id_personnel+"'>"+data.enseignant[i].nom_prenom+"</option>");
                                    }else {
                                         $("select.Enseignant").append("<option id='"+data.enseignant[i].id_personnel+"'>"+data.enseignant[i].nom_prenom+"</option>");
                                    }
                                    
                                    }

                                    if (data.enseignant.length > 1) {

                                      if (tableau_id_modif[aaa[3]][aaa[4]][10]==-1) {
                                         $("select.Enseignant").append("<option selected id="+-1+">Tous les enseignants</option>");
                                         
                                    }else {
                                         $("select.Enseignant").append("<option id="+-1+">Tous les enseignants</option>");
                                         
                                    }

                                         


                                    }

                                    if (data.enseignant.length == 0) {

                                         //$("select.Enseignant").append("<option id='"+null+"'>Aucun enseignant effecté !!</option>");
                                         $(".ens_absent").append("<i style='color: blue;'>( Aucun enseignant effecté pour l'année en cour veuillez affecter avant de programmer !!!! )</i>");
                                    }
                                           
                         },
                        "json"
            );
*/

                                                  //$("select.EC").append("<option id="+tableau_id[aaa[3]][aaa[4]][3]+">"+tableau_valeurs[aaa[3]][aaa[4]][3]+"</option>");

                                                  

                                              
                                                       
                                                       //$("select.Enseignant").append("<option id=>"+tableau_valeurs_modif[aaa[3]][aaa[4]][5]+"</option>");
                                                       
                                          if (tableau_valeurs_modif[aaa[3]][aaa[4]][6]!=tableau_valeurs_modif[aaa[3]][aaa[4]][5]) {

                                                    //$("select.Enseignant").append("<option id=>"+tableau_valeurs_modif[aaa[3]][aaa[4]][6]+"</option>");
                                                  }

                                                   //$("select.heure").append("<option id=>"+tableau_valeurs_modif[aaa[3]][aaa[4]][7]+"</option>");

                                                   $("select.Salle").children(".Salle option[id="+tableau_id_modif[aaa[3]][aaa[4]][2]+"]").attr("selected","selected");

                                                            //alert("aaaaa");
                                                            //$(".evolution option").remove();
                                                              //d=parseInt(tableau_id_modif[aaa[3]][aaa[4]][4],10)-parseInt(nbh[0]+nbh[1]);
                                                              //if (d<0) {d=0;}
                                                                //alert(parseInt(nbh[0]+nbh[1]));
                                                            
                                                                //$("select.evolution").append("<option>"+d+"</option>");
                                                  /*$(".evolution option").remove();
                                                  $("select.evolution").append("<option>"+tableau_id[aaa[3]][aaa[4]][4]+"</option>");*/
                                             
                                                       
                                                        
                                              
                                             

                                                   
                                         // }

                                          


                       
                         },
                        "json"
                );
                                  },
                                  'json'
                                  );



         
}                               
             
              
                   

                if (tableau_valeurs_modif[aaa[3]][aaa[4]]!=null) {
                      
                         $("input[name=optradio][value="+tableau_valeurs_modif[aaa[3]][aaa[4]][9]+"]").trigger('click');
                        
              }
               else{
                //$("select.UE").append("<option id='nul'></option>");
               }

                  $(".evolution option").remove();
                  $(".heure option").remove();

        
                                      $(".choix").css("display","block");
                                      $("td.td").css("background-color","white");
                                      $(this).css("background-color","#b3d9ff");


                                     
          

 if (tableau_valeurs_modif[aaa[3]][aaa[4]][0]!= null) {
//alert("eee");

        $(".groupe option").remove();

for (var i = 0; 8 >= i; i++) {



          if (tableau_valeurs_modif[aaa[3]][aaa[4]][10]==i) {
            if (i==0) {
                $("select.groupe").append("<option value="+tableau_valeurs_modif[aaa[3]][aaa[4]][10]+" selected>"+"pas de groupe"+"</option>");

            }
            else{

            $("select.groupe").append("<option value="+tableau_valeurs_modif[aaa[3]][aaa[4]][10]+" selected>"+tableau_valeurs_modif[aaa[3]][aaa[4]][10]+"</option>");
        }
          }
          else{

            if (i==0) {

            $("select.groupe").append("<option value="+i+">"+"pas de groupe"+"</option>");
   

             }
            else
             {
            $("select.groupe").append("<option value="+i+">"+i+"</option>");
        
                 }

          }
         }

        }

         if (tableau_valeurs_modif[aaa[3]][aaa[4]][11]!=0) {

            $("input.evolution").val(tableau_valeurs_modif[aaa[3]][aaa[4]][4]);
            $("input.heure").val(tableau_valeurs_modif[aaa[3]][aaa[4]][11]);

            $("input[name=select_ev]").removeAttr('checked',false); 
           //$("input.ev").attr('checked',true);
        }
         });





}

function evolution(tableau,matiere){


ev=-1;
v=0;
a=-1;
b=-1;

for (var i = 1; i <7 ; i++) {
                 
            for (var j = 1; j < tableau_nbh_modif.length ; j++) {


                if ((tableau[i][j] !=null && tableau[i][j][3]==matiere)  && tableau[i][j][4]!=0 && $("input[name=select_ev]:checked").val()!="manuel" && tableau_id_modif[i][j][9]!=0) {
                   
                    ev=tableau_valeurs_modif[i][j][4];
                    a=i;
                    b=j;
                    j=tableau_nbh_modif.length;
                    i=7;

                }
             }
         }

         if (ev==-1) {

            $.ajax({

         
         url:base_url + "Choix_planification/evolution",
         type: "POST",
         async: false,

         data : {EC : matiere},
         dataType: "json",
         success:function(data){

                      //alert(data+"aaa");

                                 if (data[0].evolution!=null ) {
                                       ev=parseInt(data[0].evolution,10);
                                     }
                                  else{
                                       ev=0;
                                       }
                  },
         error:function(){
           alert("erreur de serveur ;(");
         }
       });

         }
//alert(ev);
     
for (var i = 1; i <7 ; i++) {
                 
            for (var j = 1; j < tableau_nbh_modif.length ; j++) {
             //alert(tableau_valeurs_[i][j][4]);
             
             if ((a != i || b != j) && (tableau[i][j] !=null && tableau[i][j][3]==matiere)  && tableau[i][j][4]!=0 && $("input[name=select_ev]:checked").val()!="manuel") {
              
                   //alert(tableau_valeurs_[i][j][4]);
                         
                          
                          tableau_id_modif[i][j][4]=ev+parseInt(tableau_nbh_modif[j][0]+tableau_nbh_modif[j][1])
                          tableau_valeurs_modif[i][j][4]=ev+parseInt(tableau_nbh_modif[j][0]+tableau_nbh_modif[j][1])
                          ev=ev+parseInt(tableau_nbh_modif[j][0]+tableau_nbh_modif[j][1]); 
                          if (tableau_valeurs_modif[i][j][9]!=null) { 
                           Remplir(tableau_valeurs_modif,i,j,"ppp"+i+j);
                         }
                           
          }
          }
}

//alert('eeeeee');
}


function Remplir(tableau,ligne,colonne,index0){


                       if (tableau[ligne][colonne][9]=="BIBLIOTHEQUE" || 
                           tableau[ligne][colonne][9]=="Congé" || 
                           tableau[ligne][colonne][9]=="INVEST_HUMAIN") {
                                   $("#"+index0).html("<center>"+"<font size=5 >"+tableau[ligne][colonne][9]+"</font>"+"</center>");
                                 }
                       else{ 


                                  ens2=tableau[ligne][colonne][5];
                        if (ens2==null) {

                            ens2='<p style="color: red;">Aucun enseignant affecté à cette matière!!!!</p>'
                        }
                                   /*if (tableau[ligne][colonne][6]!='' && tableau[ligne][colonne][6]!=tableau[ligne][colonne][5] ) {
                                       ens2=" / "+tableau[ligne][colonne][6];
                                   }
                                   else{
                                     ens2="";

                                   }*/

                                     if (tableau[ligne][colonne][9]=="Cour") {

                                        if (tableau[ligne][colonne][10] != 0) {

                                            if (tableau[ligne][colonne][11]==0) {

                                            $("#"+index0).html("<center>"
                                         +"<div >"+"<font size=2>"+tableau[ligne][colonne][3]+"</font>"
                                         +"</div>"+
                                        "<div >"+"<font size=2>"+ens2+"</font>"
                                        +"</div>"
                                        +"<div style='float: left;'>"+"<font size=2>"+tableau[ligne][colonne][2]+"</div>"+
                                        "<div style='float: ;'>"+"<font size=3>&nbsp;Groupe "+tableau[ligne][colonne][10]+"</div>"+
                                        "<div style='float: right;'>"+tableau[ligne][colonne][4]+"/"+tableau[ligne][colonne][7]+"</font>"+"</div>"
                                       +"</center>");}

                                            else{

                                                $("#"+index0).html("<center>"
                                         +"<div >"+"<font size=2>"+tableau[ligne][colonne][3]+"</font>"
                                         +"</div>"+
                                        "<div >"+"<font size=2>"+ens2+"</font>"
                                        +"</div>"
                                        +"<div style='float: left;'>"+"<font size=2>"+tableau[ligne][colonne][2]+"</div>"+
                                        "<div style='float: ;'>"+"<font size=3>&nbsp;Groupe "+tableau[ligne][colonne][10]+"</div>"+
                                        "<div style='float: right;'>"+tableau[ligne][colonne][4]+"/"+tableau[ligne][colonne][11]+"</font>"+"</div>"
                                       +"</center>");
                                            }
                                        }
                                        else{

                                            

                                            if (tableau[ligne][colonne][11]==0) {

                                            $("#"+index0).html("<center>"
                                         +"<div >"+"<font size=2>"+tableau[ligne][colonne][3]+"</font>"
                                         +"</div>"+
                                        "<div >"+"<font size=2>"+ens2+"</font>"
                                        +"</div>"
                                        +"<div style='float: left;'>"+"<font size=2>"+tableau[ligne][colonne][2]+"</div>"+
                                        "<div style='float: right;'>"+tableau[ligne][colonne][4]+"/"+tableau[ligne][colonne][7]+"</font>"+"</div>"
                                       +"</center>");
                                        }

                                            else{

                                               $("#"+index0).html("<center>"
                                         +"<div >"+"<font size=2>"+tableau[ligne][colonne][3]+"</font>"
                                         +"</div>"+
                                        "<div >"+"<font size=2>"+ens2+"</font>"
                                        +"</div>"
                                        +"<div style='float: left;'>"+"<font size=2>"+tableau[ligne][colonne][2]+"</div>"+
                                        "<div style='float: right;'>"+tableau[ligne][colonne][4]+"/"+tableau[ligne][colonne][11]+"</font>"+"</div>"
                                       +"</center>");
                                            }
                                        }

                                       
                                       //alert(index0);
                                     }

                                     else{
                                       if (tableau[ligne][colonne][9]=="TP"      || 
                                           tableau[ligne][colonne][9]=="TPE"     ||
                                           tableau[ligne][colonne][9]=="TD"      || 
                                           tableau[ligne][colonne][9]=="CC"      
                                             ) {
                                        if (tableau[ligne][colonne][10] != 0) {

                                            

                                            if (tableau[ligne][colonne][11]==0) {

                                            $("#"+index0).html("<center>"
                                         +"<div >"+"<font size=2>"+tableau[ligne][colonne][3]+"</font>"
                                         +"</div>"+
                                        "<div >"+"<font size=2>"+tableau[ligne][colonne][9]+"</font>"
                                        +"</div>"
                                       +"<div style='float: left;''>"+"<font size=2>"+tableau[ligne][colonne][2]+"</div>"+
                                       "<div style='float: ;'>"+"<font size=3>&nbsp;Groupe "+tableau[ligne][colonne][10]+"</div>"+
                                       "<div style='float: right;'>"+tableau[ligne][colonne][4]+"/"+tableau[ligne][colonne][7]+"</font>"+"</div>"
                                       +"</center>");
                                        }

                                            else{

                                               $("#"+index0).html("<center>"
                                         +"<div >"+"<font size=2>"+tableau[ligne][colonne][3]+"</font>"
                                         +"</div>"+
                                        "<div >"+"<font size=2>"+tableau[ligne][colonne][9]+"</font>"
                                        +"</div>"
                                       +"<div style='float: left;''>"+"<font size=2>"+tableau[ligne][colonne][2]+"</div>"+
                                       "<div style='float: ;'>"+"<font size=3>&nbsp;Groupe "+tableau[ligne][colonne][10]+"</div>"+
                                       "<div style='float: right;'>"+tableau[ligne][colonne][4]+"/"+tableau[ligne][colonne][11]+"</font>"+"</div>"
                                       +"</center>");
                                            }

                                        }
                                        else{

                                           


                                             if (tableau[ligne][colonne][11]==0) {

                                            $("#"+index0).html("<center>"
                                         +"<div >"+"<font size=2>"+tableau[ligne][colonne][3]+"</font>"
                                         +"</div>"+
                                        "<div >"+"<font size=2>"+tableau[ligne][colonne][9]+"</font>"
                                        +"</div>"
                                       +"<div style='float: left;''>"+"<font size=2>"+tableau[ligne][colonne][2]+"</div>"+
                                       "<div style='float: right;'>"+tableau[ligne][colonne][4]+"/"+tableau[ligne][colonne][7]+"</font>"+"</div>"
                                       +"</center>");
                                        }

                                            else{

                                               $("#"+index0).html("<center>"
                                         +"<div >"+"<font size=2>"+tableau[ligne][colonne][3]+"</font>"
                                         +"</div>"+
                                        "<div >"+"<font size=2>"+tableau[ligne][colonne][9]+"</font>"
                                        +"</div>"
                                       +"<div style='float: left;''>"+"<font size=2>"+tableau[ligne][colonne][2]+"</div>"+
                                       "<div style='float: right;'>"+tableau[ligne][colonne][4]+"/"+tableau[ligne][colonne][11]+"</font>"+"</div>"
                                       +"</center>");
                                            }
                                        }
                                       
                                       }


                                       else{
                                         $("#"+index0).html("<center>"
                                         +"<div >"+"<font size=2>"+tableau[ligne][colonne][3]+"</font>"
                                         +"</div>"+
                                        "<div >"+"<font size=2>"+tableau[ligne][colonne][9]+"</font>"
                                        +"</div>"
                                        +"<div >"+"<font size=2>"+tableau[ligne][colonne][2]+"</div>"
                                       +"</center>");

                                       }


                                     }
                                   
                                 }

                               
}; 


        

function planifications(id_semaine,table,table_entete){
  


  $.ajax({

                  
                  url: base_url + "Enregistrement/planifications",
                  type: "POST",
                  async: false,

                  data : {id_s:id_semaine,niv: $n},
                  dataType: "json",
                  success:function(data){
                    //alert(data.semaine[0].semestre[0].id_semestre);
tableau_d_modif.length=0;
for (var i = 1; i <7 ; i++) {
  //alert("i="+i);
  for (var j = 1; j <= 50 ; j++) {
  

        
     tableau_id_modif[i][j]=-1;
   
   
  }
}


                      for (var i = 0; data.plages.length - 1 >= i; i++) {

                    tableau_d_modif[data.plages[i].num_plage-1]= [data.plages[i].intitule_plage,data.plages[i].heure_debut,data.plages[i].heure_fin,data.plages[i].id_plage,data.plages[i].num_group];
                   tableau_nbh_modif[data.plages[i].num_plage]=data.plages[i].duree;

                  }

                  
                          

                              creer_tableau_modif(tableau_d_modif,table_entete,table);

                for (var i = 0; data.niv.length - 1 >= i; i++) {
                    
                      $(".pn_").html(data.niv[i].rendu);
                      
                  }
                    
                   
               $(".semestre_modif option").remove();
              
               $(".semaine_modif option").remove();

                  for (var i = 0; data.semestre.length - 1 >= i; i++) {

                    //alert(data.semestre[i].id_semestre +"  "+ data.semaine[0].semestre[0].id_semestre);
                    
                   if (data.semestre[i].id_semestre == data.semaine[0].semestre[0].id_semestre) {
                      $("select.semestre_modif").append("<option selected id="+data.semestre[i].id_semestre+" >"+ data.semestre[i].semestre+"</option>");
                      }
                    else{

                      $("select.semestre_modif").append("<option id="+data.semestre[i].id_semestre+">"+ data.semestre[i].semestre+"</option>");
                    }
                  }

                  
                  
 for (var i = 0; data.jour.length - 1 >= i; i++) {
                    
                   
                     tableau_id_jour_modif[data.jour[i].num_jour-1]=data.jour[i].id_jour;
                     //alert(tableau_id_jour_modif);
                      
                  }

                $(".semaine_modif option").remove();
                $(".period_modif option:selected").remove();

                if (data!= null) {
                  //alert(data.semaine[0].numero);
             $("select.semaine_modif").append("<option id=''>"+(parseInt(data.semaine[0].numero,10))+"</option>");
                d=data.semaine[0].debut;
                f=data.semaine[0].fin;
                     mois=[" ","janvier","fevrier","mars","avril","mai","juin","juillet","auout","septembre","octobre","novembre","decembre"];
                if (d[5]+d[6]==f[5]+f[6]) {
                            d=d[8]+d[9];
                          }
                          else{
                                d=d[8]+d[9]+" "+mois[parseInt(d[5],10)+parseInt(d[6],10)];
                              }
                          f=f[8]+f[9]+" "+mois[parseInt(f[5],10)+parseInt(f[6],10)];

                          $("select.period_modif").append("<option id=>"+"du "+d+" au "+f+"</option>")

                      
             tableau_semaine[0]=data.semaine[0].numero;

             tableau_semaine[1]=data.semaine[0].debut;
             tableau_semaine[2]=data.semaine[0].fin;
             tableau_semaine[3]=data.annee[0].id_annee;

             tableau_semaine[4]=tableau_nbh_modif.length;
             
              tableau_semaine[5]=data.semaine[0].semaine_status;
              tableau_semaine[6]=data.semaine[0].semestre_id;




            for (var i = 0; data.planifications.length - 1 >= i; i++) {

              if (data.planifications[i].enseignant[1]!=null) {

                ens=data.planifications[i].enseignant[1].nom_prenom;


                    }
              else{

                ens="";

              }

              if (data.planifications[i].ens_prog==null) {
              
              ens_p=-1;
            }
            else{

              ens_p=data.planifications[i].ens_prog;
            }

            if (data.planifications[i].heure_definit==null) {
              
              h_d=0;
            }
            else{

              h_d=data.planifications[i].heure_definit;
            }
              //alert(h_d);
             tableau_id_modif[data.planifications[i].num_jour][data.planifications[i].num_plage]=
             [tableau_id_jour_modif[data.planifications[i].num_jour-1],
             tableau_d_modif[data.planifications[i].num_plage-1][3],
             data.planifications[i].salle_id,
             data.planifications[i].ec_id,
             data.planifications[i].evolution,
             data.planifications[i].ue[0].id_ue,
             data.planifications[i].type_planing,
             tableau_d_modif[0][4],
             data.planifications[i].groupe,
             h_d,
             ens_p
             ];

              ec=data.planifications[i].ec[0].code_ec+"("+data.planifications[i].ec[0].intitule_ec+")";


          if (data.planifications[i].type_planing=="BIBLIOTHEQUE" ||
              data.planifications[i].type_planing=="Congé" ||
              data.planifications[i].type_planing=="INVEST_HUMAIN") {

              ensei="";
              ens="";
            }
          else{
                ensei="";
                //ensei=data.planifications[i].enseignant[0].nom_prenom;
                
                if (data.planifications[i].ens_prog==null) {


                for (var j = 0; data.planifications[i].enseignant.length - 1 >= j; j++) {
                    if (j==0) {
                  ensei+=data.planifications[i].enseignant[j].nom_prenom;
                    }
                    else{

                      ensei+=" / "+data.planifications[i].enseignant[j].nom_prenom;
                    }

                }
              }
                else{
                  
                  for (var k = 0; data.planifications[i].enseignant.length - 1 >= k; k++) {
                  if (data.planifications[i].enseignant[k].id_personnel==data.planifications[i].ens_prog) {
                    
                  ensei=data.planifications[i].enseignant[k].nom_prenom;
                   
                     
                    }
                    
                }

                
                
              }


               //alert(ensei); 

                
              


          }
            tableau_valeurs_modif[data.planifications[i].num_jour][data.planifications[i].num_plage]=
            [tableau_id_jour_modif[data.planifications [i].num_jour-1],
            tableau_d_modif[data.planifications[i].num_plage-1][3],
            data.planifications[i].salle,
            ec,
            data.planifications[i].evolution,
            ensei,
            ens,
            data.planifications[i].heure,
            data.planifications[i].ue[0].intitule_ue,
            data.planifications[i].type_planing,
            data.planifications[i].groupe,
            data.planifications[i].heure_definit];
           }


           for (var i = 1; i <7 ; i++) {

                     //alert("i="+i);
                     for (var j = 1; j <= tableau_nbh_modif.length ; j++) {
                      //alert("j="+j);
                      if (tableau_valeurs_modif[i][j]!=null) {

                           
                        Remplir(tableau_valeurs_modif,i,j,"ppp"+i+j);

                      }
                      
                     }
                   }

                   }
                   

                  },
                  error:function(){
                    alert("erreur de serveur ;(");
                  }
                });

};




$(document).ready(
      function(){





$("#periode_modif").click(function(){
          id=$("select.period_modif").children(".period_modif option:selected").attr('id');
          val=$("select.period_modif").children(".period_modif option:selected").val();
          $(".period_modif option").remove();
          //$(".choix_date").show();
          $(".choix_dt_modif").css("display","block");
        });

$("#choix_date_ok_modif").click(
          function(){
            $(".choix_dt_modif").css("display","none");
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

          $("select.period_modif").append("<option id=>"+"du "+deb+" au "+fin+"</option>");
           // alert(fin_s);

            if (tableau_semaine[1]!=deb_s) {
            //alert($("select.sem").children(".sem option:selected").val());
              tableau_semaine[0]=$("select.semaine_modif").children(".semaine_modif option:selected").val();
              tableau_semaine[1]=deb_s;
              tableau_semaine[2]=fin_s;
              tableau_semaine[3]=$id_annee;
              tableau_semaine[4]=tableau_nbh_modif.length;
              tableau_semaine[5]=0;
              tableau_semaine[6]=$("select.semestre_modif").children(".semestre_modif option:selected").attr('id');

             //alert(tableau_semaine);
            }
            
      });

    $("#choix_date_non_modif").click(
          function(){
            $(".choix_dt_modif").css("display","none");
            //$(".choix_date").hide();
             if (val!=null) {
              $("select#periode_modif").append("<option id="+id+">"+val+"</option>");
            }
          
      });



$("#sortir,#close").click(function(){
        $(".choix_dt_modif").css("display","none");
          $(".choix").css("display","none");
          $("select.EC,select.UE,select.Enseignant").css("border","1px solid #ced4da");
           $(".radio").css("border","none");
      });

$("select.semestre_modif").change(function(){

  tableau_semaine[6]=$("select.semestre_modif").children(".semestre_modif option:selected").attr('id');

});
$("select.Semestres").change(function(){



              $(".Enseignant option").remove();
                   $(".EC option").remove();
                    $("input[name=optradio]").removeAttr('checked'); 
                    $(".Salle option").remove();
                    $(".heure option").remove();
                    $(".evolution option").remove();
                    $(".ens_absent").html("<i style=''></i>");
                                           
                $.post(
                          base_url + "Choix_planification/ch",
                          { PN : $n,
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


$(".UE").change(function(){
              if ($("select.UE").children(".UE option:selected").attr('id')!="nul") {
                      $.post(
                                    base_url + "Choix_planification/ch1",
                                    { UE : $("select.UE").children(".UE option:selected").attr('id')},
                                    function(data){
                                      //alert(aaa[3]);
                                           $(".EC option").remove();
                                           for (var i = 0; data.ec.length - 1 >= i; i++) {
                                               $("select.EC").append("<option id="+data.ec[i].id_ec+">"+data.ec[i].code_ec+"("+data.ec[i].intitule_ec+")"+"</option>");
                                              }

                                              //alert('hbcvksjdghisufgiwsdu');
                                           $(".Enseignant option").remove();
                                           $(".heure option").remove();


                                           $(".ens_absent").html("<i style=''></i>");
                                           for (var i = 0; data.enseignant.length - 1 >= i; i++) {

                                    if (tableau_id_modif[aaa[3]][aaa[4]][10]==data.enseignant[i].id_personnel) {
                                         $("select.Enseignant").append("<option selected id='"+data.enseignant[i].id_personnel+"'>"+data.enseignant[i].nom_prenom+"</option>");
                                    }else {
                                         $("select.Enseignant").append("<option id='"+data.enseignant[i].id_personnel+"'>"+data.enseignant[i].nom_prenom+"</option>");
                                    }
                                    
                                    }

                                    if (data.enseignant.length > 1) {

                                         $("select.Enseignant").append("<option id="+-1+">Tous les enseignants</option>");


                                    }

                                    if (data.enseignant.length == 0) {

                                         //$("select.Enseignant").append("<option id='"+null+"'>Aucun enseignant effecté !!</option>");
                                         $(".ens_absent").append("<i style='color: blue;'>( Aucun enseignant effecté pour l'année en cour veuillez affecter avant de programmer !!!! )</i>");
                                    }


                                           $("select.heure").append("<option>"+data.ec[0].heure+"</option>");

                                           $(".evolution option").remove();

                                            if (data.evolution[0]!=null ) {
                                                d=data.evolution;
                                              }
                                           else{
                                                d=0;
                                                }

                                       for (var i =1; aaa[3] >=i ; i++) {
                                                                
                                          k=tableau_d_modif.length; 
                                          if (i==aaa[3]) {  
                                           k=aaa[4]-1;
                                          }
                                              for (var j =1; k >=j ; j++) {
                                               //alert(j);
                                                    if (tableau_valeurs_modif[i][j]!=null) {
                                                        if (tableau_id_modif[i][j][3]==$("select.EC").children(".EC option:selected").attr('id')) {
                                                                if (parseInt(tableau_id_modif[i][j][4],10)!=0) {

                                                                d=parseInt(tableau_id_modif[i][j][4],10);
                                                                
                                                              }
                                                    
                                              }
                                                                              
                                           }
                                                                              
                                   }
                                  
                                 }



                                                      
                       $("select.evolution").append("<option>"+d+"</option>");
                                            
                                            
                                 
                                           
                                           
                         },
                        "json"
            );

                    $("select.EC,select.UE,select.Enseignant").css("border","1px solid #ced4da");
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

                                     $(".ens_absent").html("<i style=''></i>");
                                           for (var i = 0; data.enseignant.length - 1 >= i; i++) {

                                    if (tableau_id_modif[aaa[3]][aaa[4]][10]==data.enseignant[i].id_personnel) {
                                         $("select.Enseignant").append("<option selected id='"+data.enseignant[i].id_personnel+"'>"+data.enseignant[i].nom_prenom+"</option>");
                                    }else {
                                         $("select.Enseignant").append("<option id='"+data.enseignant[i].id_personnel+"'>"+data.enseignant[i].nom_prenom+"</option>");
                                    }
                                    
                                    }

                                    if (data.enseignant.length > 1) {

                                         $("select.Enseignant").append("<option id="+-1+">Tous les enseignants</option>");


                                    }

                                    if (data.enseignant.length == 0) {

                                         //$("select.Enseignant").append("<option id='"+null+"'>Aucun enseignant effecté !!</option>");
                                         $(".ens_absent").append("<i style='color: blue;'>( Aucun enseignant effecté pour l'année en cour veuillez affecter avant de programmer !!!! )</i>");
                                    }

                                     $("select.heure").append("<option>"+data.ec[0].heure+"</option>");

                                    

                                      $(".evolution option").remove();

                                          if (data.evolution[0]!=null ) {
                                                d=data.evolution;
                                                
                                              }
                                           else{
                                                d=0;
                                                }

                                     
                                       for (var i =1; aaa[3] >=i ; i++) {
                                                                
                                          k=tableau_d_modif.length; 
                                          if (i==aaa[3]) {
                                           k=aaa[4]-1;
                                          }
                                              for (var j =1; k >=j ; j++) {
                                               //alert(j);
                                                    if (tableau_valeurs_modif[i][j]!=null) {
                                                        if (tableau_id_modif[i][j][3]==$("select.EC").children(".EC option:selected").attr('id')) {
                                                                if (parseInt(tableau_id_modif[i][j][4],10)!=0) {

                                                                d=parseInt(tableau_id_modif[i][j][4],10);
                                                                
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
                           $("select.EC,select.UE,select.Enseignant").css("border","1px solid #ced4da");
                          if ($("input[name=optradio]:checked").val()=="BIBLIOTHEQUE"  || $("input[name=optradio]:checked").val()=="Congé" || $("input[name=optradio]:checked").val()=="INVEST_HUMAIN" || $("input[name=optradio]:checked").val()=="Vider") {

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

            
          });



    //enregistrement d'une plage

         
         
    });

        
      $("#enreg").click(
          function(){


            if  ($("input[name=optradio]:checked").val()!="BIBLIOTHEQUE"  && 
              $("input[name=optradio]:checked").val()!="Congé" && 
              $("input[name=optradio]:checked").val()!="Vider" && 
              $("input[name=optradio]:checked").val()!="PROJET" && 
              $("input[name=optradio]:checked").val()!="SYNTHESE" && 
              $("input[name=optradio]:checked").val()!="INVEST_HUMAIN" && 
              $("input[name=optradio]:checked").val()!="RATRAPAGE"&&
              $("select.EC").val()!=null
              ) {

       if ($("select.Enseignant").children(".Enseignant option:selected").attr('id')!=null) {

             $.ajax({

                  
                  url: base_url + "enregistrement/verification" ,
                  type: "POST",
                  //async: false,

                  data : {EC:$("select.EC").children(".EC option:selected").attr('id'),
                          debut:tableau_semaine[1],
                          jour:tableau_id_jour_modif[aaa[3]-1],
                          plage:tableau_d_modif[aaa[4]-1][1],
                          plage1:tableau_d_modif[aaa[4]-1][2]},
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
           }



            mat=0;
            //alert($("input[name=optradio]:checked").val());
            val=$("select.EC").children(".EC option:selected").val();
            $("select.EC,select.UE,select.Enseignant").css("border","1px solid #ced4da");
            $(".radio").css("border","none");
            if ($("input[name=optradio]:checked").val()==null) {
                $(".radio").css("border","1px solid red");

            }
            else{
                  if (val==null && ($("input[name=optradio]:checked").val()!="BIBLIOTHEQUE"  && 
                    $("input[name=optradio]:checked").val()!="Congé" && 
                    $("input[name=optradio]:checked").val()!="Vider" && 
                    $("input[name=optradio]:checked").val()!="INVEST_HUMAIN") ) {

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

        
                 num_jour=aaa[3];
                 num_plage=aaa[4];

                 debut=$debut;
                       
                  
               


                   if (tableau_valeurs_modif[num_jour][num_plage]!=null){
                      mat=tableau_id_modif[num_jour][num_plage][3];
                   }
            if ($("input[name=select_ev]:checked").val()!="manuel") {         
                val=$("select.evolution").children(".evolution option:selected").val();
 

                   if (val!=null) {

                    Evolution=parseInt(val,10)+parseInt(nbh,10);
                    //alert(Evolution);
               }

               else{                                                                
                     if (tableau_valeurs_modif[num_jour][num_plage]!=null) {
                       Evolution=tableau_valeurs_modif[num_jour][num_plage][4];
                     }
                     else{
                       Evolution=0;
                     }
                 
               }
         
         }
            else{

                Evolution=parseInt($("input.evolution").val(),10);
            }

                         
              
                if ( $("input[name=optradio]:checked").val()=="BIBLIOTHEQUE"  || $("input[name=optradio]:checked").val()=="Congé" || $("input[name=optradio]:checked").val()=="INVEST_HUMAIN") {

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
                        groupe=0;
                        heure_def=0;


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
                        
                        Enseignant1='';

               if ($("select.Enseignant").children(".Enseignant option:selected").attr('id') == -1) {
                
                for (var i = 0 ; $("select.Enseignant").length >= i; i++) {

                    
                    if ($("select.Enseignant").children(".Enseignant option:eq("+i+")").attr('id')!=-1) {
                       if (i==0) {
                            Enseignant1+=$("select.Enseignant").children(".Enseignant option:eq("+i+")").val();
                        }
                        else{

                            Enseignant1+= " / "+$("select.Enseignant").children(".Enseignant option:eq("+i+")").val();

                        }
                     }
                }
             }
             else{

               Enseignant1=$("select.Enseignant").children(".Enseignant option:selected").val();


             }

                        Enseignant2=$("select.Enseignant").children(".Enseignant option:eq(1)").val();
                        heure=$("select.heure").children(".heure option:selected").val();
                        UE=$("select.UE").children(".UE option:selected").val();
                        groupe=$("select.groupe").children(".groupe option:selected").val();

                        if($("input[name=select_ev]:checked").val()=="manuel" && $("input.heure").val()!=''){

                //alert($("input.heure").val());
                heure_def=$("input.heure").val();

               }
               else{

                    //alert(0);
                heure_def=0;
                   }
                    
                  }
                  else{

                        Salle_id=$("select.Salle").children(".Salle option:selected").attr('id');
                        EC_id=$("select.EC").children(".EC option:selected").attr('id');
                        UE_id=$("select.UE").children(".UE option:selected").attr('id');
                        Evolution=0;
                        Salle=$("select.Salle").children(".Salle option:selected").val();
                        EC=$("select.EC").children(".EC option:selected").val();
                        
                        Enseignant1='';

               if ($("select.Enseignant").children(".Enseignant option:selected").attr('id') == -1) {
                
                for (var i = 0 ; $("select.Enseignant").length >= i; i++) {

                    
                    if ($("select.Enseignant").children(".Enseignant option:eq("+i+")").attr('id')!=-1) {
                       if (i==0) {
                            Enseignant1+=$("select.Enseignant").children(".Enseignant option:eq("+i+")").val();
                        }
                        else{

                            Enseignant1+= " / "+$("select.Enseignant").children(".Enseignant option:eq("+i+")").val();

                        }
                     }
                }
             }
             else{

               Enseignant1=$("select.Enseignant").children(".Enseignant option:selected").val();


             }

                        Enseignant2=$("select.Enseignant").children(".Enseignant option:eq(1)").val();
                        heure=$("select.heure").children(".heure option:selected").val();
                        UE=$("select.UE").children(".UE option:selected").val();
                        groupe=$("select.groupe").children(".groupe option:selected").val();
                        
                        if($("input[name=select_ev]:checked").val()=="manuel" && $("input.heure").val()!=''){

                //alert($("input.heure").val());
                heure_def=$("input.heure").val();

               }
               else{

                    //alert(0);
                heure_def=0;
                   }
                  }

                }


                        //alert(Evolution);  
                     if ( $("input[name=optradio]:checked").val()!="Vider"  ) {

                      if ($("select.Enseignant").children(".Enseignant option:selected").attr('id')
                !=-1) {
                            id_e=$("select.Enseignant").children(".Enseignant option:selected").attr('id')

              }
              else{
                id_e=-1;
              }
              

                       tableau_id_modif[num_jour][num_plage]=[
                            tableau_id_jour_modif[num_jour-1],
                            tableau_d_modif[num_plage-1][3],
                            Salle_id,
                            EC_id,
                            Evolution,
                            UE_id,
                            $("input[name=optradio]:checked").val(),
                            tableau_d_modif[0][4],
                            groupe,
                            heure_def,
                            id_e
                            ];

                            /*alert([
                            tableau_id_jour_modif[num_jour-1],
                            tableau_d_modif[num_plage-1][3],
                            Salle_id,
                            EC_id,
                            Evolution,
                            UE_id,
                            $("input[name=optradio]:checked").val(),
                            tableau_d_modif[0][4],
                            groupe,
                            heure_def,
                            id_e
                            ]);*/

                            tableau_valeurs_modif[num_jour][num_plage]=[
                            tableau_id_jour_modif[num_jour-1],
                            tableau_d_modif[num_plage-1][3],
                            Salle,
                            EC,
                            Evolution,
                            Enseignant1,
                            Enseignant2,
                            heure,
                            UE,
                            $("input[name=optradio]:checked").val(),
                            groupe,
                            heure_def
                            ];



                  
                    

                       

                   $(".choix").css("display","none");
                      s=$("select.Semestre").children(".Semestre option:selected").attr('id');
                    
                       Remplir(tableau_valeurs_modif,aaa[3],aaa[4],index);

                      evolution(tableau_id_modif,tableau_id_modif[num_jour][num_plage][3]);
                      
                      
                      if (mat!=0 && mat!=null) {
                        evolution(tableau_id_modif,mat);
                        
                      }
                     // alert(tableau_valeurs[num_jour][num_plage]);
                      }
                      else{
                        if (tableau_valeurs_modif[num_jour][num_plage]!=null) {
                        tableau_valeurs_modif[num_jour][num_plage]=-1;
                            tableau_id_modif[num_jour][num_plage]=-1;
                            $("#"+index).empty();
                      if (mat!=0 && mat!=null) {

                        evolution(tableau_id_modif,mat);
                       
                      }
                          
                          }

                      }
                     // alert(tableau_valeurs_modif);

                      $(".choix").css("display","none");
                      s=$("select.Semestre").children(".Semestre option:selected").attr('id');

                              }


                                   
             
            }
           



         
                                    




});
 $("#enreg_modif").click(function(){
//alert(tableau_id_modif);

        
              
if($("input[name=select_num_sem]:checked").val()=="manuel" && $("input.semaine_modif").val()==''){
    swal('','Dans le cas ou le numéro de la semaine est manuel , Le Champ Semaine ne doit pas etre vide','warning');
}
else{

//alert("zz");
    if ($("input[name=select_num_sem]:checked").val()=="manuel") {

        tableau_semaine[0]=parseInt($("input.semaine_modif").val(),10);
    }
    else{

         tableau_semaine[0]=$("select.semaine_modif").children(".semaine_modif option:selected").val();
    }
    
    //alert(tableau_semaine[0]);
         //alert(tableau_semaine);
            $.ajax({

                                    
                    url: base_url + "enregistrement/modif_emploi" ,
                    type: "POST",
                    //async: false,

                    data : {tableau_plages:tableau_id_modif,tableau_semaine:tableau_semaine,
                            niv:$n,
                            id_sem:$id_sem},
                    dataType: "text",
                    success: function(data){
                    swal('','Modifications Enregistré avec success','success');

                    },
                    error:function(){
                      alert("erreur de requetes ");
                    }
                  });
        }



      });