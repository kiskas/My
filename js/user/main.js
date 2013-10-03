$().ready(function() {

// tabs
    var tab_cont = ['tab1','tab2','tab3'];
    function tabs(){

        // hide all tabs and him content
        for (var i = 0; i < tab_cont.length; i++) {
            $('.'+ tab_cont[i]).removeClass('active');
        }
    }
    $('.tab1').addClass("active");

    $('#tabs li').click(function(e) {
        var targetTabCls = $(e.currentTarget).attr("class").replace('active', ''), // action tab click
            tabEls = $('.' + targetTabCls);
		if (tabEls.hasClass('active')) {
			return;
		}
        tabs();
        tabEls.addClass('active');
    });



});
