function translateOneByOne() {
    moveElement(document.querySelectorAll('li')[0], {x: 20, y: 300})
    .then(() => {
        console.log('Red circle has been moved');
        return moveElement(document.querySelectorAll('li')[1], {x: 400, y: 300});
    })
    .then(() => {
        console.log('Blue circle has been moved');
        return moveElement(document.querySelectorAll('li')[2], {x: 400, y: 20});
    })
    .then(() => {
        console.log('Green circle has been moved');
    });
}

translateOneByOne();