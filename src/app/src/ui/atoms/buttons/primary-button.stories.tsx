import type { Meta } from "@storybook/preact";
import { PrimaryButton } from "./primary-button.js";

export default {
    title: 'ui/atoms/buttons/primary-button',
    component: PrimaryButton,
    argTypes: {
        children: {
            defaultValue: 'Primary Button',
            name: 'Children',
            control: 'text',
            description: 'Content shown within button',
        }
    }
} as Meta;

export { PrimaryButton };
