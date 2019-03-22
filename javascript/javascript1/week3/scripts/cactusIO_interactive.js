//Adding an activity
let activities = [];
let activities1 = [];
function addActivity(date, activity, duration) {
    activities.push({date: date, activity: activity, duration: duration,});
}
addActivity('27/3-19', 'Youtube', 30);
addActivity('27/3-19', 'Facebook', 20);
addActivity('27/3-19', 'Netflix', 50);
console.log(activities);

//Show my status
function showStatus(activityArray) {
    if (activityArray.length === 0) {
        return 'Add some activities before calling showStatus';
    }
    else if (activityArray.length > 0) {
        let totaltime = 0;
        let usageLimit = 150;
        for (let i = 0; i < activityArray.length; i++) {
        totaltime += activityArray[i].duration;
        }
        if (totaltime >= usageLimit) {
            return 'You have reached your limit, no more smartphoning for you!';
        }
        else {
            return 'You have added ' + activityArray.length + ' activities. They amount to ' +  totaltime +
            ' min. of usage. You can still enjoy your smartphone for ' + (usageLimit - totaltime) + ' min.'; 
        }   //Extra feature: how much time is still there to reach limit
        
    }  
}
console.log(showStatus(activities1));
console.log(showStatus(activities));


//Usage limit
addActivity('27/3-19', 'Twitter', 20);
addActivity('27/3-19', 'Instagram', 40);
console.log(activities);
console.log(showStatus(activities));


//optional 
//part1 Create the function which automatically figures out what the date is.
let d = new Date();
let todaysDate = d.getDate()  + "/" + (d.getMonth() + 1) + "-" + (d.getFullYear()).toString().substr(-2);
function addActivity1(activity, duration) {
    //var d = new Date();
    //var datestring = d.getDate()  + "/" + (d.getMonth() + 1) + "-" + (d.getFullYear()).toString().substr(-2);
    //or slice(2)to convert into 2 digit year
    activities.push({date: todaysDate, activity: activity, duration: duration,});
}
addActivity1('Skype', 20);
addActivity1('WhatsApp', 40);
addActivity1('Youtube', 20);
addActivity1('Facebook', 30);

console.log(activities);
console.log(showStatus(activities));


//part2 Improve the showStatus function by only showing the number of actitivies for that specific day.
function showStatus1(activityArray, date) {
    if (activityArray.length === 0) {
        return 'Add some activities before calling showStatus';
    }
    else if (activityArray.length > 0) {
        numberOfactivities = 0;
        for (let i = 0; i < activityArray.length; i++) {
            if (activityArray[i].date === date) {
                numberOfactivities += 1;
            }
        }
        return "The number of actitivies on " + date + " is " + numberOfactivities + ".";
    }  
}
console.log(showStatus1(activities, '27/3-19'));
console.log(showStatus1(activities, todaysDate));


//part 3 Create a function for calculating the activity a user has spent the most time on
function mostUsedActivity(activityArray, date) {
    if (activityArray.length === 0) {
        return 'Add some activities before calling showStatus'
    }
    else if (activityArray.length > 0) {
        let sortedArray = [];
            for ( let i = 0; i < activityArray.length; i++ ) {   // To make new array of objects of the same date in parameter.
            if (activityArray[i].date === date) {
                sortedArray.push(activityArray[i]);
            }
        }
        let maxDuration = sortedArray.sort(function(a, b) {
            return b.duration - a.duration     //Sorted array in reverse way maximum value first
        }); 
        console.log("User has spent the most time on " + maxDuration[0].activity + ".")
        console.log(maxDuration[0]);
        }
}
mostUsedActivity(activities, '27/3-19');
mostUsedActivity(activities, todaysDate);