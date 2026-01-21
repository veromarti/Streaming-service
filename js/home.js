const loggedEmail = sessionStorage.getItem('loggedUser');
const activeProfile = JSON.parse(sessionStorage.getItem('activeProfile'));
const movieCatalog = [
    { id: 1, title: "The Conjuring", year: 2023, imgSrc:"/assets/media/home/mov1.svg" },
    { id: 2, title: "No Sudden Move", year: 2022, imgSrc:"/assets/media/home/mov2.svg" },
    { id: 3, title: "Let Them All Talk", year: 2021, imgSrc:"/assets/media/home/mov3.svg" },
    { id: 4, title: "Justice League", year: 2020, imgSrc:"/assets/media/home/mov4.svg" },
    { id: 5, title: "The Secret Garden", year: 2024, imgSrc:"/assets/media/home/mov5.svg" },
    { id: 6, title: "Tom & Jerry", year: 2022, imgSrc:"/assets/media/home/mov6.svg" },
    { id: 7, title: "Harry Potter", year: 2019, imgSrc:"/assets/media/home/mov7.svg" },
    { id: 8, title: "Fantastic Beasts", year: 2021, imgSrc:"/assets/media/home/mov8.svg" },
    { id: 9, title: "Lord of the Rings", year: 2018, imgSrc:"/assets/media/home/mov9.svg" },
    { id: 10, title: "Guns AKIMBO", year: 2025, imgSrc:"/assets/media/home/mov10.svg" },
    { id: 11, title: "The Hunger Games", year: 2018, imgSrc:"/assets/media/home/mov11.svg" },
    { id: 12, title: "The Hunger Games", year: 2025, imgSrc:"/assets/media/home/mov12.svg" }
];

if (!loggedEmail) {
    window.location.href = 'login.html';
}

if (!activeProfile) {
    window.location.href = 'profiles.html';
}

const profileId = activeProfile.id;
const profile = activeProfile.name;
const profileHeader = document.getElementById('header-nav');

const wrapper = document.createElement('article');
wrapper.classList.add('profile-item');

const btn = document.createElement('button');
btn.classList.add('circle-btn');

const img = document.createElement('img');
img.src = '/assets/media/profile'+profileId+'.jpeg';

const profileName = document.createElement('p');
profileName.textContent = profile;

btn.appendChild(img);

wrapper.appendChild(btn);
wrapper.appendChild(profileName);
profileHeader.appendChild(wrapper);

const catalog = document.getElementById('catalogContainer');
const favorites = document.getElementById('favoritesContainer')
const favs = activeProfile.favorites;

movieCatalog.forEach((movie) => { 
    console.log(movie)
    const movieCard = document.createElement('article');
    movieCard.classList.add('card');
    movieCard.dataset.id = movie.id;

    const movieImg = document.createElement('img');
    movieImg.classList.add('card-img-top');
    movieImg.src = movie.imgSrc;

    const movieDetails = document.createElement('section');
    movieDetails.classList.add('card-body');

    const movieTitle = document.createElement('h5');
    movieTitle.classList.add('card-title');
    movieTitle.textContent = movie.title;

    const container = document.createElement('div');

    const movieYear = document.createElement('p');
    movieYear.classList.add('card-text');
    movieYear.textContent = movie.year;

    const btn = document.createElement('button');
    btn.dataset.id = movie.id;

    const img = document.createElement('img');
    img.src = '/assets/media/empty_like.svg';    
    img.dataset.id = movie.id;
    
    if (favs.find((favMovie) => favMovie.id === movie.id)) {
        img.src = '/assets/media/filled_like.svg';
        addToFavorites(movie)
    }
    
    btn.addEventListener('click', () => {
        addToFavorites(movie);
        img.src = '/assets/media/filled_like.svg';
        favs.push(movie);
        activeProfile.favorites = favs;
        sessionStorage.setItem('activeProfile', JSON.stringify(activeProfile));
    });

    btn.appendChild(img);

    container.appendChild(movieYear);
    container.appendChild(btn);

    movieDetails.appendChild(movieTitle);
    movieDetails.appendChild(container);

    movieCard.appendChild(movieImg);
    movieCard.appendChild(movieDetails);

    catalog.appendChild(movieCard);
})

function addToFavorites(movie){
    const movieCard = document.createElement('article');
    movieCard.classList.add('card');
    movieCard.dataset.id = movie.id;

    const movieImg = document.createElement('img');
    movieImg.classList.add('card-img-top');
    movieImg.src = movie.imgSrc;

    const movieDetails = document.createElement('section');
    movieDetails.classList.add('card-body');

    const movieTitle = document.createElement('h5');
    movieTitle.classList.add('card-title');
    movieTitle.textContent = movie.title;

    const container = document.createElement('div');

    const movieYear = document.createElement('p');
    movieYear.classList.add('card-text');
    movieYear.textContent = movie.year;

    const btn = document.createElement('button');

    const img = document.createElement('img');
    img.src = '/assets/media/filled_like.svg';      

    btn.addEventListener('click', () => {
        removeFavorites(movie);
    });

    btn.appendChild(img);

    container.appendChild(movieYear);
    container.appendChild(btn);

    movieDetails.appendChild(movieTitle);
    movieDetails.appendChild(container);

    movieCard.appendChild(movieImg);
    movieCard.appendChild(movieDetails);

    favorites.appendChild(movieCard);
}

function removeFavorites(movie){
    activeProfile.favorites =
    activeProfile.favorites.filter(item => item.id !== movie.id);
    sessionStorage.setItem('activeProfile', JSON.stringify(activeProfile));

    const favCard = favorites.querySelector(
        `.card[data-id="${movie.id}"]`
    );
    if (favCard) {
        favCard.remove();
    }

    const catalogImg = catalog.querySelector(
        `img[data-id="${movie.id}"]`
    );
    if (catalogImg) {
        catalogImg.src = '/assets/media/empty_like.svg';
    }
}