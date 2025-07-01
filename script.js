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
