let body = document.querySelector('body');
let errorMessage = document.getElementById('error');
let searchbar = document.getElementById("searchbar-container");
let interface = document.getElementById('interface');
let search = document.getElementById('search');
let searchValue = document.getElementById('searchbar');
let lightDarkToggle = document.getElementById('light-dark-text');
let lightIcon = document.getElementById('light-icon');
let darkIcon = document.getElementById('dark-icon');
let image = document.getElementById('profile-image');
let fullName = document.getElementById('full-name');
let username = document.getElementById('username');
let joinDate = document.getElementById('join-date');
let joinDatePC = document.getElementById('join-date-pc');
let bio = document.getElementById('profile-description');
let statContainer = document.querySelector('.profile-stats');
let repos = document.getElementById('repo-count');
let followers = document.getElementById('follower-count');
let following = document.getElementById('following-count');
let getLocation = document.getElementById('location-info');
let locationIcon = document.getElementById('location-svg');
let getWebsite = document.getElementById('website-info');
let websiteIcon = document.getElementById('website-svg');
let getTwitter = document.getElementById('twitter-info'); 
let twitterIcon = document.getElementById('twitter-svg')
let getCompany = document.getElementById('company-info');
let companyIcon = document.getElementById('company-svg');

let lightMode = true;
let darkMode = false;

