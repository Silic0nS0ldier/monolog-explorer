import type { Meta } from "@storybook/preact";
import { StandardButton } from "./standard-button.js";

export default {
    title: 'ui/atoms/buttons/standard-button',
    component: StandardButton,
    argTypes: {
        children: {
            defaultValue: 'Standard Button',
            name: 'Children',
            control: 'text',
            description: 'Content shown within button',
        }
    }
} as Meta;

export { StandardButton };
