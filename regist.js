const lastName = document.getElementById("lastName");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    fetch(
        "https://it-blog-posts.herokuapp.com/api/people",
        {
            method: "POST",
            body: JSON.stringify({
                lastName: `${lastName.value}`,
                userName: `${userName.value}`,
                email: `${email.value}`,
                password: `${password.value}`,
            }),
            headers: { "Content-Type": "application/json" }
        }
    )
    .then(res => res.json())
    .then((response) => {
        if(response.status == 200) {
          window.open('log-in.html'),
          window.close("log-in.html");
        }
        alert('Please check the fields below');
        })
        .catch(function (err) {
            console.log("Error: ", err)
        });

})

