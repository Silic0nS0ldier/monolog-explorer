import type { Meta } from "@storybook/preact";
import { Heading1, Heading2 } from "./headings.js";

export default {
    title: 'ui/atoms/typography/headings',
    argTypes: {
        children: {
            defaultValue: 'Heading',
            name: 'Children',
            control: 'text',
            description: 'Content shown within heading',
        }
    }
} as Meta;

export { Heading1, Heading2 };
