'use client'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const validationSchema = Yup.object().shape({
  isFavouriteProduct: Yup.boolean(),
  productImage: Yup.string().url('Invalid URL').required('Product image is required'),
  itemDisplayTag: Yup.string().required('Item display tag is required'),
  name: Yup.string().required('Name is required'),
  price: Yup.number().moreThan(0, 'Price must be greater than 0').required('Price is required'),
  productDescription: Yup.string().required('Product description is required'),
  productId: Yup.number().positive('Product ID must be positive').integer('Product ID must be an integer').required('Product ID is required'),
});

export function ProductForm() {
  const formik = useFormik({
    initialValues: {
      isFavouriteProduct: false,
      productImage: "",
      itemDisplayTag: "",
      name: "",
      price: 0,
      productDescription: "",
      productId: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
     console.log(values)
    },
  });

  return (
    (<div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Product Form</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="isFavouriteProduct" className="flex items-center space-x-2">
            <Checkbox
              id="isFavouriteProduct"
              checked={formik.values.isFavouriteProduct}
              onCheckedChange={(checked) => formik.setFieldValue('isFavouriteProduct', checked)} />
            <span>Is Favourite Product</span>
          </Label>
        </div>

        <div>
          <Label htmlFor="productImage">Product Image URL</Label>
          <Input
            id="productImage"
            name="productImage"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.productImage} />
          {formik.touched.productImage && formik.errors.productImage ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.productImage}</div>
          ) : null}
        </div>

        <div>
          <Label htmlFor="itemDisplayTag">Item Display Tag</Label>
          <Input
            id="itemDisplayTag"
            name="itemDisplayTag"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.itemDisplayTag} />
          {formik.touched.itemDisplayTag && formik.errors.itemDisplayTag ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.itemDisplayTag}</div>
          ) : null}
        </div>

        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name} />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
          ) : null}
        </div>

        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price} />
          {formik.touched.price && formik.errors.price ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.price}</div>
          ) : null}
        </div>

        <div>
          <Label htmlFor="productDescription">Product Description</Label>
          <Textarea
            id="productDescription"
            name="productDescription"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.productDescription} />
          {formik.touched.productDescription && formik.errors.productDescription ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.productDescription}</div>
          ) : null}
        </div>

        <div>
          <Label htmlFor="productId">Product ID</Label>
          <Input
            id="productId"
            name="productId"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.productId} />
          {formik.touched.productId && formik.errors.productId ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.productId}</div>
          ) : null}
        </div>

        <Button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>)
  );
}