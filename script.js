const email=document.getElementById("email");
const password=document.getElementById("password");
const loginBtn=document.getElementById("loginBtn");
const message=document.getElementById("message");
const toggle=document.getElementById("togglePassword");
const bar=document.getElementById("strengthBar");
const remember=document.getElementById("remember");

// Remember Me

if(localStorage.getItem("email")){
email.value=localStorage.getItem("email");
remember.checked=true;
}

// Show Password

toggle.onclick=()=>{

if(password.type==="password"){
password.type="text";
toggle.classList.replace("fa-eye","fa-eye-slash");
}
else{
password.type="password";
toggle.classList.replace("fa-eye-slash","fa-eye");
}

}

// Password Strength

password.addEventListener("input",()=>{

let val=password.value.length;

if(val<4){
bar.style.width="30%";
bar.style.background="red";
}
else if(val<8){
bar.style.width="60%";
bar.style.background="orange";
}
else{
bar.style.width="100%";
bar.style.background="lime";
}

});

// Login

loginBtn.onclick=()=>{

const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!pattern.test(email.value)){
message.innerHTML="Invalid Email";
message.style.color="red";
document.querySelector(".login-box").classList.add("shake");
setTimeout(()=>{
document.querySelector(".login-box").classList.remove("shake");
},500);
return;
}

if(password.value.length<8){
message.innerHTML="Password must be at least 8 characters";
message.style.color="red";
return;
}

if(remember.checked){
localStorage.setItem("email",email.value);
}else{
localStorage.removeItem("email");
}

loginBtn.innerHTML="<i class='fa-solid fa-spinner fa-spin'></i> Logging In...";

setTimeout(()=>{

loginBtn.innerHTML="✔ Logged In";
loginBtn.style.background="green";

message.innerHTML="Welcome "+email.value.split("@")[0]+" 🎉";
message.style.color="#7CFC00";

document.querySelector(".login-box").classList.add("success");

},2000);

}

// Enter Key

document.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){
loginBtn.click();
}

});