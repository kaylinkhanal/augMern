import Image from "next/image";
import React from "react";

const Register = () => {
	return (
		<div className="signUp">
			<h1>Register Here</h1>
			<br />
			<Image
				src="/pathao.svg"
				width={100}
				height={100}
			/>
			<br />
			<p>
				Enter Your First Name
				<input
					type="text"
					placeholder="First Name"
				/>
			</p>

			<p>
				Enter Your Last
				<input
					type="text"
					placeholder="Last Name"
				/>
			</p>
			<br />
			<br />
			<p>
				Enter your Email Address
				<input
					type="email"
					placeholder="email"
				/>
			</p>

			<p>
				Confirm Email
				<input
					type="email"
					placeholder="email"
				/>
			</p>
			<br />
			<br />
			<p>
				Password
				<input
					type="password"
					placeholder="Password"
				/>
			</p>

			<p>
				Confirm Password
				<input
					type="password"
					placeholder="Password"
				/>
			</p>
			<br />
			<br />

			<p>
				<button className="signUpBtn">Register</button>
			</p>
		</div>
	);
};

export default Register;
