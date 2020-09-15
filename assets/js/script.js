window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

$(function () { 

    var app = {
        popup: function () { 
            var e = $('[data-popup="gallery"]');
            e.magnificPopup({
                delegate: '[data-popup="gallery-item"]',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300, // don't foget to change the duration also in CSS
                    opener: function(element) {
                        return element.find('img');
                    }
                }
            });
        },

        cube_protfolio: function () { 
            var e = $('.grid-container');
            e.cubeportfolio({
                filters: '#filters-container',
                animationType: 'quicksand',
                gridAdjustment: 'responsive',
                caption: 'overlayBottom',
                displayType: 'default',
                displayTypeSpeed: 80,
                lightboxDelegate: '.cbp-lightbox',
                lightboxGallery: true,
                lightboxTitleSrc: 'data-title',
                gapHorizontal: 35,
                gapVertical: 30,
                mediaQueries: [{
                    width: 1500,
                    cols: 3,
                }, {
                    width: 1100,
                    cols: 3,
                }, {
                    width: 800,
                    cols: 3,
                }, {
                    width: 480,
                    cols: 1,
                    options: {
                        caption: '',
                        gapHorizontal: 30,
                        gapVertical: 10,
                    }
                }]
            });
        },
        changeValue:function(){
            $.each( $('.fy-input'), function(key , elem){
                if($(elem).val() == '')
                    $(elem).addClass('empty');
                else $(elem).removeClass('empty');
            });
    
            $('.fy-input').change(function(e){
                if($(this).val() == '')
                    $(this).addClass('empty');
                else $(this).removeClass('empty');
            });
        },

        init: function () { 
            this.popup();
            this.cube_protfolio();
            this.changeValue();
        }
    }


    return app.init();
});