

//alert("aa")

var tableau_id= new Array(4);
            tableau_id[1]= new Array(7);
            tableau_id[2]= new Array(7);
            tableau_id[3]= new Array(7);
            tableau_id[4]= new Array(7);
            tableau_id[5]= new Array(7);
            tableau_id[6]= new Array(7);
var tableau_valeurs= new Array(4);
            tableau_valeurs[1]= new Array(7);

            tableau_valeurs[2]= new Array(7);
            tableau_valeurs[3]= new Array(7);
            tableau_valeurs[4]= new Array(7);
            tableau_valeurs[5]= new Array(7);
            tableau_valeurs[6]= new Array(7);
var tableau_nbh_=[];
var tableau_d_=[];

var tableau_s=[];
var tableau_id_plage= [];
var tableau_id_jour= [];


function creer_tableau_(tableau,tableau_entete,tableau_emploie){

    //alert("aa")
  
  var tableau_jour=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];

       celulle="<tr><th style='' width='100px'></th>";

                                  for (var i = 0; i < tableau.length ; i++) {

                                          if(tableau[i][0]=="cour"){

                      
                                            if((tableau[i+1]!=null && tableau[i+1][0]=="pause") || tableau[i+1]==null){

                                               celulle+="<td>"+tableau[i][1][0]+tableau[i][1][1]+"h"+tableau[i][1][3]+tableau[i][1][4]+"<div align='right' style='float: right;'>"+tableau[i][2][0]+tableau[i][2][1]+"h"+tableau[i][2][3]+tableau[i][2][4]+"</div></td>";
                                    //            alert(tableau_d[i][1][0]+tableau_d[i][1][1]);

                                            }
                                          else{
                                                 celulle+="<td>"+tableau[i][1][0]+tableau[i][1][1]+"h"+tableau[i][1][3]+tableau[i][1][4]+"</td>";
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
                                            celulle+="<td class='td' style='table-layout: fixed; border: 0.1em solid ' id=pp"+(i+1)+(j+1)+"></td>";
                                              }
                                            else{
                                              
                                              celulle+="<td style='table-layout: fixed; border: 0.1em solid ' rowspan='6' width='40px'></td>";
                                            }
                                          }
                                          else{

                                            if (tableau[j][0]!="pause") {                                            
                                            

                                                celulle+="<td class='td' style='table-layout: fixed; border: 0.1em solid '  id=pp"+(i+1)+(j+1)+"></td>";
                                            

                                          }
                                            
                                          }

                                          
                                      }
                                      celulle+="</tr>";


                                  $("#"+tableau_emploie).html(celulle);


                                  };
                            $("#"+tableau_entete).fadeIn(1000);
                             $("#"+tableau_emploie).fadeIn(1000);
};

