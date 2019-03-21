//Adding an activity
let activities = [];
let activities1 = [];
function addActivity(date, activity, duration) {
    activities.push({date: date, activity: activity, duration: duration,});
}
addActivity('24/3-19', 'Youtube', 30);
addActivity('24/3-19', 'Facebook', 20);
addActivity('24/3-19', 'Netflix', 50);
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
addActivity('24/3-19', 'Twitter', 20);
addActivity('24/3-19', 'Instagram', 40);
console.log(activities);
console.log(showStatus(activities));


//optional 
//part1

function addActivity1(activity, duration) {
    var d = new Date();
    var datestring = d.getDate()  + "/" + (d.getMonth() + 1) + "-" + (d.getFullYear()).toString().substr(-2);
    //or slice(2)to convert into 2 digit year
    activities.push({date: datestring, activity: activity, duration: duration,});
}
addActivity1('Skype', 20);
addActivity1('WhatsApp', 40);
addActivity1('Youtube', 20);
addActivity1('Facebook', 30);

console.log(activities);
console.log(showStatus(activities));


//part2
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
        return numberOfactivities;
    }  
}
console.log(showStatus1(activities, '24/3-19'));
console.log(showStatus1(activities, '21/3-19'));
