$.ajax({

                  
                  url: base_url + "index.php/choix/ch1" ,
                  type: "POST",
                  //async: false,

                  data : {mention : "<?php  echo $this->session->id_mention;?>"},
                  dataType: "json",
                  success: function(data){
                    

           $(".Parcour option").remove();
           for (var i = 0; data.parcours.length - 1 >= i; i++) {
             $("select.Parcour").append("<option id="+data.parcours[i].id_parcour+">"+ data.parcours[i].abreviation_parcour+"</option>");
           }
           $(".Niveau option").remove();
           for (var i = 0; data.niveau.length - 1 >= i; i++) {
             $("select.Niveau").append("<option id="+data.niveau[i].id_niv_par+">"+ data.niveau[i].rendu+"</option>");
             $("select.PN").append("<option id="+data.niveau[i].id_niv_par+">"+ data.niveau[i].rendu+"</option>");

           }
           ajax(table);
        }
                });




$(".Parcour").change(function(){

            $.post(
              base_url + "index.php/choix/ch2",
              { parcour : $("select.Parcour").children(".Parcour option:selected").attr('id')},
              function(data){
  
           $(".Niveau option").remove();
           for (var i = 0; data.niveau.length - 1 >= i; i++) {
             $("select.Niveau").append("<option id="+data.niveau[i].id_niv_par+">"+ data.niveau[i].rendu+"</option>");
              $("select#PN").append("<option id="+data.niveau[i].id_niv_par+">"+ data.niveau[i].rendu+"</option>");
           
           }


           $(".table").html("<tr><td style='table-layout: fixed; border: 0.1em solid ' rowspan='6' width='40px'></td></tr>");
            },
            "json"
            );

            
          });