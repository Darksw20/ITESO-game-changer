const updateAttempt= async() =>{
    var payload = JSON.stringify({
        "displayName": $("#displayName").val(),
        "location": $("#location").val(),
        "favoriteSport":$("#favoriteSport").val()
      });
      console.log(data);
      var config = {
        method: 'patch',
        url: `http://localhost:3000/api/user/${data.displayName}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : payload
      };
      try{
        const{status,data:{data}} = await axios(config)
          if(status!=200){
            console.error("Error en la llamada");
            return;
          }
      }catch(error){
        console.log(error);
      };

}