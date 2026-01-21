const btnLogin = document.getElementById('btn-login');

function userLogin(){
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const user = JSON.parse(localStorage.getItem('user')) || [];
    const currentUser = user.email === loginEmail && user.password === loginPassword;
    const error = document.getElementById('errorMessage');

    if (!loginEmail || !loginPassword) {
        error.textContent = 'All fields are required';
        return
    } 

    if (!currentUser) {
        error.innerHTML = '<p>Invalid email or password. <a href="register.html" style="color:white;text-decoration: underline"> Sign-in</a></p>';
        return;
    } 

    if (user.email === loginEmail || user.password === loginPassword) {
        const userProfiles = {
            email: loginEmail,
            password: loginPassword,
            profiles: [
                { id: 1, name: 'Vero' },
                { id: 2, name: 'Zoze' },
                { id: 3, name: 'Family' }
            ]};
        localStorage.setItem('user', JSON.stringify(userProfiles));
        sessionStorage.setItem('loggedUser', loginEmail);
        window.location.href = 'profiles.html';
    }
}

btnLogin.addEventListener('click', (e) =>{
    e.preventDefault();
    userLogin()
})
