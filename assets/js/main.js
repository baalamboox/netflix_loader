let count = 0;
const counter = document.querySelector('#counter');
setInterval(() => {
    counter.innerHTML = count + '%';
    if(count >= 100) {
        count = 0;
    }
    count++;
}, 500);
