class GitRepo {
    constructor(users) {
        this.users = users;
    }

    getUserRepo() {
        return this.users.map(user => 'https://api.github.com/search/repositories?q=user:' + user).map(url => fetch(url).then(response => response.json()));
    }

    renderUserRepo() {
        let gitRepoWrapper = document.getElementsByClassName('gitRepoWrapper')[0];
        let ul = document.createElement('ul');
        gitRepoWrapper.appendChild(ul);

        Promise.all(this.getUserRepo())
        .then(results => {
            results.forEach(user => {
                console.log(user);
                let userLi = document.createElement('li');
                ul.appendChild(userLi);
                userLi.innerHTML = user.items[0].owner.login;

                let innerUl = document.createElement('ul');
                userLi.appendChild(innerUl);

                user.items.forEach(repo => {
                    let repoLi = document.createElement('li');
                    innerUl.appendChild(repoLi);
                    repoLi.innerHTML = repo.name + ': ' + repo.html_url;

                });
            });
        });
    }
}

const gitRepo = new GitRepo(['ismailirahim', 'Swapna-Sahu', 'hemagunti']);
gitRepo.renderUserRepo();

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


