const currentTime = moment();
var currentHour = parseInt(currentTime.format('HH'));



//set current day and month
var currentDay = $('#currentDay');
currentDay.text(currentTime.format('dddd, MMMM Do'));

//add event listener to save buttons
var save = $('.saveBtn');
save.on('click', function(event){
    
    //checks indexes to ensure only right textarea data is saved
    for(var i = 0; i < 9; i++){
        var checkIndex = $(textBox).get(parseInt(event.target.dataset.index));
        console.log($(checkIndex));
        if(parseInt(event.target.dataset.index) === $(checkIndex).data('textindex') ){
            localStorage.setItem(event.target.dataset.index, $(checkIndex).val())
        }
    }
})

//add textarea to description boxes
    var textContainer = $('.description');
    textContainer.append('<textarea>'); 
    var textBox = $('textarea');

//add IDs to textareas created above
for(var i = 0; i < textBox.length; i++){
    $(textBox.get(i)).attr('data-textindex', `${i}`);
}

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

//load local storage
for( var i = 0; i < textBox.length; i++){
    $(textBox.get(i)).text(localStorage.getItem(i));
}


