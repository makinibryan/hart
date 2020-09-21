 $(function() {
     setTimeout(function() {
         $.notify({
             // options
             icon: '',
             title: "<a href=\"index.html\" target=\"_blank\"><h4>Last booking</h4>",
             message: "<figure><img src=\"assets/img/booking_notify/giraffes.jpg\"></figure><p>4 Days Maasai Mara Tour (13 min. ago).</a> "
         }, {
             // settings
             icon_type: 'image',
             type: 'info',
             delay: 500,
             timer: 3000,
             z_index: 9999,
             showProgressbar: false,
             placement: {
                 from: "bottom",
                 align: "left"
             },
             animate: {
                 enter: 'animated bounceInUp',
                 exit: 'animated bounceOutDown'
             },
         });
     }, 5000); // change the start delay
 });