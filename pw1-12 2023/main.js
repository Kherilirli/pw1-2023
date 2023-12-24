let authentication = () =>{
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'januarkherilirli@gmail.com' && password === '020105kh'){
        window.location.href = 'success.html';
        alert('Login Berhasil');
    } else {
        alert('Username atau Password salah')
    }
}