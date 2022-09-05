import React, { useState } from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TablePagination,
  TableBody,
  Paper,
  TableContainer,
} from "@mui/material";

import "./ArticlesTable.css";

const columns = [
  {
    id: "author",
    label: "Author Name",
    minWidth: 170,
    color: "#2D314E",
    fontWeight: 500,
    letterSpacing: "normal",
  },
  {
    id: "title",
    label: "Title",
    minWidth: 100,
    color: "#6B7280",
    fontWeight: 400,
    letterSpacing: "-0.02em",
  },
  {
    id: "content",
    label: "Content",
    minWidth: 170,
    color: "#6B7280",
    fontWeight: 400,
    letterSpacing: "-0.02em",
  },
  {
    id: "date",
    label: "Date",
    minWidth: 60,
    color: "#6B7280",
    fontWeight: 400,
    letterSpacing: "normal",
  },
];

const ArticlesTable = (props) => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleEditArticle = (article) => {
    props.onEditArticle(article)
  }

  return (
    <Paper sx={{ width: "80%" }}>
      {props.articles && (
        <>
          <TableContainer sx={{ maxHeight: "440px" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        color: "#6B7280",
                        fontWeight: "400",
                        fontSize: "12px",
                        lineHeight: "16px",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                  <TableCell
                    key={"action"}
                    style={{ mindWidth: 170 }}
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.articles
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align="left"
                              sx={{
                                fontfamily: "Public Sans, sans-serif",
                                fontStyle: "normal",
                                color: column.color,
                                fontWeight: column.fontWeight,
                                fontSize: "14px",
                                lineHeight: "20px",
                                letterSpacing: column.letterSpacing,
                              }}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                        <button className="editbutton" onClick={()=>handleEditArticle(row)}>Edit</button>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[6, 10, 15, 20, 25, 50, 100]}
            component="div"
            count={props.articles.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </Paper>
  );
};

export default ArticlesTable;
