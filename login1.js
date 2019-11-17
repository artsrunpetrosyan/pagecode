const email = document.getElementById("email");
const password = document.getElementById("password"); 
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    fetch(
        "https://it-blog-posts.herokuapp.com/api/people/login",
        {
            method: "POST",
            body: JSON.stringify({
                email: `${email.value}`,
                password: `${password.value}`,
            }),
            headers: { "Content-Type": "application/json" }
        }
    )
    .then(res => res.json())
        .then(data => {
             getFetch(data.id);
        })
        .catch(function (err) {
            console.log("Error: ", err)
        });

}
)
const url ="https://it-blog-posts.herokuapp.com/api/meetups/?access_token=";
getFetch =(token) => {
    fetch (
        `${url}${token}`
    )
    .then((response) => {
        if(response.status == 200) {
          window.open('workspace.html','_self'),
          window.close("log-in.html");
        }else{
            alert('Nope! Try again.');
        }});
}

$("#password") && $("#email") && $("lastName").keypress(function(event) { 
    if (event.keyCode === 13) { 
        $("#btn").click(); 
    } 
}); 



