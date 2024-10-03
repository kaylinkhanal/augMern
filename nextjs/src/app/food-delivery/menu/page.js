'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
 
const MenuSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  price: Yup.string().matches(
    /^(?=.*[0-9])/,
    "  Must Contain One Number Character"
  )
});
const MenuForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      price: 0,
      fullName:'ram thapa',
      email:''
    },
    onSubmit: values => {
      console.log("submitted")
    },
    validationSchema:MenuSchema
  });
  return (
    <form className='flex flex-col gap-4' onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <input type="file"/>
      <span className='text-red-700'>{formik?.errors?.name}</span> 
      <label htmlFor="lastName">Price</label>
      <input
        id="price"
        name="price"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
        <input
        id="email"
        name="email"
        placeholder="Please add @ in email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
        {formik?.errors?.price}
    
        <input
        id="fullName"
        name="fullName"
        onChange={formik.handleChange}
        value={formik.values.fullName}
      />
        {formik?.errors?.fullName}
      <button type="submit">Submit</button>
    </form>
  );
};

export default MenuForm