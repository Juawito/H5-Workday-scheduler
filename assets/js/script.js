let currentTimeEl = $('#currentDay');
let saveBtn = $('.saveBtn');
let textarea = $('textarea');
let currentHour = moment().hours();
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentTimeEl.text(rightNow);
    if (currentHour === 20){
        localStorage.clear();
        // window.location.reload();
    }
  }
setInterval(displayTime, 1000);
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

saveBtn.on('click', function (){
    let userTime = $(this).parent().siblings('textarea').attr('id');
    let userText = $(this).parent().siblings('textarea').val();
    localStorage.setItem(userTime,userText);
    console.log(userTime);
    console.log(userText);
})
for (let i = 9; i < 20; i++){
    $('#' + i).val(localStorage.getItem(i));
}
