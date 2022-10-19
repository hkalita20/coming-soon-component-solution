    function validate(){
    console.log("This is working"); 
    let email=document.querySelector("#email").value;
    let alert=document.querySelector(".alert");
    let error_log=document.querySelector(".error-icon");
    let returnval=true;
    let r=/\w+@\w+\.\w+/;
 
    if(email.length==0){
      alert.classList.remove("hide");
      error_log.classList.remove("hide");
      returnval=false;
    }

    if(r.test(email)==false){
      alert.classList.remove("hide");
      error_log.classList.remove("hide");
      returnval=false;
    }

    return returnval;
  }
