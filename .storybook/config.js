import { configure, getStorybook, setAddon } from "@storybook/react";
import createPercyAddon from "@percy-io/percy-storybook";

const { percyAddon, serializeStories } = createPercyAddon();

function loadStories() {
  require("../stories/components/Button");
  require("../stories/components/Heading");
}

setAddon(percyAddon);

configure(loadStories, module);

serializeStories(getStorybook);
