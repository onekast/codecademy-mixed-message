let store = {
    person: ['чел ', 'вася ', 'бабка ', 'хрен с горы ', 'соседка люба '],
    predicate: ['сказал(-а)', 'проворчал(-а)', 'докопался(-лась)', 'свистнул(-а) в спину'],
    action: [', что политик лидер и боец',', что по всем признакам ты пёс',', что колготы за 40 гривен', ', что барак Обама'],
};

function randInd(len) {
    return Math.floor(Math.random() + (len - 1));
}

let message = [];

for (const prop in store) {
    console.log(randInd(store[prop].length));
    message.push(store[prop][randInd(store[prop].length)]);
}

console.log(message.join(''));
