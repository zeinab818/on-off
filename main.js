let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');

window.onload = function() {
    if (window.navigator.onLine) {
        onLine()
    } else {
        offLine()
    }
}

window.addEventListener("online", function() {
    console.log("Online event detected");
    onLine();
});

window.addEventListener("offline", function() {
    console.log("Offline event detected");
    offLine();
});

reload.onclick = function() {
    window.location.reload();
}

function onLine() {
    title.innerHTML = `online now`;
    title.style.color = 'green';
    title.style.fontSize = '70px';
    ul.classList.add('hide');
    reload.classList.add('hide');
}

function offLine() {
    console.log("Offline function triggered");
    title.innerHTML = `offline now`;
    title.style.color = 'black';
    ul.classList.remove('hide');
    reload.classList.remove('hide');
}
