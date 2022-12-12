var largeurFenetre = window.innerWidth;

if (window.innerWidth < 801) {
    var mobileInterdit = document.getElementById('mobileInterdit');
    mobileInterdit.style.display = "block";
}

if (window.innerWidth >= 801) {
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
    
    var compteurRideauxDebut = 0;

// Apparation du texte d'accueil
    time1 = 2000;
    compteurRideauxDebut = compteurRideauxDebut + time1;
    setTimeout(apparitionTexte, time1);
    function apparitionTexte(){        
            var d = document.getElementById('accueil0');
            d.classList.add("vignetsApparition"); 
    }
    time2 = 7000;
    compteurRideauxDebut = compteurRideauxDebut + time2;
    setTimeout(dispartionTexte, time2);
    function dispartionTexte(){        
            var d = document.getElementById('accueil0');
            d.classList.add("vignetsDisparition"); 
    }
    time3 = 10000;
    compteurRideauxDebut = compteurRideauxDebut + time3;
    setTimeout(apparitionTexte1, time3);
    function apparitionTexte1(){        
            var d = document.getElementById('accueil1');
            d.classList.add("vignetsApparition"); 
    }
    time4 = 14000;
    compteurRideauxDebut = compteurRideauxDebut + time4;
    setTimeout(dispartionTexte1, time4);
    function dispartionTexte1(){        
            var d = document.getElementById('accueil1');
            d.classList.add("vignetsDisparition"); 
    }
    // Apparation scrollbar & bouton scrool=> 15000
    // setTimeout(scrollActive, 1);
    // function scrollActive(){  
    //         var a = document.getElementById('demo');
    //         a.className += ' show';       
    //         document.getElementsByTagName('body')[0].style.overflowY = "scroll";
    // }


    // Scroll Annonce
    setTimeout(defilementAnnonce, 17000);
    function defilementAnnonce(){
        $('html, body').animate({
            scrollTop: $("#annonce").offset().top
        }, 5000);
        const txtAnim2 = document.getElementById('annonce_texte1');
        new Typewriter(txtAnim2, {
            loop: false,
            cursor: '',            
        })
        .pauseFor (5000)
        .changeDelay (100)
        .typeString('vous invite à leur mariage le')
        .start ()

        const txtAnim3 = document.getElementById('annonce_texte2');
        new Typewriter(txtAnim3, {
            loop: false,
            cursor: '',            
        })
        .pauseFor (9000)
        .changeDelay (100)
        .typeString('10 Juin 2023')
        .start ()

        const txtAnim4 = document.getElementById('annonce_texte3');
        new Typewriter(txtAnim4, {
            loop: false,
            cursor: '',            
        })
        .pauseFor (11000)
        .changeDelay (30)
        .typeString('à 16 heures à la mairie de Varambon <br> ')
        .pauseFor (2000)
        .typeString ('à 17 heures cérémonie laïque à la salle de Druillat <br>')
        .pauseFor (2000)
        .typeString ('à l\'issue de cette cérémonie, nous aurons le plaisir de vous retrouver pour l\'apéro.... ')
        .start ()
    }
    
        // Scroll Programme
        setTimeout(defilementProgramme, 45000);
        function defilementProgramme(){
            $('html, body').animate({
                scrollTop: $("#programme").offset().top
            }, 5000);

             setTimeout(apparitionPhotosProgramme, 10000);
             function apparitionPhotosProgramme() {
                console.log("Je passe LA");
                var photoOpacity = document.getElementsByClassName("photos");
    
                for (let i = 0; i < photoOpacity.length; i++) {
                    console.log("Je passe LA LA LA");
                    photoOpacity[i].classList.add("modif-opacityTemps");                
                    photoOpacity[i].classList.add("modif-opacity");                
                }
             }      
        }


        // Scroll Gallery
        setTimeout(defilementGallery, 65000);
        function defilementGallery(){
            $('html, body').animate({
                scrollTop: $("#gallery").offset().top
            }, 5000);
        }

         // Scroll Gallery Fin
        setTimeout(defilementFinGallery, 65000);
        function defilementFinGallery(){
            $('html, body').animate({
                scrollTop: $("#finGallery").offset().top
            }, 40000);
        }
         // Scroll Rideaux Fin
        setTimeout(defilementRideauxFin, 105000);
        function defilementRideauxFin(){
            $('html, body').animate({
                scrollTop: $("#rideauxFin").offset().top
            }, 5000);
        }
        


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
var onlyOneFin = 0;
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
                if(onlyOneFin == 0) {
                    // document.getElementsByTagName('body')[0].style.overflowY = "hidden";
                }
                texte1Fin.classList.add("vignetApparitionFin1"); 
                onlyOneFin = 1;
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

}