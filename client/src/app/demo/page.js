"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";

const LoginForm = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);

		// Basic validation
		if (!formData.email || !formData.password) {
			setError("Please fill in all fields");
			setLoading(false);
			return;
		}

		if (!formData.email.includes("@")) {
			setError("Please enter a valid email address");
			setLoading(false);
			return;
		}

		// Simulating API call
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			console.log("Login attempted with:", formData);
			// Handle successful login here
		} catch (err) {
			setError("Login failed. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
			<Card className="w-full max-w-md">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold text-center">
						Login
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={handleSubmit}
						className="space-y-4">
						{error && (
							<Alert variant="destructive">
								<AlertDescription>{error}</AlertDescription>
							</Alert>
						)}

						<div className="space-y-2">
							<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
								Email
							</label>
							<Input
								type="email"
								placeholder="Enter your email"
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
								className="w-full"
							/>
						</div>

						<div className="space-y-2">
							<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
								Password
							</label>
							<div className="relative">
								<Input
									type={showPassword ? "text" : "password"}
									placeholder="Enter your password"
									value={formData.password}
									onChange={(e) =>
										setFormData({ ...formData, password: e.target.value })
									}
									className="w-full pr-10"
								/>
								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
									{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
								</button>
							</div>
						</div>

						<Button
							type="submit"
							className="w-full"
							disabled={loading}>
							{loading ? "Signing in..." : "Sign in"}
						</Button>

						<div className="text-sm text-center text-gray-500">
							<a
								href="#"
								className="hover:text-blue-600">
								Forgot password?
							</a>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default LoginForm;
