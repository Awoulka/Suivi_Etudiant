(function ($) {
            
            "use strict";

              
          // Recent Report
              const brandProduct = 'rgba(0,181,233,0.8)'
              const brandService = 'rgba(0,173,95,0.8)'

              var elements = 10
              var data2 = [19, 60, 50, 20 ]

              var ctx = document.getElementById("Chart-recent-report");
              if (ctx) {
                ctx.height = 250;
                var myChart = new Chart(ctx, {
                  type: 'bar',
                  data: {
                    labels: ['January', 'February', 'March', 'April'],
                    datasets: [
                      {
                        label: 'Taux evolution des ec',
                        backgroundColor: brandProduct,
                        borderColor: 'transparent',
                        pointHoverBackgroundColor: '#fff',
                        borderWidth: 0,
                        data: data2

                      }
                    ]
                  },
                  options: {
                    maintainAspectRatio: true,
                    legend: {
                      display: false
                    },
                    responsive: true,
                    scales: {
                      xAxes: [{
                        gridLines: {
                          drawOnChartArea: true,
                          color: '#f2f2f2'
                        },
                        ticks: {
                          fontFamily: "Poppins",
                          fontSize: 12
                        }
                      }],
                      yAxes: [{
                        ticks: {
                          beginAtZero: true,
                          maxTicksLimit: 2,
                          stepSize: 2,
                          max: 60,
                          fontFamily: "Poppins",
                          fontSize: 12
                        },
                         gridLines: {
                          display: true,
                          color: '#f2f2f2'

                        }
                      }]
                    },
                  /*  elements: {
                      point: {
                        radius: 0,
                        hitRadius: 10,
                        hoverRadius: 4,
                        hoverBorderWidth: 3
                      }
                    }*/


                  }
                });
              }


          })(jQuery);

/* try {

    var ctx = document.getElementById("widgetChart5");
    if (ctx) {
      ctx.height = 220;
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April'],
          datasets: [
            {
              label: "My First dataset",
              data: [78, 81, 80, 64],
              borderColor: "transparent",
              borderWidth: "0",
              backgroundColor: "#ccc",
            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: false,
              categoryPercentage: 1,
              barPercentage: 0.65
            }],
            yAxes: [{
              display: false
            }]
          }
        }
      });
    }

  } catch (error) {
    console.log(error);
  }
*/
