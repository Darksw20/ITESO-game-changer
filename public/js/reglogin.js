function loginAttempt()  {
    
    const data = JSON.stringify({
        "email": $("#email").val(),
        "password": $("#password").val()
      });
      console.log(data);
      const config = {
        method: 'post',
        url: 'http://localhost:3000/api/auth',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if(response.status != 200){
            console.error("Error en la llamada");
            return;
        }
        console.log(response.message);
      })
      .catch(function (error) {
        console.log(error);
      });
}


