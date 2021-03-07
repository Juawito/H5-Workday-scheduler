let currentTimeEl = $('#currentDay');
let saveBtn = $('.saveBtn');
let textarea = $('textarea');
let currentHour = moment().hours();
//function to display the time in the header 
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentTimeEl.text(rightNow);
    if (currentHour === 20){
        localStorage.clear();
        // window.location.reload();
    }
  }
setInterval(displayTime, 1000);
// for loop that will compare the current moment in hours to the id assigned to the textareas id and assign classes to them to change the colors
textarea.each(function (){
    let calendarHour = parseInt($(this).attr('id'));
    if (calendarHour === currentHour){
        $(this).addClass('present');
    }
    else if(calendarHour < currentHour){
        $(this).addClass('past')
    }
    else {
        $(this).addClass('future');
    }
})
//function that will store the input to local storage
saveBtn.on('click', function (){
    let userTime = $(this).parent().siblings('textarea').attr('id');
    let userText = $(this).parent().siblings('textarea').val();
    localStorage.setItem(userTime,userText);
})
//Gets all of the saved content from local storage and appeneds it to the right id using a for loop
for (let i = 9; i < 20; i++){
    $('#' + i).val(localStorage.getItem(i));
}

