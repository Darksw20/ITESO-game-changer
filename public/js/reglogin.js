function loginAttempt() {
  const id = 1;
  const data = JSON.stringify({
    email: $("#email").val(),
    password: $("#password").val(),
  });
  console.log(data);
  const config = {
    method: "post",
    url: "http://localhost:3000/api/auth/",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      if (response.status != 200) {
        console.error("Error en la llamada");
        return;
      }
      if (!response.data) {
        console.error("Error: invalid credentials");
        return;
      }
      console.log(response.message);
      window.location.href = "http://localhost:3000/profile";
    })
    .catch(function (error) {
      console.log(error);
    });
}

function registerAttempt() {
  const data = JSON.stringify({
    email: $("#email").val(),
    password: $("#password").val(),
    name: $("#name").val(),
  });
  console.log(data);
  const config = {
    method: "post",
    url: "http://localhost:3000/api/auth",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  /*axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if(response.status != 200){
            console.error("Error en la llamada");
            return;
        }
        console.log(response.message);
       window.location.href="http://localhost:3000/login";
      })
      .catch(function (error) {
        console.log(error);
      });
      */
}
