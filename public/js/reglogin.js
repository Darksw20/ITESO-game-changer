const  loginAttempt = async ()  =>  {
    const payload = JSON.stringify({
        "email": $("#email").val(),
        "password": $("#password").val()
      });
      const config = {
        method: 'post',
        url: "http://localhost:3000/api/auth/", /* `http://localhost:3000/api/auth/${id}`,*/
        headers: { 
          'Content-Type': 'application/json'
        },
        data : payload
      };
      try {
      const {status,data:{data}} = await axios(config)
        if(status != 200){
            console.error("Error en la llamada");
            return;
        }
        if(!data){
          alert("El usuario no se autentico correctamente") 
          return;
        }
        window.location.href="http://localhost:3000/profile";
      } catch(error) {
        console.log(error);
      };
}

const registerAttempt= async() =>{
  const payload = JSON.stringify({
    "email": $("#email").val(),
    "password": $("#password").val(),
    "name":$("#name").val()
  });
  const config = {
    method: 'post',
    url: 'http://localhost:3000/api/user',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : payload
  };
  try{
    const {status,data:{data}} = await axios(config)
      if(status!=200){
        console.error("Error en la llamada");
        return;
      }
      
  }catch(error){
    console.log(error);
  };
 
}


