import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MuiRTL from "../ui/MuiRTL";
import MuiTheme from "../ui/MuiTheme";

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Gingerbread", 356),
];

function MyTable() {
  return (
    <MuiRTL>
      <MuiTheme>
        <TableContainer
          component={Paper}
          sx={{ background: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(1px)", borderRadius: "15px" }}
        >
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>موقعیت</TableCell>
                <TableCell>عملکرد</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="col">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.calories}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MuiTheme>
    </MuiRTL>
  );
}

export default MyTable;
