const unreadMsgsCounter = document.querySelector(".counter")
unreadMsgsCounter.innerHTML = 3;

const cleanNotifications = document.querySelector(".cleanNotifications");

const unreadMsgs = document.querySelectorAll(".unread");
const unreadMsgsMarker = document.querySelectorAll(".unreadMarker");

cleanNotifications.onclick = function(){
    unreadMsgsCounter.innerHTML = 0;
    unreadMsgs.forEach(element => { 
        element.classList.remove("unread");
    });

    unreadMsgsMarker.forEach(element => {
        element.remove();
    });

}