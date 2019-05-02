
function translateAllAtOnce() {
    let promise1 = moveElement(document.querySelectorAll('li')[0], {x: 20, y: 300});
    let promise2 = moveElement(document.querySelectorAll('li')[1], {x: 400, y: 300});
    let promise3 = moveElement(document.querySelectorAll('li')[2], {x: 400, y: 20});

    Promise.all([promise1, promise2, promise3]).then(() => {
        console.log('All circles have been moved');
    });
}
translateAllAtOnce();