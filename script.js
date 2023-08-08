async function getData(){
  const records = await fetch(`https://dummyjson.com/users`)
   records.json().then(res => {
 
  let tab = '';
   res.users.forEach(function(user){
          tab += `<tr>
             <td>${user.firstName}</td>
             <td>${user.lastName}</td>
             <td>${user.age}</td>
             <td>${user.email}</td>
             <td>${user.gender}</td>
         </tr>
      `
     
   document.getElementById('tbody').innerHTML = tab;
   
 })

}).catch((err) =>{
  console.log(err)
})
  
}