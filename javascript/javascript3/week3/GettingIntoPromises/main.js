function fetchDataAllAtOnce() {
    let Promise1 = fetch('https://api.github.com/search/repositories?q=user:ismailirahim')
        .then(response => response.json())
    let Promise2 =fetch('https://api.github.com/search/repositories?q=user:Swapna-Sahu')
        .then(response => response.json())
    let Promise3 =fetch('https://api.github.com/search/repositories?q=user:hemagunti')
        .then(response => response.json())

    return Promise.all([Promise1, Promise2, Promise3]).then(results => {
        console.log(results);
        results.forEach(a =>  {
            for(let j = 0; j < results.length; j++) {
                console.log('RepoFullname: ' + a.items[j].name + ', Repo-url: ' 
                + a.items[j].owner.repos_url + ', RepoOwner: ' + a.items[j].owner.login);
            } 
        });
    });
}
fetchDataAllAtOnce();

/*
let urls = ['https://api.github.com/search/repositories?q=user:ismailirahim', 'https://api.github.com/search/repositories?q=user:Swapna-Sahu','https://api.github.com/search/repositories?q=user:hemagunti'];

var promises = urls.map(url => fetch(url).then(response => response.json()));
Promise.all(promises).then(results => {
    console.log(results);
    results.forEach(a =>  {
        for(let j = 0; j < results.length; j++) {
            console.log('RepoFullname: ' + a.items[j].name + ', Repo-url: ' 
            + a.items[j].owner.repos_url + ', RepoOwner: ' + a.items[j].owner.login);
        } 
    });
});
*/


