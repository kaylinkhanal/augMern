document
	.getElementById("loginForm")
	.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent form submission

		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;
		const errorMessage = document.getElementById("error-message");

		if (username === "admin" && password === "12345") {
			alert("Login successful!");

			document.cookie = "username=admin; expires=Thu, 18 Dec 2024 12:00:00 UTC";
			location.href = "D:/webdev/web/MERN/github/augMern/basic/home.html";
			errorMessage.textContent = "";
		} else {
			errorMessage.textContent = "Invalid username or password!";
		}
	});
