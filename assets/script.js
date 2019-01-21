  $(function slideToggle(){
                var pic1 = '.slideToggle #one';
                var pic2 = '.slideToggle #two';
                var pics = 2;
                var pic = 1
                var picture = pic2
                
                $(pic1).fadeIn(500);
                $(pic1).delay(5500).hide('slide', {direction:'left'}, 500);


                setInterval(function(){

                $(picture).show('slide',{direction:'right'}, 500);
                $(picture).delay(5000).hide('slide', {direction:'left'}, 400);
                if (pic == pics  ){
                    picture = pic2
                     pic = 1
                } else {
                    picture = pic1
                    pic += 1                  
                }
                    
                     }, 6500);
                });
          $(function() {
            var pull        = $('.navigation');
                menu        = $('nav ul');
                menuHeight  = menu.height();

            $(pull).on('click', function(e) {
                e.preventDefault();
                menu.slideToggle('2000', "linear");
            });

            $(window).resize(function(){
                var w = $(window).width();
                if(w > 320 && menu.is(':hidden')) {
                    menu.removeAttr('style');
                }
            });
        });