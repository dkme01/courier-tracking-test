import { Grid, Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { CustomSearchBar } from "../../components/CustomSearchBar";
import { CustomTable } from "../../components/CustomTable";
import { TrackingInfo, TrackingStatusEnum } from "../../services/tracking";

const styles = (theme: any) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.black,
    },
  },
  appBar: {
    position: "relative",
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: "70vw",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  heroContent: {
    maxWidth: 800,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

export function createData(trackedContent: TrackingInfo) {
  return {
    clientName: trackedContent.clientName,
    packageCode: trackedContent.packageCode,
    zipCode: trackedContent.zipCode,
    city: trackedContent.city,
    state: trackedContent.state,
    status: trackedContent.status,
    updateDate: trackedContent.updateDate,
    endDateExpectation: trackedContent.endDateExpectation,
  };
}

const rows = [
  createData({
    clientName: "João da Silva",
    packageCode: "BY193561737BR",
    zipCode: "19372-615",
    city: "Presidente Prudente",
    state: "SP",
    status: TrackingStatusEnum.delivered,
    updateDate: "2023-02-17",
    endDateExpectation: "2023-02-01",
  }),
  createData({
    clientName: "Marcos Souza",
    packageCode: "BY315748597BR",
    zipCode: "19100-702",
    city: "Resende",
    state: "RJ",
    status: TrackingStatusEnum.onTravel,
    updateDate: "2023-03-21",
    endDateExpectation: "2023-02-27",
  }),
  createData({
    clientName: "Carlos Oliveira",
    packageCode: "BY944798915BR",
    zipCode: "19322-936",
    city: "Maringa",
    state: "PR",
    status: TrackingStatusEnum.delivered,
    updateDate: "2023-03-31",
    endDateExpectation: "2023-05-13",
  }),
  createData({
    clientName: "José Moura",
    packageCode: "BY288354425BR",
    zipCode: "19950-387",
    city: "Bauru",
    state: "SP",
    status: TrackingStatusEnum.onTravel,
    updateDate: "2023-11-29",
    endDateExpectation: "2023-08-03",
  }),
  createData({
    clientName: "Joaquim Lima",
    packageCode: "BY994562259BR",
    zipCode: "19650-266",
    city: "Florianópolis",
    state: "SC",
    status: TrackingStatusEnum.invoiceEmmit,
    updateDate: "2023-12-26",
    endDateExpectation: "2023-10-20",
  }),
];

function Home(props: any) {
  const { classes } = props;
  const [trackingContent, setTrackingContent] = useState<Array<TrackingInfo>>(
    []
  );

  const handleSearch = (searchString: string) => {
    const filteredRows = rows.filter((row) =>
      row.packageCode.includes(searchString)
    );
    if (searchString.length > 0 && filteredRows.length === 0) {
      setTrackingContent(rows);
    } else if (filteredRows.length > 0) {
      setTrackingContent(filteredRows);
    } else {
      setTrackingContent([]);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <div className={classes.heroContent}>
          <Typography
            component="h1"
            variant="h1"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Courier Tracking
          </Typography>
          <CustomSearchBar handleSearch={handleSearch} />
        </div>
        <Grid container style={{ marginTop: 10 }}>
          {trackingContent.length > 0 ? (
            <CustomTable trackingContent={trackingContent} />
          ) : (
            <div className={classes.heroContent}>
              <Typography
                component="h3"
                variant="h4"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                No packages found
              </Typography>
            </div>
          )}
        </Grid>
      </main>
      <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map((item) => (
                <Typography
                  key={item}
                  variant="subtitle1"
                  color="textSecondary"
                >
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </footer>
    </React.Fragment>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles as any)(Home);
