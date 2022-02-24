const elements = document.querySelectorAll(".getHover"),
    image_wrap = document.querySelector(".image-wrap");

let timeline = gsap.timeline({
    defaults: {
        duration: 1.3,
        ease: "power3.inOut"
    }
}); //Linea temporal del framework gsap de greensock y que por defecto todo tenga una animacion y una duracion

timeline
    .to(
        ".image-wrap", {
            height: "500px",
            backgroundSize: "105%",
            duration: 1.5,
            ease: "power4.inOut",
        })
    .to(
        ".image-wrap", {
            height: "250px",
            backgroundPosition: "50% 58%",
            y: "0",
        },
        1.5
    )
    .from(
        ".big-name", {
            y: getYDistance(".big-name"),
        },
        1.5
    ).from(
        ".hide", {
            opacity: "0",
        },
        1.5
    );

function getYDistance(el) { //Distancia entre ek texto y el borde inferior de la pantalla
    return (
        window.innerHeight - document.querySelector(el).getBoundingClientRect().top
    );
}

// boton inscribirse
console.clear();

document.querySelector("#demo").addEventListener("mouseenter", doCoolStuff);
document.querySelector("#demo").addEventListener("mouseleave", doCoolStuff);

const tl = new TimelineMax();
tl.to(document.querySelector("#demo").children[0], 0.4, {
    attr: {
        width: 230
    },
    ease: Power4.easeInOut
});
tl.to("text", 0.4, {
    fill: "#fff",
    ease: Linear.easeNone
}, 0);
tl.to("polyline, line", 0.4, {
    x: 14,
    ease: Power4.easeInOut
}, 0);
tl.to("line", 0.4, {
    attr: {
        x2: 3
    },
    ease: Power4.easeInOut
}, 0);
tl.reversed(true);

function doCoolStuff() {
    tl.reversed(!tl.reversed());
}

//scroll smooth
$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


//Scroll

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


//CARROUSEL

window.addEventListener('load', () => {
    var
        carousels = document.querySelectorAll('.carousel');

    for (var i = 0; i < carousels.length; i++) {
        carousel(carousels[i]);
    }
});

function carousel(root) {
    var
        figure = root.querySelector('figure'),
        nav = root.querySelector('nav'),
        images = figure.children,
        n = images.length,
        gap = root.dataset.gap || 0,
        bfc = 'bfc' in root.dataset,

        theta = 2 * Math.PI / n,
        currImage = 0;

    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener('resize', () => {
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width))
    });

    setupNavigation();

    function setupCarousel(n, s) {
        var
            apothem = s / (2 * Math.tan(Math.PI / n));

        figure.style.transformOrigin = `50% 50% ${- apothem}px`;

        for (var i = 0; i < n; i++)
            images[i].style.padding = `${gap}px`;
        for (i = 1; i < n; i++) {
            images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
            images[i].style.transform = `rotateY(${i * theta}rad)`;
        }
        if (bfc)
            for (i = 0; i < n; i++)
                images[i].style.backfaceVisibility = 'hidden';

        rotateCarousel(currImage);
    }

    function setupNavigation() {
        nav.addEventListener('click', onClick, true);

        function onClick(e) {
            e.stopPropagation();

            var t = e.target;
            if (t.tagName.toUpperCase() != 'BUTTON')
                return;

            if (t.classList.contains('next')) {
                currImage++;
            } else {
                currImage--;
            }

            rotateCarousel(currImage);
        }

    }

    function rotateCarousel(imageIndex) {
        figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }

}



// menu hamburguesa


function w3_open() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
    document.getElementById("openClose").setAttribute('onclick', "w3_close()");
}

function w3_close() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "none";

    document.getElementById("openClose").setAttribute('onclick', "w3_open()")
}

//boton subir code

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});