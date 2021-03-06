# H5-Workday-scheduler

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Solving the Task
```md 
The following applcation uses Bootstrap, JQuery, and Moment.js to accomplish the functionality and look.  
In the Html you will find 11 rows that contain a button and a textarea.  
The only difference is that each row has a different time and an id that matches the time in military money.
The custom CSS is pretty straight forward:  
    -Changes the color of the jumbotron
    -Changes the color of the application depending on the current time vs the times in the rows.  
    -Adds an animation to the botton when hovered over with the cursor.  
In Javascript I started out by creating a function to display the current time in the Jumbotron.  
    1.I used moment.js to get the current moment and then I passed it into the        function with an interval of 1 sec to get the current moment every second.    
    2.I then moved over to create a second function to change the colors depending on the current time vs the time on the textarea.  
        - The function includes the Id of the current textarea parsed as number.  
        - It also includes conditionals for past, present, and future times.  
    3.Finally I made a function that will save the input in the textareas to localstorage.  
        - I started by adding an onclick to the save button.  
        - Inside the onclick I made two variables to store the ID of the pressed button and the value of the textarea that is assigned inside that row with the button.
        - Lastly I added both of those values to localstorage using the setItem() method.  
    4. Last I created a for loop that will run at the start of the page that will retrieve the values of all the textareas from localStorage and display them on the table.
        -PS I clear the data from localStorage after 8pm for that day.  

```

## Deployed Application
[Scheduler Application](https://juawito.github.io/H5-Workday-scheduler/)

![Work-Day Scheduler image](/assets/images/work-day-scheduler.png)
