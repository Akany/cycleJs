import xs from 'xstream';

const items = ['Eat', 'Rave', 'Sleep', 'Repeat'];

const producer = {
    start: function(observer) {
        observer.next(shuffle(items));
        setInterval(function() {
            observer.next(shuffle(items));
        }, 2000);
    },

    stop: function() {}
}

function shuffle(items) {
    const shuffled = [];
    const clonned = [].concat(items);

    while(clonned.length) {
        shuffled.push(clonned.splice(random(clonned.length), 1).pop());
    }

    return shuffled;
}

function random(end) {
    return Math.round(Math.random() * Math.pow(10, Math.round(end / 10) + 1)) % end;
}

export default function() {
    return xs.create(producer);
}
