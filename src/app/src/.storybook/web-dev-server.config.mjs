import { storybookPlugin } from "@web/dev-server-storybook";
import baseConfig from "../../web-dev-server.config.mjs"

baseConfig.plugins.push(storybookPlugin({ type: "preact", configDir: "./src/.storybook" }));

export default baseConfig;
