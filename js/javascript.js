let editProfile = document.querySelector('#edit-profile');

editProfile.addEventListener('click', changeProfileName)

function changeProfileName(event){
    let profileUser=document.querySelector('#profile-user');
    profileUser.innerText="Nikola Tesla";
}

let acceptRequestButtons = document.querySelectorAll('.accept-btn');
let userContainer = document.querySelectorAll('.user-container')
for(let i=0;i<acceptRequestButtons.length;i++){
    acceptRequestButtons[i].addEventListener('click',function(event){
        let connectionRequestCounter=document.querySelector("#connection-request-counter");
        connectionRequestCounterValue=parseInt(connectionRequestCounter.innerText);
        connectionRequestCounter.innerText=--connectionRequestCounterValue;
        let connectionsCounter=document.querySelector('#connections-counter');
        connectionsCounterValue=parseInt(connectionsCounter.innerText);
        connectionsCounter.innerText=++connectionsCounterValue;
        userContainer[i].remove();
    });

}
let removeRequestButtons = document.querySelectorAll('.remove-btn');
for(let i=0;i<removeRequestButtons.length;i++){
    removeRequestButtons[i].addEventListener('click',function(event){
        let connectionRequestCounter=document.querySelector("#connection-request-counter");
        connectionRequestCounterValue=parseInt(connectionRequestCounter.innerText);
        connectionRequestCounter.innerText=--connectionRequestCounterValue;
        userContainer[i].remove();
    })
}