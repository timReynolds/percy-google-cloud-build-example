import { configure } from "@storybook/react";

function loadStories() {
  require("../stories/components/Button");
  require("../stories/components/Heading");
}

configure(loadStories, module);
