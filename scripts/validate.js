const btn = document.getElementById('formBtn')

// add hide effect to modal x button
document.getElementById('close').addEventListener('click', () => {
    document.getElementById('alertModal').style.display = 'none'
})

btn.addEventListener('click', () => {
    btn.innerText = 'Loading'
})
// add click function to form button
document.getElementsByTagName('form')[0].addEventListener('submit', function(event){
    event.preventDefault()
    let formData = {}
    
    let input = document.getElementsByTagName('input')[0]
    let warning = document.getElementById('warning')
    formData[document.getElementsByTagName('input')[0].name] = document.getElementsByTagName('input')[0].value
    
    // send post request without refreshing page
    axios({
        method: 'post',
        url: 'https://newsletterapi.glitch.me/subscribe',
        data: formData
    })
    .then(function (response) {
        // handle  response
        if(response.data['correctEmail']){
            // check if email is registered 
            if(response.data['isUse']){
                warning.style.display = 'block'
                warning.innerText = 'ემაილი გამოყენებულია'
                btn.innerText = 'Subscribe'
            } else{
                document.getElementById('alertModal').style.visibility = 'visible'
                btn.innerText = 'Subscribe'
            }
        } else{
            // tell user to avoid fake emails
            warning.style.display = 'block'
            warning.innerText = "ემაილი არ არსებობს"
            btn.innerText = 'Subscribe'
        }
    })
    .catch(function (error) {
        location.replace("fail.html")
    });
})