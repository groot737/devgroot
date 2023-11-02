const btn = document.getElementById('formBtn')
btn.addEventListener('click', () => {
    btn.innerText = 'Loading'
})

// add hide effect to modal x button
document.getElementById("close").addEventListener("click", () => {
    document.getElementById("alertModal").style.visibility = "hidden";
});

// add click function to form button
document
    .getElementsByTagName("form")[0]
    .addEventListener("submit", function (event) {
        event.preventDefault();
        let formData = {};

        let input = document.getElementsByTagName("input")[0];
        let warning = document.getElementById("warning");
        formData[document.getElementsByTagName("input")[0].name] =
            document.getElementsByTagName("input")[0].value;

        // send post request without refreshing page
        axios({
            method: "post",
            url: "https://newsletterapi.glitch.me/unsubscribe",
            data: formData,
        }).then(function (response) {
            if (response["data"]["isExist"]) {
                document.getElementById("alertModal").style.visibility = "visible";
                btn.innerText = 'Subscribe'
            } else {
                warning.style.display = "block";
                warning.innerText = "email is not in the subscribers list";
                btn.innerText = 'Subscribe'
            }
        })
        .catch(function (error) {
            location.replace("fail.html")
        });
    });