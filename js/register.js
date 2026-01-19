const btnRegister = document.getElementById('btn-register');

function userRegister(){
    const userEmail = document.getElementById('inputEmail').value;
    const inputPass = document.getElementById('inputPassword').value;
    const confirmPass = document.getElementById('confirmPassword').value;
    const loadUser = JSON.parse(localStorage.getItem('user')) || [];
    const currentUser = loadUser.email === userEmail;
    const error = document.getElementById('errorMessage');

    if (!userEmail || !inputPass || !confirmPass) {
        error.textContent = 'All fields are required';
        return
    } 

    if (inputPass != confirmPass) {
        error.textContent = 'Passwords do NOT match';
        return
    }

    if (currentUser) {
        error.innerHTML = '<p>Email already registered. <a href="login.html" style="color:white;text-decoration: underline"> Login</a></p>';
        return;
    }else{
        const user = {email:userEmail,password:confirmPass}
        console.log(user)

        localStorage.setItem('user', JSON.stringify(user))
        window.location.href = 'login.html'
    }
}

btnRegister.addEventListener('click', (e) =>{
    e.preventDefault();
    userRegister()
})
