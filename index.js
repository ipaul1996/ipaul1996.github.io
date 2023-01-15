
document.getElementById('icon2').addEventListener("click",()=> {
    window.location.href = "https://github.com/ipaul1996";
});

document.getElementById('icon3').addEventListener("click",()=> {
    window.location.href = "https://www.linkedin.com/in/indrajitpaul1996/";
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
    window.location.href = "https://cricbuzz-masai.netlify.app/";
})

document.getElementById('e2').addEventListener("click", ()=> {
    window.location.href = "https://stirring-lollipop-9b03d4.netlify.app/";
});

document.getElementById('e3').addEventListener("click", ()=> {
    window.location.href = "";
});

document.getElementById('e4').addEventListener("click", ()=> {
    window.location.href = "";
});


document.getElementById('g1').addEventListener("click", ()=> {
    window.location.href = "https://github.com/ipaul1996/polite-mice-5556";
})

document.getElementById('g2').addEventListener("click", ()=> {
    window.location.href = "https://github.com/ipaul1996/WEB-19_Team_Dominator";
});

document.getElementById('g3').addEventListener("click", ()=> {
    window.location.href = "https://github.com/ipaul1996/Artic-Tern-Trip-Management-RESTful-API";
});

document.getElementById('g4').addEventListener("click", ()=> {
    window.location.href = "https://github.com/ipaul1996/DigishopeX";
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
    window.scrollTo(0,800);

})

document.getElementById('s').addEventListener("click",()=> {
    window.scrollTo(0,1400);

})

document.getElementById('p').addEventListener("click",()=> {
    window.scrollTo(0,2900);

})


document.getElementById('c').addEventListener("click",()=> {
    window.scrollTo(0,5000);

})



