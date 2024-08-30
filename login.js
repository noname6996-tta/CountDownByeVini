document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch('loginData.json')
        .then(response => response.json())
        .then(loginData => {
            const user = loginData.find(account => account.username === username && account.password === password);

            if (user) {
                // Đăng nhập thành công, chuyển đến main.html với id của tài khoản
                window.location.href = `main.html?id=${user.id}`;
            } else {
                // Đăng nhập không thành công, hiển thị thông báo lỗi
                document.getElementById("error-message").textContent = "Username or password is incorrect!";
            }
        })
        .catch(error => {
            console.error('Error loading login data:', error);
        });
});
