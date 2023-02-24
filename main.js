window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  

    // Theme buttons
    var btnDark = document.getElementById("btnDark");
    var btnLight = document.getElementById("btnLight");

    // Body buttons
    var btnBodySmall = document.getElementById("btnBodySmall");
    var btnBodyMedium = document.getElementById("btnBodyMedium");
    var btnBodyLarge = document.getElementById("btnBodyLarge");

    // Font size buttons
    var btnFontSmall = document.getElementById("btnFontSmall");
    var btnFontMedium = document.getElementById("btnFontMedium");
    var btnFontLarge = document.getElementById("btnFontLarge");

    /**
     * Activar el color del theme
     * @param {String} theme 
     */
    function toggleTheme(theme){
        if(theme == 'light'){
            document.body.classList.remove('theme-dark')

            btnDark.classList.remove('active');
            btnLight.classList.add('active');
        } else if(theme == 'dark'){
            document.body.classList.add('theme-dark')

            btnDark.classList.add('active');
            btnLight.classList.remove('active');
        }
    }

    /**
     * Activar el tamaño de los elementos
     */
    function toggleBody(size){
        if(size == 'small'){
            document.body.classList.remove('body-large')
            document.body.classList.add('body-small')

            btnBodySmall.classList.add('active');
            btnBodyMedium.classList.remove('active');
            btnBodyLarge.classList.remove('active');

        }else if(size == 'large'){
            document.body.classList.remove('body-small')
            document.body.classList.add('body-large')

            btnBodySmall.classList.remove('active');
            btnBodyMedium.classList.remove('active');
            btnBodyLarge.classList.add('active');
        }else{
            document.body.classList.remove('body-small', 'body-large')

            btnBodySmall.classList.remove('active');
            btnBodyMedium.classList.add('active');
            btnBodyLarge.classList.remove('active');
        }
    }

    /**
     * Activar el tamaño de la fuente
     */
    function toggleFont(fontSize){
        if(fontSize == 'small'){
            document.body.classList.remove('font-large')
            document.body.classList.add('font-small')

            btnFontSmall.classList.add('active');
            btnFontMedium.classList.remove('active');
            btnFontLarge.classList.remove('active');
        }else if(fontSize == 'large'){
            document.body.classList.remove('font-small')
            document.body.classList.add('font-large')

            btnFontSmall.classList.remove('active');
            btnFontMedium.classList.remove('active');
            btnFontLarge.classList.add('active');
        } else{
            document.body.classList.remove('font-small', 'font-large')
            
            btnFontSmall.classList.remove('active');
            btnFontMedium.classList.add('active');
            btnFontLarge.classList.remove('active');
        }
    }

    btnDark.addEventListener('click', (event) => {
        toggleTheme('dark')
    });

    btnLight.addEventListener('click', (event) => {
        toggleTheme('light')
    });

    btnBodySmall.addEventListener('click', (event) => {
        toggleBody('small')
    });

    btnBodyMedium.addEventListener('click', (event) => {
        toggleBody('medium')
    });

    btnBodyLarge.addEventListener('click', (event) => {
        toggleBody('large')
    });

    btnFontSmall.addEventListener('click', (event) => {
        toggleFont('small')
    });

    btnFontMedium.addEventListener('click', (event) => {
        toggleFont('medium')
    });

    btnFontLarge.addEventListener('click', (event) => {
        toggleFont('large')
    });

});