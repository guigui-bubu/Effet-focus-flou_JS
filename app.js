const allBoxes = Array.from(document.querySelectorAll('.box'));  // Array.from transform ma list en tableau

let currentIndex = 0;


allBoxes.forEach( box => {  // forEach pour chaque element du tableau

    box.addEventListener('mouseenter', e => {  

        console.log(e);
            const el = e.target;
            currentIndex = allBoxes.indexOf(el); // indexOf renvoie un element du tableau
           
            allBoxes.forEach((box, index)=>{
                if(index === currentIndex) return; 
                box.classList.add('flou'); // ajoute la classe flou
            })
        })

        box.addEventListener('mouseleave', ()=>{
            allBoxes.forEach((box, index)=>{
                if( index === currentIndex) return; 
                box.classList.remove('flou'); // supprime la classe flou
            })
        })
})