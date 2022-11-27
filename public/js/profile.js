function updateAttempt(){
    var data = JSON.stringify({
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
        data : data
      };
      
      
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

}