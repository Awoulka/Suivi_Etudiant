/*$(document).ready(
      function(){ 
            $("select.aa").change(function(){var aa = $("select.aa").children(".aa option:selected").val();
              alert(aa);});
                    

});
    $(document).ready(
      function(){

        $( "#zone" ).draggable({helper: 'clone', snap: "td.td"});
        $( "td.td" ).droppable({

          accept: "#zone",
          drop: 
          function (ev,ui) {
            //var a = $(ui.draggable).clone();
            $(this).html('');
            var a= $("select.UE").children(".UE option:selected").val()+"</br>"+$("select.Enseignant").children(".Enseignant option:selected").val()+"</br>"+$("select.Salle").children(".Salle option:selected").val()+"</br>"+$("select.Avancement").children(".Avancement option:selected").val();
            $(this).append(a);
          }


        });
        $("#choix").hide();
        /*$("td.td").click(function(){$("#choix").show();
                                  $("td.td").css("background-color","white");
                                 $(this).css("background-color","#b3d9ff");
                                 aaa=$(this).attr('id');
                               });

    });*/

    $(document).ready(
      function(){

        //$("#table").hide();
        //$("#table_entete").hide();
        //$(".b").hide();
                  
        //$(".emploi").hide();
        //$("#ok").click(function(){$(".emploi").show();});
        select_niv=0;
        select_periode=0;
        val="";
        id="";
        //$(".Masquer").hide();
        //$(".choixPN").hide();
        $(".choix_date").hide();
        $("#PN").click(function(){
          id=$("select.PN").children(".PN option:selected").attr('id');
          val=$("select.PN").children(".PN option:selected").val();
          $(".PN").hide();
          $("#PN option").remove();
          //$(".choixPN").fadeIn("slow");
        });

        $("#periode").click(function(){
          id=$("select.periode").children(".periode option:selected").attr('id');
          val=$("select.periode").children(".periode option:selected").val();
          $(".periode option").remove();
          $(".choix_date").show();
        });

        /*$("#choix_ok").click(function(){select_niv=1;
          $(".choixPN").hide();
          $(".PN").fadeIn("slow");
          $("select#PN").append("<option id="+$("select.Niveau").children(".Niveau option:selected").attr('id')+">"+$("select.Niveau").children(".Niveau option:selected").val()+"</option>");
         
      });*/
        

        $("#choix_non").click(
          function(){
            $(".PN").fadeIn("slow");
            $(".choixPN").hide();
            if (val!=null) {
              $("select.PN").append("<option id="+id+">"+val+"</option>");
            }
            
          
      });

        $("#choix_date_ok").click(
          function(){
            mois=[" ","janvier","fevrier","mars","avril","mai","juin","juillet","auout","septembre","octobre","novembre","decembre"];
            //select_periode=1;
            $(".choix_date").hide();
          deb_s=$("select.annee_d").children(".annee_d option:selected").val()+
          "-"+$("select.moi_d").children(".moi_d option:selected").attr('class')+
          "-"+$("select.jour_d").children(".jour_d option:selected").attr('class');

          /*fin_s=$("select.annee_d").children(".annee_d option:selected").val()+
          "-"+mois[parseInt($("select.moi_d").children(".moi_d option:selected").attr('class'))]+
          "-"+(6+parseInt($("select.jour_d").children(".jour_d option:selected").attr('class')));
          */
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
      });

        $("#choix_date_non").click(
          function(){
            
            $(".choix_date").hide();
             if (val!=null) {
              $("select#periode").append("<option id="+id+">"+val+"</option>");
            }
          
      });
        $("#sortir,#close").click(function(){
          $(".choix").css("display","none");
          $("select.EC,select.UE,select.Enseignant").css("border-color","white");
           $(".radio").css("border","none");
      });
            

    });
 
    $(document).ready(
      function(){

        


        deja=0;
        var index="";
        $(".choix").hide();
        /*$("td.td").click(function(){

          aaa=$(this).attr('id');

                    if (select_niv==1 && select_periode==1) {
                      index=$(this).attr('id');
                                  $("#choix").css("display","block");
                                  $("td.td").css("background-color","white");
                                 $(this).css("background-color","#b3d9ff");
                    }
                    else
                    {
                      alert("Les champs Parcour et niveau ainsi que la periode doivent etre renseignés.");
                    }
                                    });*/
        $("#sortir,#close").click(function(){$(".choix").css("display","none");});
        /*$("#enreg").click( function(){
                                         $("#choix").css("display","none");
                                        $("#"+index).html("<center>"+"<div >"+"<font size=2>"+$("select.EC").children(".EC option:selected").val()+"</font>"+"</div>"+
                                         "<div >"+"<font size=2>"+$("select.Enseignant").children(".Enseignant option:selected").val()+"</font>"+"</div>"+
                                        "<div >"+"<font size=2>"+$("select.Salle").children(".Salle option:selected").val()+"</font>"+"</div>"+"<center>");
                                   
                                    });*/
        $("#generer").click(function(){$("#zone").html($("select.UE").children(".UE option:selected").val()+"</br>"+$("select.Enseignant").children(".Enseignant option:selected").val()+"</br>"+$("select.Salle").children(".Salle option:selected").val()+"</br>"+$("select.Avancement").children(".Avancement option:selected").val());
                                    });

    });
   // ++"</br>"++"</br>"+$("select.Avancement").children(".Avancement option:selected").val()
    /*
    $(document).ready(
      function(){

        var index="";
        $("#choix").hide();
        $("td.td").click(function(){
                                    index=$(this).attr('id');
                                  $("#choix").css("display","block");
                                  $("td.td").css("background-color","white");
                                 $(this).css("background-color","#b3d9ff");});
        $("#sortir,#close").click(function(){$("#choix").css("display","none");});
        $("#enreg").click(function(){$("#"+index).html($("select.UE").children(".UE option:selected").val()+"</br>"+$("select.Enseignant").children(".Enseignant option:selected").val()+"</br>"+$("select.Salle").children(".Salle option:selected").val()+"</br>"+$("select.Avancement").children(".Avancement option:selected").val());
                                    $("#choix").css("display","none");
                                    });
        $("#generer").click(function(){$("#zone").html($("select.UE").children(".UE option:selected").val()+"</br>"+$("select.Enseignant").children(".Enseignant option:selected").val()+"</br>"+$("select.Salle").children(".Salle option:selected").val()+"</br>"+$("select.Avancement").children(".Avancement option:selected").val());
                                    });

    });*/
 

    