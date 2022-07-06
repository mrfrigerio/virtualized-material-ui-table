import React from "react";
import ReactDOM from "react-dom";

import { createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";

import App from "./App";

/*
react-window virtualized table example

TL;DR: ReactWindowTable.jsx has most of the logic you're looking for.

file structure:
- constants.js
  ROW_HEIGHT: fixed pixel height for table rows
  COLUMNS: table columns config

- data.js
  creates mock data with faker.
  Mock data is generated in App.js prior to rendering so ids are stable.

- App.jsx
  container with a fixed height

- ReactWindowTable
  - TableColumns.jsx
    Renders the header row

  - ReactWindowTable
    This is where most of the logic happens.
    See react-window for FixedSizedList component API.
*/

const theme = createTheme();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
