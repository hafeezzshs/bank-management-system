const employees = [
  {id:"ID_1", username:"Hafeezz", password:"Abc@1234"},
  {id:"ID_2", username:"Ruchi", password:"Abc@1234"},
  {id:"ID_3", username:"Mohith", password:"Abc@1234"},
  {id:"ID_4", username:"Abishek", password:"Abc@1234"},
  {id:"ID_5", username:"Ritik", password:"Abc@1234"}

]

var username = document.getElementById('username')
var password = document.getElementById('password')

function loginclick(){
  const currentEmployee = employees.find(employee => {
    return employee.username === username.value 
  })

  if(!currentEmployee){
    alert("no such user")
    return
  }
  if(currentEmployee.password != password.value){
    alert("Incorrect Password")
    return
  }
  localStorage.setItem("CurrentUser",JSON.stringify(currentEmployee))
  window.location.href = "home.html"

}



