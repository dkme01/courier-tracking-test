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
        <TableCell component="th" scope="row">
          {row.status}
        </TableCell>
        <TableCell align="right">{row.clientName}</TableCell>
        <TableCell align="right">{row.updateDate}</TableCell>
        <TableCell align="right">{row.endDateExpectation}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Code</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">ZIP Code</TableCell>
                    <TableCell align="right">City</TableCell>
                    <TableCell align="right">State</TableCell>
                    <TableCell align="right">Client Name</TableCell>
                    <TableCell align="right">Last Update</TableCell>
                    <TableCell align="right">ETA</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{row.packageCode}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                    <TableCell align="right">{row.zipCode}</TableCell>
                    <TableCell align="right">{row.city}</TableCell>
                    <TableCell align="right">{row.state}</TableCell>
                    <TableCell align="right">{row.clientName}</TableCell>
                    <TableCell align="right">{row.updateDate}</TableCell>
                    <TableCell align="right">
                      {row.endDateExpectation}
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
            <TableCell>Code</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Client Name</TableCell>
            <TableCell align="right">Last Update</TableCell>
            <TableCell align="right">ETA</TableCell>
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
