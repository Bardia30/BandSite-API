let bandSiteURL= 'https://project-1-api.herokuapp.com'
let apiKey;

axios.get(bandSiteURL+'/register')
    .then(response => {
        apiKey = response.data.api_key;
        console.log(apiKey);

        axios.get(bandSiteURL+'/comments'+'?api_key='+apiKey)
        .then(res => {
            console.log(res.data[0])
        })
        .catch(err =>{
            console.log(err)
        })

    })
    .catch(err=>{
        console.log(err)
    })
    
    










