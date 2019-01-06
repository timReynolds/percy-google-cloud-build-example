import React, { Component } from "react";

import Box from "./components/Box";
import Heading from "./components/Heading";
import Button from "./components/Button";

class App extends Component {
  render() {
    return (
      <Box mx="auto" maxWidth="700px">
        <Heading fontSize={6}>Percy.io Google Cloud Build Example</Heading>
        <Button href="https://percy.io/" bg="#9e66bf" m={2}>Percy</Button>
        <Button href=" https://cloud.google.com/cloud-build/" bg="#1a73e8" m={2}>Google Cloud Build</Button>
       
      </Box>
    );
  }
}

export default App;
