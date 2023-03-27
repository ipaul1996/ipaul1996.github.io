
document.getElementById('icon2').addEventListener("click",()=> {
    window.open("https://github.com/ipaul1996", '_blank');
});

document.getElementById('icon3').addEventListener("click",()=> {
    window.open("https://www.linkedin.com/in/indrajitpaul1996/", '_blank');
});




document.getElementById('ab').addEventListener("click",()=> {
    window.scrollTo(0,575);

});

document.getElementById('home').addEventListener("click",()=> {
    window.scrollTo(0,0);

});

document.getElementById('sk').addEventListener("click",()=> {
    window.scrollTo(0,950);

});

document.getElementById('pr').addEventListener("click",()=> {
    window.scrollTo(0,2340);

});

document.getElementById('con').addEventListener("click",()=> {
    window.scrollTo(0,4620);

});

document.getElementById('re').addEventListener("click",()=> {
    window.open("./Indrajit_Paul_Resume.pdf", '_blank');

});




document.getElementById('e1').addEventListener("click", ()=> {
    window.open("https://cricbuzz-masai.netlify.app/", '_blank');
})

document.getElementById('e2').addEventListener("click", ()=> {
    window.open("https://stirring-lollipop-9b03d4.netlify.app/", '_blank');
});

document.getElementById('e3').addEventListener("click", ()=> {
    window.open("https://drive.google.com/drive/u/1/folders/1gw6dpaKmgrfAGEc_WKRjYC1P5wsKBeS8", '_blank');
});

document.getElementById('e4').addEventListener("click", ()=> {
    window.open("https://drive.google.com/drive/u/1/folders/1QqR1rD6cPO4HfrsfLiCDfRKnurkuqYFN", '_blank');
});


document.getElementById('g1').addEventListener("click", ()=> {
    window.open("https://github.com/ipaul1996/Cricbuzz_Clone", '_blank');
})

document.getElementById('g2').addEventListener("click", ()=> {
    window.open("https://github.com/ipaul1996/dotandkey-Clone", '_blank');
});

document.getElementById('g3').addEventListener("click", ()=> {
    window.open("https://github.com/ipaul1996/Artic-Tern-Trip-Management-RESTful-API", '_blank');
});

document.getElementById('g4').addEventListener("click", ()=> {
    window.open("https://github.com/ipaul1996/DigishopeX", '_blank');
});

const hamburger = document.querySelector(".hamburger");
const navMenu= document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


document.getElementById('h').addEventListener("click",()=> {
    window.scrollTo(0,0);

})

document.getElementById('a').addEventListener("click",()=> {
    window.scrollTo(0,1000);

})

document.getElementById('s').addEventListener("click",()=> {
    window.scrollTo(0,1390);

})

document.getElementById('p').addEventListener("click",()=> {
    window.scrollTo(0,2900);

})


document.getElementById('c').addEventListener("click",()=> {
    window.scrollTo(0,5600);

})