function Remplir(tableau,ligne,colonne,index0){


                       if (tableau[ligne][colonne][9]=="BIBLIOTHEQUE" || 
                           tableau[ligne][colonne][9]=="Congé" || 
                           tableau[ligne][colonne][9]=="INVEST_HUMAIN") {
                                   $("#"+index0).html("<center>"+"<font size=5 >"+tableau[ligne][colonne][9]+"</font>"+"</center>");
                                 }
                       else{ 
                                  /* if (tableau[ligne][colonne][6]!='' && tableau[ligne][colonne][6]!=tableau[ligne][colonne][5] ) {
                                       ens2=" / "+tableau[ligne][colonne][6];
                                   }
                                   else{
                                     ens2="";

                                   }*/


                                  ens2=tableau[ligne][colonne][5];
                        if (ens2==null) {

                            ens2='<p style="color: red;">Aucun enseignant affecté à cette matière!!!!</p>'
                        }

                                     if (tableau[ligne][colonne][9]=="Cour") {

                                        if (tableau[ligne][colonne][11] != 0) {

                                            if (tableau[ligne][colonne][12]==0) {

                                            $("#"+index0).html("<center>"
                                         +"<div >"+"<font size=2>"+tableau[ligne][colonne][3]+"</font>"
                                         +"</div>"+
                                        "<div >"+"<font size=2>"+ens2+"</font>"
                                        +"</div>"
                                        +"<div style='float: left;'>"+"<font size=2>"+tableau[ligne][colonne][2]+"</div>"+
                                        "<div style='float: ;'>"+"<font size=3>&nbsp;Groupe "+tableau[ligne][colonne][11]+"</div>"+
                                        "<div style='float: right;'>"+tableau[ligne][colonne][4]+"/"+tableau[ligne][colonne][7]+"</font>"+"</div>"
                                       +"</center>");}

                                            else{

                                                $("#"+index0).html("<center>"
                                         +"<div >"+"<font size=2>"+tableau[ligne][colonne][3]+"</font>"
                                         +"</div>"+
                                        "<div >"+"<font size=2>"+ens2+"</font>"
                                        +"</div>"
                                        +"<div style='float: left;'>"+"<font size=2>"+tableau[ligne][colonne][2]+"</div>"+
                                        "<div style='float: ;'>"+"<font size=3>&nbsp;Groupe "+tableau[ligne][colonne][11]+"</div>"+
                                        "<div style='float: right;'>"+tableau[ligne][colonne][4]+"/"+tableau[ligne][colonne][12]+"</font>"+"</div>"
                                       +"</center>");
                                            }
                                        }
                                        else{

                                            

                                            if (tableau[ligne][colonne][12]==0) {

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
                                        "<div style='float: right;'>"+tableau[ligne][colonne][4]+"/"+tableau[ligne][colonne][12]+"</font>"+"</div>"
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
                                        if (tableau[ligne][colonne][11] != 0) {

                                            

                                            if (tableau[ligne][colonne][12]==0) {

                                            $("#"+index0).html("<center>"
                                         +"<div >"+"<font size=2>"+tableau[ligne][colonne][3]+"</font>"
                                         +"</div>"+
                                        "<div >"+"<font size=2>"+tableau[ligne][colonne][9]+"</font>"
                                        +"</div>"
                                       +"<div style='float: left;''>"+"<font size=2>"+tableau[ligne][colonne][2]+"</div>"+
                                       "<div style='float: ;'>"+"<font size=3>&nbsp;Groupe "+tableau[ligne][colonne][11]+"</div>"+
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
                                       "<div style='float: ;'>"+"<font size=3>&nbsp;Groupe "+tableau[ligne][colonne][11]+"</div>"+
                                       "<div style='float: right;'>"+tableau[ligne][colonne][4]+"/"+tableau[ligne][colonne][12]+"</font>"+"</div>"
                                       +"</center>");
                                            }

                                        }
                                        else{

                                           


                                             if (tableau[ligne][colonne][12]==0) {

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
                                       "<div style='float: right;'>"+tableau[ligne][colonne][4]+"/"+tableau[ligne][colonne][12]+"</font>"+"</div>"
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

$(document).ready(
    function(){





function planifications_(id_semaine,table,table_entete){


$.ajax({

                
                url: base_url + "Enregistrement/planifications",
                type: "POST",
                async: false,

                data : {id_s:id_semaine,niv: $n},
                dataType: "json",
                success:function(data){
                  
                  
for (var i = 1; 7 - 1 >= i; i++) {
      
           tableau_id[i].length=0;

           tableau_valeurs[i].length=0;
         }


                    for (var i = 0; data.plages.length - 1 >= i; i++) {

                  tableau_d_[data.plages[i].num_plage-1]= [data.plages[i].intitule_plage,data.plages[i].heure_debut,data.plages[i].heure_fin,data.plages[i].id_plage,data.plages[i].num_group];
                 tableau_nbh_[data.plages[i].num_plage]=data.plages[i].duree;

                }

                
                        
                
                            creer_tableau_(tableau_d_,table_entete,table);

                  
                 
                    $(".semestre").html(data.semaine[0].semestre[0]
                      .semestre);

           $(".semaine").html(data.semaine[0].numero);
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

                        //alert(d+" au "+f);
           $(".period").html("du "+d+" au "+f);




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
            
           tableau_id[data.planifications[i].num_jour][data.planifications[i].num_plage]=
           [tableau_id_jour[data.planifications[i].num_jour-1],
           tableau_d_[data.planifications[i].num_plage-1][3],
           data.planifications[i].salle_id,
           data.planifications[i].ec_id,
           data.planifications[i].evolution,
           data.planifications[i].ue[0].id_ue,
           data.planifications[i].type_planing,
           tableau_d_[0][4],
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
        }
           tableau_valeurs[data.planifications[i].num_jour][data.planifications[i].num_plage]=
           [tableau_id_jour[data.planifications [i].num_jour-1],
           tableau_d_[data.planifications[i].num_plage-1][3],
           data.planifications[i].salle,
           ec,
           data.planifications[i].evolution,
           ensei,
           ens,
           data.planifications[i].heure,
           data.planifications[i].ue[0].intitule_ue,
           data.planifications[i].type_planing,
           data.planifications[i].semestre[0].id_semestre,
           data.planifications[i].groupe,
           data.planifications[i].heure_definit];
           //alert(data.planifications[i].semestre[0].id_semestre);
         }


         for (var i = 1; i <7 ; i++) {
                   //alert("i="+i);
                   for (var j = 1; j <= tableau_nbh_.length ; j++) {
                    //alert("j="+j);
                    if (tableau_valeurs[i][j]!=null) {

                         
                      Remplir(tableau_valeurs,i,j,"pp"+i+j);
                    }
                    
                   }
                 }
                 

                },
                error:function(){
                  alert("erreur de serveur ;(");
                }
              });
              
};

$.ajax({

                
                url: base_url + "Enregistrement/semaines" ,
                type: "POST",
                async: false,

                data : {niv: $n},
                dataType: "json",
                success:function (data){
                      tableau_d_.length=0;

                      if(data.length!=0){
                        for ( i = 0; i < data.length; i++) {

                          tableau_s[i]=[data[i].numero,data[i].id_semaine];
                        }
                          planifications_(tableau_s[tableau_s.length-1][1],"table_","table_entete_");

                    $(".message").empty();
                    $(".header_empl").show();

                    $("#pr").click(function(){

                    //alert(tableau_s.length);
                    for ( i = 0; i < tableau_s.length; i++) {


                          if ($(".semaine").html()==tableau_s[i][0]) {

                            planifications_(tableau_s[i-1][1],"table_","table_entete_");
                            

                          }
                              
                    }
                      
                        
                    });

                    $("#sv").click(function(){

                    for ( i = 0; i < tableau_s.length; i++) {


                          if ($(".semaine").html()==tableau_s[i][0]) {
                            planifications_(tableau_s[i+1][1],"table_","table_entete_");
                            i=tableau_s.length;
                          }
                              
                    }
                      
                        
                    });

                      }

                    else{
                      $(".message").html("Aucun emploi du temps enregistré pour le compte de l'année actuel");
                      $(".header_empl").hide();
                    $("#table_entete_").html("");
                    $("#table_").html("");

                    }
                    },
                error:function(){
                  alert("erreur de serveur ;(");
                }
              });


});

