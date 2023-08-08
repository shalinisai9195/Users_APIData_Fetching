async function getData(){
  const records = await fetch(`https://dummyjson.com/users`)
  const data = records.json().then(res => {
   //console.log(res)
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
     // console.log(tab)
   document.getElementById('tbody').innerHTML = tab;
   
 })

}).catch((err) =>{
  console.log(err)
})
  
$('#userTable').DataTable({
   "data": res.users,
   "cloumns":[
    {'data' : 'firstName'},
    {'data' : 'lastName'},
    {'data' : 'age'},
    {'data' : 'email'},
    {'data' : 'gender'}

   ]
})

}