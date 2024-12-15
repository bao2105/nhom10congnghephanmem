// validation form login
const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

// validation form login
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  // Kiểm tra xem người dùng đã nhập đủ thông tin chưa
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("Vui lòng không để trống");
    return;
  }

  // Lấy dữ liệu người dùng từ localStorage
  const user = JSON.parse(localStorage.getItem(inputUsername.value));

  if (!user) {
    // Nếu không tìm thấy username trong localStorage
    alert("Tài khoản không tồn tại");
  } else if (user.password !== inputPassword.value) {
    // Nếu mật khẩu không khớp
    alert("Mật khẩu không chính xác");
  } else {
    // Đăng nhập thành công
    alert("Đăng Nhập Thành Công");
    window.location.href = "http://192.168.120.1:9999/";
  }
});
