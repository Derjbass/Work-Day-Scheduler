const currentTime = moment();
var currentHour = parseInt(currentTime.format('HH'));
console.log(currentHour);
console.log(typeof currentHour);

//set current day and month
var currentDay = $('#currentDay');
currentDay.text(currentTime.format('dddd, MMMM Do'));

//add event listener to save buttons
var save = $('.saveBtn');
save.on('click', function(event){
    console.log('Save Button Clicked');
    console.log(event.target.dataset.index);
    console.log(typeof event.target.dataset.index);
    console.log($(textBox).get(parseInt(event.target.dataset.index)));
    console.log(typeof $(textBox).get(parseInt(event.target.dataset.index)));

    //checks indexes to ensure only right textarea data is saved
    for(var i = 0; i < 8; i++){
        if(parseInt(event.target.dataset.index) === $(textBox).get(parseInt(event.target.dataset.index)) ){
            localStorage.setItem(event.target.dataset.index, $(textBox).get(parseInt(event.target.dataset.index)).text())
            console.log(localStorage.getItem(event.target.dataset.index));
        }
    }
})

//add textarea to description boxes
var textContainer = $('.description');
console.log(textContainer);
textContainer.append('<textarea>'); 
var textBox = $('textarea');
console.log(textBox.get(0));
console.log(typeof textBox);

//check if currentHour is past, preset, or future and change background
var hourCheck = $('.hour'); 

for(var i = 0; i < hourCheck.length;i++){
    //var changeBackground = textBox.get(i);
    if(parseInt(hourCheck[i].dataset.hour) < currentHour){
        $(textBox.get(i)).attr('class', 'past');
    }else if (parseInt(hourCheck[i].dataset.hour) === currentHour){
        $(textBox.get(i)).attr('class', 'present');
    }else {
        $(textBox.get(i)).attr('class', 'future');
    }
}


