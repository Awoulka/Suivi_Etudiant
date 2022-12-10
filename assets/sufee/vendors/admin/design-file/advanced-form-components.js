//date picker start

    if (top.location != location) {
        top.location.href = document.location.href ;
    }
    jQuery(function(){
        window.prettyPrint && prettyPrint();
        jQuery('.default-date-picker').datepicker({
            format: 'mm-dd-yyyy'
        });
        jQuery('.dpYears').datepicker();
        jQuery('.dpMonths').datepicker();


        var startDate = new Date(2012,1,20);
        var endDate = new Date(2012,1,25);
        jQuery('.dp4').datepicker()
            .on('changeDate', function(ev){
                if (ev.date.valueOf() > endDate.valueOf()){
                    jQuery('.alert').show().find('strong').text('The start date can not be greater then the end date');
                } else {
                    jQuery('.alert').hide();
                    startDate = new Date(ev.date);
                    jQuery('#startDate').text(jQuery('.dp4').data('date'));
                }
                jQuery('.dp4').datepicker('hide');
            });
        jQuery('.dp5').datepicker()
            .on('changeDate', function(ev){
                if (ev.date.valueOf() < startDate.valueOf()){
                    jQuery('.alert').show().find('strong').text('The end date can not be less then the start date');
                } else {
                    jQuery('.alert').hide();
                    endDate = new Date(ev.date);
                    jQuery('.endDate').text(jQuery('.dp5').data('date'));
                }
                jQuery('.dp5').datepicker('hide');
            });

        // disabling dates
        var nowTemp = new Date();
        var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

        var checkin = jQuery('.dpd1').datepicker({
            onRender: function(date) {
                return date.valueOf() < now.valueOf() ? 'disabled' : '';
            }
        }).on('changeDate', function(ev) {
                if (ev.date.valueOf() > checkout.date.valueOf()) {
                    var newDate = new Date(ev.date)
                    newDate.setDate(newDate.getDate() + 1);
                    checkout.setValue(newDate);
                }
                checkin.hide();
                jQuery('.dpd2')[0].focus();
            }).data('datepicker');
        var checkout = jQuery('.dpd2').datepicker({
            onRender: function(date) {
                return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
            }
        }).on('changeDate', function(ev) {
                checkout.hide();
            }).data('datepicker');
    });

//date picker end


//datetime picker start

jQuery(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii'});

jQuery(".form_datetime-component").datetimepicker({
    format: "dd MM yyyy - hh:ii"
});

jQuery(".form_datetime-adv").datetimepicker({
    format: "dd MM yyyy - hh:ii",
    autoclose: true,
    todayBtn: true,
    startDate: "2013-02-14 10:00",
    minuteStep: 10
});

jQuery(".form_datetime-meridian").datetimepicker({
    format: "dd MM yyyy - HH:ii P",
    showMeridian: true,
    autoclose: true,
    todayBtn: true
});

//datetime picker end

//timepicker start
jQuery('.timepicker-default').timepicker();


jQuery('.timepicker-24').timepicker({
    autoclose: true,
    minuteStep: 1,
    showSeconds: true,
    showMeridian: false
});

//timepicker end

