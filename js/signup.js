// validation form register and register user local storage
const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");

// Hàm kiểm tra email hợp lệ
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex kiểm tra định dạng email
  return emailRegex.test(email);
}

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputUsernameRegister.value === "" || inputPasswordRegister.value === "") {
    alert("Vui lòng không để trống");
    return;
  }

  if (!isValidEmail(inputUsernameRegister.value)) {
    alert("Vui lòng nhập đúng định dạng email");
    return;
  }

  // Tạo object user và lưu vào localStorage
  const user = {
    username: inputUsernameRegister.value,
    password: inputPasswordRegister.value,
  };

  let json = JSON.stringify(user);
  localStorage.setItem(inputUsernameRegister.value, json);

  alert("Đăng Ký Thành Công");
  window.location.href = "login.html";
});

