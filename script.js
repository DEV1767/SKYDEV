const ham =document.getElementById("ham")
const cros =document.getElementById("cros")
const navbar=document.getElementById("menue")
const onboard=document.getElementById("onboard")
const call=document.getElementById("call")
 ham.addEventListener("click",()=>{
   menue.style.display="flex"
 });
 cros.addEventListener("click",()=>{
    menue.style.display="none"
 })
  onboard.addEventListener("click",()=>{
    window.open("https://forms.gle/NcKTbs8kc9GHaTgY6","_blank")
  })
  call.addEventListener("click",()=>{
    window.open("https://calendly.com/shivamchy076/team-skydev","_blank")
  })
  const links = document.querySelectorAll('.navbar2 a');
   links.forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menue').style.display = 'none';
    document.body.style.overflow = '';
  });
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    } else {
     
      entry.target.classList.remove('animate-in');
    }
  });
}, {
  threshold: 0.3
});

const serviceCards = document.querySelectorAll('.web, .mob, .ai,.abo-left,.abo-right');
serviceCards.forEach(card => observer.observe(card));
const aboLeft = document.querySelector('.abo-left');
const aboRight = document.querySelector('.abo-right');

observer.observe(aboLeft);
observer.observe(aboRight);
const faqItems = document.querySelectorAll('.faq1, .faq2, .faq3, .faq4, .faq5');
faqItems.forEach(faq => {
  observer.observe(faq);
});
 
// PLUS 1
document.getElementById("plus1").onclick = () => {
  document.querySelector(".q1").style.display = "block";
  document.querySelector(".q2").style.display = "none";
  document.querySelector(".q3").style.display = "none";
  document.querySelector(".q4").style.display = "none";
  document.querySelector(".q5").style.display = "none";
};
document.getElementById("cut1").onclick = () => {
  document.querySelector(".q1").style.display = "none";
};

// PLUS 2
document.getElementById("plus2").onclick = () => {
  document.querySelector(".q1").style.display = "none";
  document.querySelector(".q2").style.display = "block";
  document.querySelector(".q3").style.display = "none";
  document.querySelector(".q4").style.display = "none";
  document.querySelector(".q5").style.display = "none";
};
document.getElementById("cut2").onclick = () => {
  document.querySelector(".q2").style.display = "none";
};

// PLUS 3
document.getElementById("plus3").onclick = () => {
  document.querySelector(".q1").style.display = "none";
  document.querySelector(".q2").style.display = "none";
  document.querySelector(".q3").style.display = "block";
  document.querySelector(".q4").style.display = "none";
}
document.getElementById("cut3").onclick = () => {
  document.querySelector(".q3").style.display = "none";
};
document.getElementById("plus4").onclick = () => {
  document.querySelector(".q1").style.display = "none";
  document.querySelector(".q2").style.display = "none";
  document.querySelector(".q3").style.display = "none";
  document.querySelector(".q4").style.display = "block";
  document.querySelector(".q5").style.display = "none";
};
document.getElementById("cut4").onclick = () => {
  document.querySelector(".q4").style.display = "none";
};

// PLUS 5
document.getElementById("plus5").onclick = () => {
  document.querySelector(".q1").style.display = "none";
  document.querySelector(".q2").style.display = "none";
  document.querySelector(".q3").style.display = "none";
  document.querySelector(".q4").style.display = "none";
  document.querySelector(".q5").style.display = "block";
};
document.getElementById("cut5").onclick = () => {
  document.querySelector(".q5").style.display = "none";
};
