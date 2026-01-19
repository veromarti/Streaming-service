// const btnLogin = document.getElementById('btn-login');

// function userLogin(){
//     const user = JSON.parse(localStorage.getItem('user'))
//     const email = document.getElementById('loginEmail');
//     const passw = document.getElementById('loginPassword');

//     console.log(user)
//     console.log(email.value)
//     console.log(passw.value)

//     if (user.email != email.value || user.password != passw.value) {
//         console.log('entro error')
//         const errorMsg = document.getElementById('errorMessage');
//         errorMsg.textContent = 'error';
//     }else {
//         console.log('entro bien')
//         sessionStorage.setItem('loggedUser', email.value);
//         window.location.href = 'profiles.html'
//     }
// }

// btnLogin.addEventListener('click', (e) => {
//     e.preventDefault()
//     userLogin()
//     }
// )

document.getElementById('loginForm').addEventListener('submit', loginUser);

function loginUser(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const error = document.getElementById('errorMessage');

    if (!email || !password) {
        error.textContent = 'All fields are required';
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        error.textContent = 'Invalid email or password';
        return;
    }

    sessionStorage.setItem('loggedUser', email);

    window.location.href = 'profiles.html';
}
