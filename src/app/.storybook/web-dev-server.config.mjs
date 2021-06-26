import { storybookPlugin } from '@web/dev-server-storybook';
import baseConfig from "../web-dev-server.config.mjs"

baseConfig.plugins.push(storybookPlugin({ type: 'preact' }));

export default baseConfig;
