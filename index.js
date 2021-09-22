let usersData = [];

const adduserData = (e) => {
  e.preventDefault();

  let step1Data = {
  
    phoneNo: document.getElementById("mobilePhone").value,
    validationCode: document.getElementById("validationCode").value,
    password: document.getElementById("password").value,
 
  };



 
 
  localStorage.setItem("step1Data", JSON.stringify(step1Data));
  

  
};

const adduserFinalData = (e) => {
  e.preventDefault();


  var step1Data = JSON.parse(localStorage.getItem('step1Data'));


  let step2Data = {
  
 
  userRole: "APPLICANT",
  firstLanguage:"DE",
  firstName: document.getElementById("firstName").value,
  lastName: document.getElementById("lastName").value,
  email: document.getElementById("email").value,
  jobCountry: document.getElementById("jobCountry").value,
  jobCity: document.getElementById("jobCity").value,
};

let userData = {
  ...step1Data,
  ...step2Data
};

usersData.push(userData);
// document.usersData[0].reset();
document.querySelector('form').reset();
console.log({ usersData });

localStorage.setItem("MyDataList", JSON.stringify(usersData));

}

window.onload = function(){
  var el = document.getElementById("submit");
  el.addEventListener("click", function (){document.location.href = "/index2.html"}, false);
  el.addEventListener("click",adduserData, false);
}

document.getElementById('finalSubmit').addEventListener('click', adduserFinalData)