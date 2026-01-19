const btnLogin = document.getElementById('btn-login');

function userLogin(){
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const user = JSON.parse(localStorage.getItem('user')) || [];
    const currentUser = user.find(u => u.email === loginEmail && u.password === loginPassword);
    const error = document.getElementById('errorMessage');

    if (!loginEmail || !loginPassword) {
        error.textContent = 'All fields are required';
        return
    } 

    if (!currentUser) {
        error.innerHTML = '<p>Invalid email or password. <a href="register.html" style="color:white;text-decoration: underline"> Sign-in</a></p>';
        return;
    } 

    if (currentUser.email === loginEmail || currentUser.password === loginPassword) {
        sessionStorage.setItem('loggedUser', email);
        window.location.href = 'profiles.html';
    }
}

btnLogin.addEventListener('click', (e) =>{
    e.preventDefault();
    userLogin()
})
