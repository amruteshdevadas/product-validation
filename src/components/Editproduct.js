import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import ProductContext from "./ProductContext";
import { useContext } from "react";
import { useHistory } from "react-router";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

function Editproduct(props) {
  let history = useHistory();
  let productContext = useContext(ProductContext);

  let id = props.match.params.id;

  let productData = productContext.productList[id - 1];

  const [val, setVal] = useState({
    productName: productData.productName,
    productDescription: productData.productDescription,
    image: productData.image,
    sellingPrice: productData.sellingPrice,
    category: productData.category,
  });

  function handleSubmit(e) {
    productData.productName = e.productName;
    productData.productDescription = e.productDescription;
    productData.image = e.image;
    productData.sellingPrice = e.sellingPrice;
    productData.category = e.category;
    history.push("/");
  }

  const validationSchema = yup.object({
    productName: yup
      .string()
      .required("required")
      .max(150, "max of 15 characters length")
      .min(3, "min of 3 characters length"),

    productDescription: yup
      .string()
      .required("Please Enter Last Name")
      .max(150, "max of 150 characters")
      .min(3, "min of 3 characters"),

    image: yup.string("Enter image URL").url("required"),
    category: yup
      .string("Enter Category")
      .min(4, "mini 4 characters")
      .required("required"),

    sellingPrice: yup.number("Enter price").required("required"),
  });

  const formik = useFormik({
    initialValues: val,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  const fields = [
    {
      name: "productName",
      label: "Product Name",
      required: true,
      hidden: true,
      data_type: "String",
      multiline: true,
      error: Boolean(formik.touched.productName && formik.errors.productName),
      helperText: formik.touched.productName && formik.errors.productName,
      value: formik.values.productName,
    },
    {
      name: "image",
      label: "Image Url",
      hidden: false,
      required: true,
      data_type: "String",
      error: false,
      multiline: true,
      error: Boolean(formik.touched.image && formik.errors.image),
      helperText: formik.touched.image && formik.errors.image,
      value: formik.values.image,
    },
    {
      name: "sellingPrice",
      label: "Selling Price",
      hidden: false,
      required: true,
      data_type: "Number",
      error: false,
      multiline: true,
      error: Boolean(formik.touched.sellingPrice && formik.errors.sellingPrice),
      helperText: formik.touched.sellingPrice && formik.errors.sellingPrice,
      value: formik.values.sellingPrice,
    },
    {
      name: "productDescription",
      label: "Product Description",
      hidden: false,
      required: true,
      data_type: "String",
      error: false,
      multiline: true,
      error: Boolean(
        formik.touched.productDescription && formik.errors.productDescription
      ),
      helperText:
        formik.touched.productDescription && formik.errors.productDescription,
      value: formik.values.productDescription,
    },
    {
      name: "category",
      label: "Category",
      hidden: false,
      required: true,
      data_type: "String",
      error: false,
      multiline: true,
      error: Boolean(formik.touched.category && formik.errors.category),
      helperText: formik.touched.category && formik.errors.category,
      value: formik.values.category,
    },
  ];

  return (
    <form onSubmit={formik.handleSubmit}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <ModeEditIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Product
          </Typography>

          <Box sx={{ mt: 3 }} noValidate>
            <Grid container spacing={2}>
              {fields.map((item) => {
                return (
                  <Grid item xs={12} key={item.name}>
                    <TextField
                      name={item.name}
                      fullWidth
                      label={item.label}
                      onChange={formik.handleChange}
                      error={item.error}
                      required={item.required}
                      helperText={item.helperText}
                      multiline={item.multiline ? true : false}
                      variant="outlined"
                      value={item.value}
                    />
                  </Grid>
                );
              })}
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit Product
            </Button>
          </Box>
        </Box>
      </Container>
    </form>
  );
}

export default Editproduct;
