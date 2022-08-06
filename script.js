let search = document.getElementById('search');
let image = document.getElementById('profile-image');
let fullName = document.getElementById('full-name');
let username = document.getElementById('username');
let joinDate = document.getElementById('join-date');
let bio = document.getElementById('profile-description');
let repos = document.getElementById('repo-count');
let followers = document.getElementById('follower-count');
let following = document.getElementById('following-count');
let getLocation = document.getElementById('location-info');
let getWebsite = document.getElementById('website-info');
let getTwitter = document.getElementById('twitter-info'); 
let getCompany = document.getElementById('company-info');



search.addEventListener('click', function() {
    fetch('https://api.github.com/users/Jason9521')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        fullName.innerHTML = data.name;
        username.innerHTML = `@${data.login}`
        username.href = `https://github.com/${data.login}`
    })
})