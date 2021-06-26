import type { Meta } from "@storybook/preact";
import { Paragraph } from "./paragraph.js";

export default {
    title: 'ui/atoms/typography/paragraph',
    component: Paragraph,
    argTypes: {
        children: {
            defaultValue: 'The quick brown fox jumps over the lazy dog.',
            name: 'Children',
            control: 'text',
            description: 'Content shown within paragraph',
        }
    }
} as Meta;

export { Paragraph };
