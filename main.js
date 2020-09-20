$(document).ready(function(){
    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
      
    });

    document.addEventListener('DOMContentLoaded', function() {
        var errordiv = document.getElementById('error');
        
        email.addEventListener('blur', validarMail);

        function validarMail() {
            if (this.value.indexOf("@") > -1) {
                errordiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            } else {
                errordiv.style.display = 'block';
                errordiv.innerHTML = "Email inválido o Campo Vacío";
                this.style.border = '1px solid red';
            }
        }
    });

    // selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

//Solución con jQUery
/*$(document).ready(function(){
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
		$('.menuresponsive').toggleClass('is-active');
		return false;
	});
});*/

