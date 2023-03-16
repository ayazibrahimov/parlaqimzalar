/* JavaScript Document */
jQuery(window).on('load', function() {
    'use strict';
	
	
	// service-silder-swiper
	if(jQuery('.main-swiper').length > 0){
		var swiper = new Swiper(".main-swiper-thumb", {
			loop: true,
			spaceBetween: 10,
			slidesPerView: "auto",
			//freeMode: true,
			watchSlidesProgress: true,
			autoplay: {
			   delay: 1500,
			},
		});
		var swiper2 = new Swiper(".main-swiper", {
			loop: true,
			effect: "fade",
			speed: 1000,
			parallax: true,
			autoplay: {
			   delay: 1500,
			},
			pagination: {
				el: ".swiper-pagination-five",
				clickable: true,
			},
			thumbs: {
			  swiper: swiper,
			},
		});
	}
	
	if(jQuery('.main-swiper-two').length > 0){
		var swiper = new Swiper(".main-swiper-thumb", {
			loop: true,
			spaceBetween: 10,
			slidesPerView: "auto",
			//freeMode: true,
			watchSlidesProgress: true,
			autoplay: {
			   delay: 1500,
			},
		});
		var swiper2 = new Swiper(".main-swiper-two", {
			loop: true,
			effect: "fade",
			speed: 1000,
			parallax: true,
			autoplay: {
			   delay: 1500,
			},
			pagination: {
				el: ".swiper-pagination-five",
				clickable: true,
			},
			thumbs: {
			  swiper: swiper,
			},
		});
	}
	
	
	// Testimonial Swiper
	if(jQuery('.testimonial-swiper').length > 0){
		var swiperTestimonial = new Swiper('.testimonial-swiper', {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
			  nextEl: ".testimonial-button-next",
			  prevEl: ".testimonial-button-prev",
			},
			breakpoints: {
				300: {
					slidesPerView: 1,
				},
				600: {
					slidesPerView: 1,
				},
				767: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
				},
				
			}
		});
	}
	
	if(jQuery('.book-swiper').length > 0){
		var swiperBook = new Swiper('.book-swiper', {
			slidesPerView: 2,
			spaceBetween: 30,
			autoplay: {
				delay: 4000,
			  },
			navigation: {
				nextEl: ".book-button-next",
				prevEl: ".book-button-prev",
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576:{
					slidesPerView: 2,
				},
				// 576:{
				// 	slidesPerView: 1,
				// },
				1500:{
					slidesPerView: 3,
				}
			}
		});
	}
	
	if(jQuery('.swiper-three').length > 0){
		var swiperInfo = new Swiper( '.swiper-three', {
			slidesPerView: 1,
			centeredSlides: true,
			spaceBetween: 90,
			loop: true,
			pagination: {
			  el: ".swiper-pagination-three",
			  clickable: true,
			},
			autoplay: {
				delay: 3000,
			},
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				1200: {
					slidesPerView: 1,
				},
				1680: {
					slidesPerView: 1,
				},
			}
		});
	}

	swiperInfo.el.addEventListener("mouseenter", function( event ) {   
		swiperInfo.autoplay.stop();
	}, false);


	if(jQuery('.swiper-three--double').length > 0){
		var swiperInfo1 = new Swiper( '.swiper-three--double', {
			slidesPerView: 5,
			centeredSlides: false,
			spaceBetween: 15,
			slidesPerGroup: 1,
            // loopFillGroupWithBlank: true,
			loop: true,
				pagination: {
				el: ".swiper-pagination-five",
			},
			autoplay: {
				delay: 2700,
			},
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
				breakpoints: {
					1200: {
						slidesPerView: 5,
					},
					991: {
						slidesPerView: 4,
					},
					768:{
						slidesPerView: 3,
					},
					576: {
						slidesPerView: 2,
					},
					220: {
						slidesPerView: 1,
						spaceBetween: 15,
						// centeredSlides: true,
					},
				}
		});
	}

	swiperInfo1.el.addEventListener("mouseenter", function( event ) {   
		swiperInfo1.autoplay.stop();
	}, false);


	if(jQuery('.testimonial-swiper-2').length > 0){
		var swiperTestimonial2 = new Swiper( '.testimonial-swiper-2', {
			slidesPerView: 1.5,
			centeredSlides: true,
			spaceBetween: 95,
			loop: true,
			autoplay: {
				delay: 3500,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				1200: {
					slidesPerView: 1,
				},
				1680: {
					slidesPerView: 1,
				}
			}
		} );
	}
	
	if(jQuery('.client-swiper').length > 0){
		var swiper = new Swiper(".client-swiper", {
			slidesPerView: 5,
			autoplay: {
				delay: 2000,
			},
			// pagination: {
			//   el: ".swiper-pagination",
			//   clickable: true,
			// },
			breakpoints: {
				1600: {
					slidesPerView: 5,
				},
				1400: {
					slidesPerView: 4,
				},
				1200: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 3,
				},
				591: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 2,
				},
				250: {
					slidesPerView: 1,
				},
			}
		});
	}

	if(jQuery('.swiper-two').length > 0){
		var swiper = new Swiper( '.swiper-two', {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: false,
			// autoplay: {
			// 	delay: 2500,
			// },
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
			breakpoints: {
				1200: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 3,
					centeredSlides: true,
				},
				320: {
					slidesPerView: 2,
					spaceBetween: 15,
					centeredSlides: true,
				},
			}
		} );
	}

	if(jQuery('.swiper-four').length > 0){
		var swiper = new Swiper( '.swiper-four', {
			slidesPerView: 5,
			centeredSlides: false,
			spaceBetween: 15,
			slidesPerGroup: 1,
            // loopFillGroupWithBlank: true,
			loop: false,
				pagination: {
				el: ".swiper-pagination-two",
			},
			// autoplay: {
			// 	delay: 3000,
			// },
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},	
			breakpoints: {
				1200: {
					slidesPerView: 5,
				},
				991: {
					slidesPerView: 4,
				},
				768:{
					slidesPerView: 3,
				},
				576: {
					slidesPerView: 2,
				},
				220: {
					slidesPerView: 1,
					spaceBetween: 15,
					// centeredSlides: true,
				},
			}
		});
	}
	if(jQuery('.swiper-four--double').length > 0){
		var swiper = new Swiper( '.swiper-four--double', {
			slidesPerView: 5,
			centeredSlides: false,
			spaceBetween: 15,
			slidesPerGroup: 1,
            // loopFillGroupWithBlank: true,
			loop: false,
				pagination: {
				el: ".swiper-pagination-two",
			},
			// autoplay: {
			// 	delay: 2700,
			// },
			navigation: {
				prevEl: ".swiper-button-prev--1",
				nextEl: ".swiper-button-next--2",
			},	
			breakpoints: {
				1200: {
					slidesPerView: 5,
				},
				991: {
					slidesPerView: 4,
				},
				768:{
					slidesPerView: 3,
				},
				576: {
					slidesPerView: 2,
				},
				220: {
					slidesPerView: 1,
					spaceBetween: 15,
					// centeredSlides: true,
				},
			}
		});
	}
	if(jQuery('.swiper-four--trible').length > 0){
		var swiper = new Swiper( '.swiper-four--trible', {
			slidesPerView: 4,
			// centeredSlides: false,
			spaceBetween: 30,
			slidesPerGroup: 1,
            // loopFillGroupWithBlank: true,


			autoplay: {
				delay: 3500,
			},
			// navigation: {
			// 	prevEl: ".swiper-button-prev--1",
			// 	nextEl: ".swiper-button-next--2",
			// },	
			breakpoints: {
				1200: {
					slidesPerView: 5,
				},
				991: {
					slidesPerView: 4,
				},
				768:{
					slidesPerView: 3,
				},
				576: {
					slidesPerView: 2,
				},
				220: {
					slidesPerView: 1,
					spaceBetween: 15,
					// centeredSlides: true,
				},
			}
		});
	}

	if(jQuery('.swiper-five').length > 0){
		var swiper = new Swiper( '.swiper-five', {
			slidesPerView: 2,
			spaceBetween: 20,
			loop: true,
			pagination: {
			  el: ".swiper-pagination-two",
			  clickable: true,
			},
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				1600: {
					slidesPerView: 2,
				},
				1480: {
					slidesPerView: 2,
				},
				1191: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 1,
				},
				320: {
					slidesPerView: 1,
				},
			}
		} );
	}

	if(jQuery('.swiper-six').length > 0){
		var swiper = new Swiper( '.swiper-six', {
			slidesPerView: 8,
			spaceBetween: 20,
			loop: true,
			centeredSlides: true,
			breakpoints: {
				1600: {
					slidesPerView: 8,
				},
				1480: {
					slidesPerView: 7,
				},
				1280: {
					slidesPerView: 5,
				},
				1024: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 4,
				},
				768: {
					slidesPerView: 3,
				},
				600: {
					slidesPerView: 2,
				} ,
				320: {
					slidesPerView: 1,
				},
			}
		} );
	}
	
	if(jQuery('.swiper-seven').length > 0){
		var swiper = new Swiper( '.swiper-seven', {
			slidesPerView: 6,
			spaceBetween: 20,
			loop: true,
			breakpoints: {
				1600: {
					slidesPerView: 6,
				},
				1200: {
					slidesPerView: 5,
				},
				1024: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 3,
				},
				600: {
					slidesPerView: 2,
				} ,
				320: {
					slidesPerView: 1,
				},
			}
		} );
	}

	if(jQuery('.blog-swiper').length > 0){
		var swiper = new Swiper( '.blog-swiper', {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 2500,
			},
			navigation: {
				prevEl: ".breaking-button-prev",
				nextEl: ".breaking-button-next",
			},	
			breakpoints: {
				1200: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 2,
				},
				600: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		} ); 
	}

});


