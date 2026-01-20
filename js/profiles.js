const loggedEmail = sessionStorage.getItem('loggedUser')

if (!loggedEmail) {
    window.location.href = 'login.html';
}

const user = JSON.parse(localStorage.getItem('user')) || [];
const currentUser = user.email;
user.profiles.forEach((element) => console.log(element.name));
const container = document.getElementById('profilesContainer')
let cont = 1;

user.profiles.forEach((profile) => { 
    const wrapper = document.createElement('article');
    wrapper.classList.add('profile-item');

    const btn = document.createElement('button');
    btn.classList.add('circle-btn');

    const img = document.createElement('img');
    img.src = '/assets/media/profile'+cont+'.jpeg';

    const profileName = document.createElement('p');
    profileName.textContent = profile.name;

    btn.appendChild(img);

    wrapper.appendChild(btn);
    wrapper.appendChild(profileName);
    container.appendChild(wrapper);
    cont++;

    btn.addEventListener('click', () => {
        selectProfile(profile);
    });
});

function selectProfile(profile){
    sessionStorage.setItem('activeProfile', JSON.stringify(profile));
    window.location.href = 'home.html';

}
