"use client";

import { Button, Input } from "@nextui-org/react";

import Image from "next/image";
import React from "react";

const Login = () => {
	return (
		<div className="login">
			<p>
				<Image
					src="/pathao.svg"
					width={100}
					height={100}
				/>
			</p>
			<br />
			<br />
			<p>
				Enter Username: <br />
				<Input placeholder="username"></Input>
			</p>
			<br />
			<p>
				Enter Password: <br />
				<Input placeholder="password"></Input>
			</p>
			<br />
			<p>
				<Button color="danger">Button</Button>
			</p>
			<br />
			<span className="signUpQn">
				Don't have an account? &nbsp;&nbsp;
				<a
					href="/register"
					className="signUpFormLink">
					Sign Up
				</a>
			</span>
			&nbsp;
			<span className="signUpQn">&nbsp; instead</span>
		</div>
	);
};

export default Login;