var swiperData = new Swiper(".bookSwiper", {
	paginationClickable: true,
	// pagination: {
    //     el: ".swiper-pagination",
    //     type: "progressbar",
    //   },
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  });

  swiperData.el.addEventListener("mouseenter", function( event ) {   
	swiperData.autoplay.stop();
}, false);



if(jQuery('.swiper-grid').length > 0){
	var swiper = new Swiper( '.swiper-grid', {
		slidesPerView: 5,
			centeredSlides: false,
			spaceBetween: 15,
			slidesPerGroup: 1,
            // loopFillGroupWithBlank: true,
			loop: false,
				pagination: {
				el: ".swiper-pagination-two",
			},
			autoplay: {
				delay: 3000,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},	
			breakpoints: {
				1200: {
					slidesPerView: 5,
				},
				991: {
					slidesPerView: 4,
				},
				768:{
					slidesPerView: 3,
				},
				576: {
					slidesPerView: 2,
				},
				220: {
					slidesPerView: 1,
					spaceBetween: 15,
					// centeredSlides: true,
				},
			}
	
	});
}
if(jQuery('.swiper-author').length > 0){
	var swiper = new Swiper('.swiper-author', {
		slidesPerView: 5,
			centeredSlides: false,
			spaceBetween: 30,
			slidesPerGroup: 1,
            // loopFillGroupWithBlank: true,
			loop: false,
				pagination: {
				el: ".swiper-pagination-two",
			},
			autoplay: {
				delay: 3000,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},	
			breakpoints: {
				1200: {
					slidesPerView: 5,
				},
				991: {
					slidesPerView: 4,
				},
				768:{
					slidesPerView: 3,
				},
				576: {
					slidesPerView: 2,
				},
				220: {
					slidesPerView: 1,
					spaceBetween: 15,
					// centeredSlides: true,
				},
			}
	
	});
}

/* Document .ready END */