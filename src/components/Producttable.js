import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ProductContext from "./ProductContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

export default function Producttable() {
  const columns = [
    { id: 1, label: "ID" },
    { id: 2, label: "Product Name" },
    { id: 3, label: "Selling Price" },
    { id: 4, label: "Category" },
    { id: 5, label: "Product Description" },
    { id: 6, label: "Image" },
    { id: 7, label: "Action" },
  ];

  let productContext = useContext(ProductContext);
  let rows = productContext.productList;
  let history = useHistory();
  const handleSubmit = (e) => {
    let id = e;
    history.push(`/edit/${id}`);
  };

  const handleDelete = (e) => {
    // console.log(e)

    let confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      productContext.productList.splice(e - 1, 1);
      productContext.setProductList([...productContext.productList]);
    }
  };
  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.productName}</TableCell>
                  <TableCell>{row.sellingPrice}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.productDescription}</TableCell>
                  <TableCell>
                    <img
                      width="100"
                      src={`${row.image}?w=248&fit=crop&auto=format`}
                      srcSet={`${row.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      loading="lazy"
                    />
                  </TableCell>
                  <TableCell>
                    {
                      <>
                        <Button
                          startIcon={<EditIcon />}
                          variant="contained"
                          onClick={() => {
                            handleSubmit(index + 1);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={<DeleteIcon />}
                          onClick={() => {
                            handleDelete(index + 1);
                          }}
                        >
                          Delete
                        </Button>
                      </>
                    }
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
