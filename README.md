## Streaming Platform – Vanilla JavaScript Project
# Project Description

This project is a streaming platform built using HTML, CSS, and Vanilla JavaScript.
The goal of the project is to practice DOM manipulation, data persistence with Web Storage, dynamic rendering, and basic application flow without frameworks.

The application allows users to:

Register and log in

Select a profile

Browse a catalog of movies

Add and remove movies from a personalized favorites list

All data is handled on the client side using localStorage and sessionStorage.

# Functional Flow

The application follows this navigation flow:

1. Landing Page

- Entry point of the application

- Redirects users to register or login

2. Register

- Creates a new user

- Stores user data in localStorage

3. Login

- Validates user credentials

- Saves the logged-in user in sessionStorage

4. Profiles

- Displays available profiles for the logged-in user

- Allows selecting an active profile

5. Home

- Displays the movie catalog

- Allows adding/removing movies to/from “My List”

- Favorites are stored per profile

## Data Models

# User Model

{
  email: String,
  password: String,
  profiles: Array<Profile>
}

# Profile Model

{
  id: Number,
  name: String,
  favorites: Array<Movie>
}

# Movie (Catalog Item) Model

{
  id: Number,
  title: String,
  year: Number,
  imgSrc: String
}

The catalog is hardcoded as an array of movie objects.

## Web Storage Usage

# localStorage

| Key     | Description                 |
| ------- | --------------------------- |
| `user`  | Stores the registered user  |

# sessionStorage

| Key             | Description                           |
| --------------- | ------------------------------------- |
| `loggedUser`    | Email of the currently logged-in user |
| `activeProfile` | Currently selected profile object     |

## How to Run the Project Locally

1. Clone the repository

2. Open the project folder

3. Run the project using Live Server (recommended) or open index.html directly in your browser

4. Register a user and start navigating the app

You can also access the following link: https://veromarti.github.io/Streaming-service/ 

No additional dependencies are required.

## Branching and Commit Strategy

- Main branch (main) contains stable and tested code

- Development was done incrementally

- Commits follow a descriptive style:

    - add login logic

    - render catalog dynamically

    - handle favorites per profile

- Each feature or fix was committed separately to keep history readable

## Technologies Used

- HTML5

- CSS3

- Vanilla JavaScript

- Web Storage API (localStorage, sessionStorage)

- Bootstrap

- Google Fonts

- Figma (https://www.figma.com/design/xkT0vDtOwQxvWcFgJk840U/HBO-MAX-Clone--Community-?node-id=19-71&t=HZ94DNMMznMGvzDr-0)