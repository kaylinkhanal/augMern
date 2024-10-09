"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	lastName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
});

export const ValidationSchemaExample = () => (
	<div className="flex flex-col gap-2 text-center bg-blue-100 m-auto w-[400px] p-4 rounded-2xl">
		<h1>Signup Form</h1>
		<Formik
			initialValues={{
				firstName: "fame",
				lastName: "lname",
				email: "email",
			}}
			validationSchema={SignupSchema}
			onSubmit={(values) => {
				// same shape as initial values
				console.log(values);
			}}>
			{({ errors, touched }) => (

				<Form className="flex flex-col gap-2 bg-blue-100 m-auto w-[100%] p-4 rounded-2xl">
					
					<label for=" text-left">FirstName</label>
					<Field name="firstName" />
					{errors.firstName && touched.firstName ? (
						<div>{errors.firstName}</div>
					) : null}

					<label for="">LastName</label>
					<Field name="lastName w-[100%] text-left" />
					{errors.lastName && touched.lastName ? (
						<div>{errors.lastName}</div>
					) : null}

					<label>Email</label>
					<Field
						name="email"
						type="email"
					/>
					{errors.email && touched.email ? <div>{errors.email}</div> : null}
					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	</div>
);
