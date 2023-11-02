let image = document.getElementsByTagName('img')[1]
let title = document.getElementsByTagName('p')[1]
image.style.display = 'none'
title.style.display = 'none'
const url = window.location.href;

axios.post('https://newsletterapi.glitch.me/activate', { url })
  .then(function (response) {
    title.style.display = 'block'
    image.style.display = 'block'
    // Handle the successful response
    if(response.data["userStatus"]){
        title.innerText = 'გილოცავ! შენ წარმატებით გაიარე აქტივაცია 🎉'
    } else{
        location.replace("unsubscribed.html")
    }
  })
  .catch(function (error) {
    location.replace("fail.html")
  });
