//your JS code here. If required.
const form=document.querySelector("form");
const button =document.getElementById("btn");
const age=document.getElementById("age");
const name=document.getElementById("name");
  form.addEventListener("submit",(e)=>{
	   e.preventDefault();
	  if(age.value=="" || name.value==""){
		  alert("Please enter valid details") 
		  return
	  }
      const promise=new Promise((resolve,reject)=>{
		  if(parseInt(age.value)>18){
			 setTimeout(()=>resolve(`Welcome, ${name.value}. You can vote.`),4000);
		  }else{
             setTimeout(()=>reject(`Oh sorry ${name.value}. You aren't old enough.`),4000);
		  }
	  }).then((data)=>alert(data)).catch((err)=>alert(err));
	  
  })