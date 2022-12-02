var largeurFenetre = window.innerWidth;

if (window.innerWidth < 801) {
    var mobileInterdit = document.getElementById('mobileInterdit');
    mobileInterdit.style.display = "block";
}



// Division Riedeaux début
    let acceuilVideoDebut = document.getElementById('acceuilVideo1');
    let acceuilVideoFin = document.getElementById('acceuilVideo2');

    window.addEventListener('scroll', function(){
        acceuilVideoDebut.style.left = -window.pageYOffset+'px';
        acceuilVideoFin.style.left = window.pageYOffset+'px';
    })

// Faire disparaitre boutonscroll au scroll
    var onlyOne = 0;
    window.addEventListener('scroll', function(){
        var rigolade = document.getElementById('accueil2');
        if (onlyOne == 0) {
            var a = document.getElementById('demo');
                a.className += ' hidden'; 
                onlyOne = 1       
        }
        if ( window.scrollY == 0) {
            rigolade.style.display="block";  
        }
        if (window.scrollY > 0) {   
            rigolade.style.display="none";
        }
    })

// Apparation du texte d'accueil
    setTimeout(apparitionTexte, 2000);
    function apparitionTexte(){        
            var d = document.getElementById('accueil0');
            d.classList.add("vignetsApparition"); 
    }
    setTimeout(dispartionTexte, 7000);
    function dispartionTexte(){        
            var d = document.getElementById('accueil0');
            d.classList.add("vignetsDisparition"); 
    }
    setTimeout(apparitionTexte1, 10000);
    function apparitionTexte1(){        
            var d = document.getElementById('accueil1');
            d.classList.add("vignetsApparition"); 
    }
    setTimeout(dispartionTexte1, 14000);
    function dispartionTexte1(){        
            var d = document.getElementById('accueil1');
            d.classList.add("vignetsDisparition"); 
    }
    // Apparation scrollbar => 15000
    setTimeout(scrollActive, 1);
    function scrollActive(){  
            var a = document.getElementById('demo');
            a.className += ' show';       
            document.getElementsByTagName('body')[0].style.overflowY = "scroll";
    }

 // Fonction scroll auto
 
    function scrollAuto() {
        var scroll = document.getElementById('demo');


    }


// Détection écran
    var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    };

    var findMe = document.querySelector('#annonce');
    var one = 0; 

    window.addEventListener('scroll', function (event) {        
    if (one == 0 ) { 
        if (isInViewport(findMe)) {	
            one = 1;
            const txtAnim2 = document.getElementById('annonce_texte1');
            new Typewriter(txtAnim2, {
                loop: false,
                cursor: '',            
            })
            .pauseFor (0)
            .changeDelay (100)
            .typeString('vous invite à leur mariage le')
            .start ()

            const txtAnim3 = document.getElementById('annonce_texte2');
            new Typewriter(txtAnim3, {
                loop: false,
                cursor: '',            
            })
            .pauseFor (4000)
            .changeDelay (100)
            .typeString('10 Juin 2023')
            .start ()

            const txtAnim4 = document.getElementById('annonce_texte3');
            new Typewriter(txtAnim4, {
                loop: false,
                cursor: '',            
            })
            .pauseFor (6000)
            .changeDelay (30)
            .typeString('à 16 heures à la mairie de Varambon <br> ')
            .pauseFor (2000)
            .typeString ('à 17 heures cérémonie laïque à la salle de Druillat <br>')
            .pauseFor (2000)
            .typeString ('à l\'issue de cette cérémonie, nous aurons le plaisir de vous retrouver pour l\'apéro.... ')
            .start ()
        } 
    }
    }, false);


// Rideaux Fin

    // Détection fenetre et positionnement du rideaux
    var dom = document.getElementById('HTML');
    var HauteurDom =  dom.offsetHeight;  
    var hauteurFenetre = window.innerHeight;    
    // Division Riedeaux début
    let acceuilVideo1 = document.getElementById('acceuilVideoFinGauche');
    let acceuilVideo2 = document.getElementById('acceuilVideoFinDroite');        
    window.addEventListener('scroll', function(){
        acceuilVideo1.style.left = (hauteurFenetre - HauteurDom) + window.pageYOffset + 'px';
        acceuilVideo2.style.left = -(hauteurFenetre - HauteurDom) -window.pageYOffset+'px';
    })


    

// Apparition texte de fin
window.addEventListener('scroll', function(){
        if ( (HauteurDom - hauteurFenetre) == Math.trunc(window.scrollY) || (HauteurDom - hauteurFenetre) == Math.trunc(window.scrollY) - 1 || (HauteurDom - hauteurFenetre) == Math.trunc(window.scrollY) + 1 ) {  

        var texte1Fin = document.getElementById("texteRideauxFin1");
        var texte2Fin = document.getElementById("texteRideauxFin2");
        var texte3Fin = document.getElementById("texteRideauxFin3");
        var texte4Fin = document.getElementById("texteRideauxFin4");
        texte1Fin.style.display = "block";                
        texte2Fin.style.display = "block";                
        texte3Fin.style.display = "block";               
        texte4Fin.style.display = "block"; 
                    
            // Apparation du texte 1 Fin
            setTimeout(() => {
                // document.getElementsByTagName('body')[0].style.overflowY = "hidden";
                texte1Fin.classList.add("vignetApparitionFin1"); 
            },1);
            setTimeout(() => {                    
                texte1Fin.classList.add("vignetDisparitionFin1"); 
            },3000);

            // Apparation du texte 2 Fin
            setTimeout(() => {              
                texte2Fin.classList.add("vignetApparitionFin2"); 
            },6000);
            setTimeout(() => {                
                texte2Fin.classList.add("vignetDisparitionFin2"); 
            },9000);

            // Apparation du texte 3 Fin
            setTimeout(() => {          
                texte3Fin.classList.add("vignetApparitionFin3"); 
            },12000);
            setTimeout(() => {        
                texte3Fin.classList.add("vignetDisparitionFin3"); 
            },15000);

            // Apparation du texte 4 Fin
            setTimeout(() => {                 
                texte4Fin.classList.add("vignetApparitionFin4"); 
            },18000);
            setTimeout(() => {            
                texte4Fin.classList.add("vignetDisparitionFin4"); 
            },21000);

            setTimeout(() => {
                texte1Fin.classList.remove("vignetApparitionFin1"); 
                texte1Fin.classList.remove("vignetDisparitionFin1");
                texte2Fin.classList.remove("vignetApparitionFin2");
                texte2Fin.classList.remove("vignetDisparitionFin2");
                texte3Fin.classList.remove("vignetApparitionFin3");
                texte3Fin.classList.remove("vignetDisparitionFin3");
                texte4Fin.classList.remove("vignetApparitionFin4");
                texte4Fin.classList.remove("vignetDisparitionFin4");
                document.getElementsByTagName('body')[0].style.overflowY = "scroll";
            },23000);                
    } 
})