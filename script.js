// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then( function(json) {
            json.sort(function(a, b) {
                return b.hoursInSpace - a.hoursInSpace;
            });
            const container = document.getElementById("container");
            for (let i=0; i < json.length; i++) {container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours In Space: ${json[i].hoursInSpace}</li>
                            <li class="active">Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(', ')}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${json[i].picture}>
                </div>
                `;
            };
            container.innerHTML += `<p><strong>Number of Astronauts: ${json.length}</strong></p>`;
            let activeColor = document.getElementsByClassName("active");
            for (let i=0; i < activeColor.length; i++) {
                if (json[i].active) {
                activeColor[i].style.color = 'green';
                };
            };
        });
    });
});