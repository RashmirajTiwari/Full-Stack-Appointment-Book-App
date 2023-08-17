var list = document.getElementById('items');
function getAllUsers(){
    window.addEventListener("DOMContentLoaded", async () => {
        try {
            let res = await axios.get("http://localhost:3000/getUsers")
    
            for (let i = 0; i < res.data.length; i++) {
                list.innerHTML += 
                `<li>
                <span class="span" style="display:none">${res.data[i].id}</span>
                <span class="span" >${res.data[i].name}</span>
                <span class="span" >${res.data[i].email}</span>
                <span class="span" >${res.data[i].phone}</span>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
                </li>`

               
    
            }
         
        } catch (error) {
            console.log(error)
    
        }
      
    
    })
}



//Add Users
var submit = document.getElementById("submitBtn");
submit.addEventListener("click", async (e) => {
  
    try {
        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var phone = document.getElementById('phone');
        let user= {
            name:name.value,
            email:email.value,
            phone:phone.value

        }
       
     const res=  await axios.post("http://localhost:3000/postUser",user);
        list.innerHTML += 
        `<li>
        <span class="span" style="display:none">${res.data.id}</span>
        <span class="span" >${res.data.name}</span>
        <span class="span" >${res.data.email}</span>
        <span class="span">${res.data.phone}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
        </li>`

        name.value= "";
        email.value = "";
        phone .value= "";
        
    } catch (error) {
        console.log(error)

    }

})

//Delete Users
list.addEventListener('click', async (e) => {
    try {
        if (e.target.classList.contains("delete-btn")) {
            if (confirm("Are You Sure ?")) {
                const li = e.target.parentElement;
                const id = li.firstElementChild.innerText
                list.removeChild(li);
                await axios.delete(`http://localhost:3000/deleteUser/${id}`);
              

            }
        }  if (list.children.length == 0) {
            list.innerHTML += "<h1 class='list_heading'>No Appointment Booked !! </h1>"
        }
        

    } catch (err) {
        console.log(err)

    }
   
})
getAllUsers();

