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
import { Link } from "react-router-dom";
import "../../styles/complix/table.css";

function createData(id, name, calories) {
  return {id , name, calories };
}

const rows = [
  createData(1, "Frozen yoghurt", 159),
  createData(2, "Ice cream sandwich", 237),
  createData(3, "Eclair", 262),
  createData(4, "Cupcake", 305),
  createData(5, "Gingerbread", 356),
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
                <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="col">
                    <Link className="myLink" to={`/reports/${row.id}`}>
                      {row.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link className="myLink" to={`/reports/${row.id}`}>
                      {row.calories}
                    </Link>
                  </TableCell>
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
