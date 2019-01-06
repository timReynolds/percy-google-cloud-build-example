import React from "react";
import { storiesOf } from "@storybook/react";

import Heading from "../../src/components/Heading";

storiesOf("Components/Heading", module)
  .add("default", () => <Heading>Heading</Heading>);;
