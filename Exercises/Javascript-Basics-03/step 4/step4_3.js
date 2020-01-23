let x=document.getElementById("password").value
let y=document.getElementById("confirmation").value;
function confirm(){
  if(x==y){
    alert("sucsess");
  }
  else{
    function border(){
      let z=document.getElementById(lable);
      z.style.border="red" ;
    }
  }
}
