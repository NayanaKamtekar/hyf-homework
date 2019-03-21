const seriesDurations = [
    {
        title: 'The Big Bang Theory',
        days: 4,
        hours: 3,
        minutes: 43,  
    },
    {
        title: 'Seinfeld',
        days: 2,
        hours: 18,
        minutes: 0,
    },
    {
        title: 'Friends',
        days: 3,
        hours: 14,
        minutes: 32,
    },
    {
        title: 'The Great British Bake Off',
        days: 3,
        hours: 13,
        minutes: 0,
    }, 
]

function seriesDurationsOfMyLife(averageLifeSpan) {
    let lifeSpanInMin = averageLifeSpan * 365 * 24 * 60;
    let totalTime = 0;
    for ( var i = 0; i < seriesDurations.length; i++) {
        let seriesDurationsInMin = seriesDurations[i].days * 24 * 60 + seriesDurations[i].hours * 60 + seriesDurations[i].minutes;
        let seriesDurationsPct = (seriesDurationsInMin / lifeSpanInMin) * 100;
        console.log(seriesDurations[i].title + " took " + seriesDurationsPct.toFixed(3) + "% of my life.")
        totalTime += seriesDurationsInMin;
    }
    let seriesDurationsTotalPct =(totalTime / lifeSpanInMin) * 100;
    console.log("\nIn total that is " + seriesDurationsTotalPct.toFixed(3) + "% of my life.")
}
seriesDurationsOfMyLife(80);