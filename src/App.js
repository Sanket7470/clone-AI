import React from "react";
import Sidebar from "./components/Sidebar";
import Input from "./components/Input";
import { Box, Grid } from "@mui/material";

function App() {
  return (
    <Box>
      <Grid container>
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <Sidebar />
        </Grid>
        <Grid item lg={9} md={9} sm={9} xs={9}>
          <Box style={{margin:'10px'}}> <Input /></Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
