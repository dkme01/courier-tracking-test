import React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { useRowStyles } from "./styles";
import { TrackingInfo } from "../../services/tracking";
import { createData } from "../../pages/Home";
import CustomSteps from "../CustomSteps";

interface CustomTableProps {
  trackingContent: Array<TrackingInfo>;
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.packageCode}
        </TableCell>
        <TableCell
          style={{ color: "#688BC3", fontWeight: "bold" }}
          component="th"
          scope="row"
        >
          {row.status}
        </TableCell>
        <TableCell align="right">{row.clientName}</TableCell>
        <TableCell align="right">
          {new Date(row.updateDate).toLocaleDateString("pt-BR")}
        </TableCell>
        <TableCell align="right">
          {new Date(row.endDateExpectation).toLocaleDateString("pt-BR")}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <CustomSteps activeStep={row.status} />
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontSize: "1.125rem" }}>Code</TableCell>
                    <TableCell style={{ fontSize: "1.125rem" }} align="right">
                      Status
                    </TableCell>
                    <TableCell style={{ fontSize: "1.125rem" }} align="right">
                      ZIP Code
                    </TableCell>
                    <TableCell style={{ fontSize: "1.125rem" }} align="right">
                      City
                    </TableCell>
                    <TableCell style={{ fontSize: "1.125rem" }} align="right">
                      State
                    </TableCell>
                    <TableCell style={{ fontSize: "1.125rem" }} align="right">
                      Client Name
                    </TableCell>
                    <TableCell style={{ fontSize: "1.125rem" }} align="right">
                      Last Update
                    </TableCell>
                    <TableCell style={{ fontSize: "1.125rem" }} align="right">
                      ETA
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{row.packageCode}</TableCell>
                    <TableCell
                      style={{ color: "#688BC3", fontWeight: "bold" }}
                      align="right"
                    >
                      {row.status}
                    </TableCell>
                    <TableCell align="right">{row.zipCode}</TableCell>
                    <TableCell align="right">{row.city}</TableCell>
                    <TableCell align="right">{row.state}</TableCell>
                    <TableCell align="right">{row.clientName}</TableCell>
                    <TableCell align="right">
                      {new Date(row.updateDate).toLocaleDateString("pt-BR")}
                    </TableCell>
                    <TableCell align="right">
                      {new Date(row.endDateExpectation).toLocaleDateString(
                        "pt-BR"
                      )}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export function CustomTable({ trackingContent }: CustomTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell
              style={{
                color: "#688BC3",
                fontSize: "1.025rem",
                fontWeight: "bold",
              }}
            >
              Code
            </TableCell>
            <TableCell
              style={{
                color: "#688BC3",
                fontSize: "1.025rem",
                fontWeight: "bold",
              }}
            >
              Status
            </TableCell>
            <TableCell
              style={{
                color: "#688BC3",
                fontSize: "1.025rem",
                fontWeight: "bold",
              }}
              align="right"
            >
              Client Name
            </TableCell>
            <TableCell
              style={{
                color: "#688BC3",
                fontSize: "1.025rem",
                fontWeight: "bold",
              }}
              align="right"
            >
              Last Update
            </TableCell>
            <TableCell
              style={{
                color: "#688BC3",
                fontSize: "1.025rem",
                fontWeight: "bold",
              }}
              align="right"
            >
              ETA
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trackingContent.map((trackedContent, index) => (
            <Row key={trackedContent.packageCode} row={trackedContent} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
