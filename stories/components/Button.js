import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../../src/components/Button";

storiesOf("Components/Button", module)
  .add("default", () => <Button>Hello Button</Button>)
  .add("with emoji", () => <Button>😀 😎 👍 💯</Button>)
  .add("as a", () => <Button as="a">Link</Button>)
  .add("hot pink", () => <Button bg="#ff0066">Hello Button</Button>);
