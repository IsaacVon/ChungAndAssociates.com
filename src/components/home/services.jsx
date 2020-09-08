import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';

import Typography from "@material-ui/core/Typography";
import image3 from "../../images/3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#ABE4F0",
    position: "relative",
    overflow: "auto",
    maxHeight: 400,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    fontSize: "12px",
    backgroundColor: "inherit",
    padding: 0,
  },
}));

export default function Services() {
  const classes = useStyles();

  const services = [
    "Performance Assessment",
    "Business Planning & Oversight",
    "Financial Modeling & Benchmark Development",
    "Financial Statement Compilation & Review",
    "Organization Structure, Process Design & Implementation",
    "Operations & Controls Assessment & Attestation",
    "Acquisition Review & Valuation",
    "Due Diligence for Acquisition",
    "Mergers Implementation & Business Consolidation",
    "Resource & Human Capital Alignment",
    "Leadership Coaching & Development",
    "Next Generation Development",
    "Succession Planning",
    "Professional Outsourcing & Support",
  ];

  return (
    <>
      <img width="100%" src={image3} alt="Office" />

      <Typography variant="h6">Services We Offer.</Typography>
      <Typography variant="body1">• • •</Typography>
      <List className={classes.root} subheader={<li />}>
        <li className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{"Services We Offer."}</ListSubheader>
            {services.map((item) => (
              <ListItem>
                <ListItemIcon>
                <RemoveOutlinedIcon />
              </ListItemIcon>
                <ListItemText key={`${item}`} primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      </List>
    </>
  );
}
