var order = prompt('do you want to see spongebob or patrick?');

while (order !== 'spongebob' && order !== 'patrick'){
    order = prompt('you have to choose spongebob or patrick?');
}

var itemOrder = '';

if (order === 'spongebob') {
    itemOrder = '<img src="https://i.pinimg.com/originals/c3/3a/dc/c33adc5a78ae5173770bc453424564d4.gif"/>';
} else if (order === 'patrick') {
    itemOrder = '<img src="https://media0.giphy.com/media/1dIo6kDOPMzsnMOJTj/200.gif"/>';
}

var noCups = prompt('how many photos you wanna see?');

var result = '';

for (var i = 0; i < noCups; i++) {
    result = result + itemOrder;
}

document.write(result);