fetch(`https://api.github.com/users/Jason9521`)
    .then((res) => res.json())
    .then((data) => {
        image.src = data.avatar_url;
        fullName.innerHTML = data.name;
        username.innerHTML = `@${data.login}`;
        username.href = `https://github.com/${data.login}`;
        bio.innerHTML = data.bio;
        repos.innerHTML = data.public_repos;
        followers.innerHTML = data.followers;
        following.innerHTML = data.following;
        getLocation.innerHTML = data.location;
        getWebsite.innerHTML = data.html_url;
        getTwitter.innerHTML = data.twitter_username;
        getCompany.innerHTML = data.company;

        let date = data.created_at.slice(0,10);
        let year = date.slice(0,4);
        let month = parseInt(date.slice(5,7));
        let day = date.slice(8,10);
        let monthList = [ 'Filler', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        let result = `Joined ${monthList[month]} ${day}, ${year}`;
        joinDate.innerHTML = result;
        joinDatePC.innerHTML = result;

        if(data.bio == null) {
            bio.innerHTML = 'Not Available';
            bio.style.opacity = '0.4';
        } else {
            bio.style.opacity = '1';
        }
    
        if(data.location == null) {
            getLocation.innerHTML = 'Not Available';
            getLocation.style.opacity = '0.4';
            locationIcon.style.opacity = '0.4';
        } else {
            getLocation.style.opacity = '1';
        }
    
        if(data.html_url == null) {
            getWebsite.innerHTML = 'Not Available';
            getWebsite.style.opacity = '0.4';
            websiteIcon.style.opacity = '0.4';
        } else {
            getWebsite.style.opacity = '1';
        }
    
        if(data.twitter_username == null) {
            getTwitter.innerHTML = 'Not Available';
            getTwitter.style.opacity = '0.4';
            twitterIcon.style.opacity = '0.4';
        } else {
            getTwitter.style.opacity = '1';
        }
    
        if(data.company == null) {
            getCompany.innerHTML = 'Not Available';
            getCompany.style.opacity = '0.4';
            companyIcon.style.opacity = '0.4';
        } else {
            getCompany.style.opacity = '1';
        }
    })


search.addEventListener('click', function() {
    searchResult();
})

document.addEventListener('keydown', function(e) {
    if (e.code == "Enter" || e.code == "NumpadEnter") {
        searchResult();
    }
})


lightDarkToggle.addEventListener('click', function() {

    if (lightMode == true) {
        body.style.backgroundColor = '#141d2f';
        lightDarkToggle.innerHTML = 'LIGHT';
        lightIcon.style.visibility = 'visible';
        darkIcon.style.visibility = 'hidden';
        interface.style.backgroundColor = '#1e2a47';
        interface.style.boxShadow = 'none';
        searchbar.style.backgroundColor = '#1e2a47';
        searchbar.style.boxShadow = 'none';
        searchValue.style.backgroundColor = '#1e2a47';
        searchValue.style.color = '#ffffff' ;
        searchValue.classList.add('placeholder-text');
        statContainer.style.backgroundColor = '#141d2f';
        body.style.color = '#ffffff';
        joinDate.style.color = '#ffffff';
        joinDatePC.style.color = '#ffffff';
        bio.style.color = '#ffffff';
        statContainer.style.color = '#ffffff';
        repos.style.color = '#ffffff';
        followers.style.color = '#ffffff';
        following.style.color = '#ffffff';
        getLocation.style.color = '#ffffff';
        getWebsite.style.color = '#ffffff';
        getTwitter.style.color = '#ffffff';
        getCompany.style.color = '#ffffff';
        locationIcon.style.fill = '#ffffff';
        websiteIcon.style.fill = '#ffffff';
        twitterIcon.style.fill = '#ffffff';
        companyIcon.style.fill = '#ffffff';
        lightMode = false;
        darkMode = true;
    }

    else {
        body.style.backgroundColor = '#f6f8ff';
        lightDarkToggle.innerHTML = 'DARK';
        lightIcon.style.visibility = 'hidden';
        darkIcon.style.visibility = 'visible';
        interface.style.backgroundColor = '#fefefe';
        interface.style.boxShadow = '0px 7px 15px #697c9a';
        searchbar.style.backgroundColor = '#fefefe';
        searchbar.style.boxShadow = '0px 7px 15px #697c9a';
        searchValue.style.backgroundColor = '#ffffff';
        searchValue.style.color = 'black';
        searchValue.classList.remove('placeholder-text');
        statContainer.style.backgroundColor = '#f6f8ff';
        body.style.color = 'black';
        joinDate.style.color = '#4b6a9b';
        joinDatePC.style.color = '#4b6a9b';
        bio.style.color = '#4b6a9b';
        statContainer.style.color = '#4b6a9b';
        repos.style.color = 'black';
        followers.style.color = 'black';
        following.style.color = 'black';
        getLocation.style.color = '#4b6a9b';
        getWebsite.style.color = '#4b6a9b';
        getTwitter.style.color = '#4b6a9b';
        getCompany.style.color = '#4b6a9b';
        locationIcon.style.fill = '#4b6a9b';
        websiteIcon.style.fill = '#4b6a9b';
        twitterIcon.style.fill = '#4b6a9b';
        companyIcon.style.fill = '#4b6a9b';
        lightMode = true;
        darkMode = false;
    }
})

// FUNCTIONS

function searchResult() {
    fetch(`https://api.github.com/users/${searchValue.value}`)
    .then((res) => {
        if (!res.ok) {
            searchValue.value = "";
            errorMessage.style.visibility = 'visible';
        } else {
            res.json()
            .then((data) => {
                image.src = data.avatar_url;
                fullName.innerHTML = data.name;
                username.innerHTML = `@${data.login}`;
                username.href = `https://github.com/${data.login}`;
                bio.innerHTML = data.bio;
                repos.innerHTML = data.public_repos;
                followers.innerHTML = data.followers;
                following.innerHTML = data.following;
                getLocation.innerHTML = data.location;
                getWebsite.innerHTML = data.html_url;
                getTwitter.innerHTML = data.twitter_username;
                getCompany.innerHTML = data.company;
                checkNullResult();
                getJoinDate();
                errorMessage.style.visibility = 'hidden';
            })
        }
    })}


function checkNullResult() {
    fetch(`https://api.github.com/users/${searchValue.value}`)
    .then((res) => res.json())
    .then((data) => {

        if(data.bio == null) {
            bio.innerHTML = 'Not Available';
            bio.style.opacity = '0.4';
        } else {
            bio.style.opacity = '1';
        }
    
        if(data.location == null) {
            getLocation.innerHTML = 'Not Available';
            getLocation.style.opacity = '0.4';
            locationIcon.style.opacity = '0.4';
        } else {
            getLocation.style.opacity = '1';
        }
    
        if(data.html_url == null) {
            getWebsite.innerHTML = 'Not Available';
            getWebsite.style.opacity = '0.4';
            websiteIcon.style.opacity = '0.4';
        } else {
            getWebsite.style.opacity = '1';
        }
    
        if(data.twitter_username == null) {
            getTwitter.innerHTML = 'Not Available';
            getTwitter.style.opacity = '0.4';
            twitterIcon.style.opacity = '0.4';
        } else {
            getTwitter.style.opacity = '1';
        }
    
        if(data.company == null) {
            getCompany.innerHTML = 'Not Available';
            getCompany.style.opacity = '0.4';
            companyIcon.style.opacity = '0.4';
        } else {
            getCompany.style.opacity = '1';
        }
    })
}

function getJoinDate() {

    fetch(`https://api.github.com/users/${searchValue.value}`)
    .then((res) => res.json())
    .then((data) => {
        let date = data.created_at.slice(0,10);
        let year = date.slice(0,4);
        let month = parseInt(date.slice(5,7));
        let day = date.slice(8,10);
        let monthList = [ 'Filler', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        let result = `Joined ${monthList[month]} ${day}, ${year}`;
        joinDate.innerHTML = result;
        joinDatePC.innerHTML = result;
    })
}


