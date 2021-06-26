import type { Meta } from "@storybook/preact";
import { Table } from "./table.js";

export default {
    title: 'ui/atoms/table/table',
    component: Table,
    argTypes: {
        columns: {
            defaultValue: [{ key: 'col1' }],
            type: 'object',
        },
        header: {
            defaultValue: {
                rows: [
                    {
                        key: '1',
                        cells: [
                            { key: 'a1', isHeader: true, children: 'A1' },
                            { key: 'b1', children: 'B1' },
                        ],
                    },
                ]
            },
            type: 'object',
        },
        body: {
            defaultValue: {
                rows: [
                    {
                        key: '2',
                        cells: [
                            { key: 'a2', children: 'A2' },
                            { key: 'b2', children: 'B2' },
                        ],
                    },
                    {
                        key: '3',
                        cells: [
                            { key: 'a3', children: 'A3' },
                            { key: 'b3', children: 'B3' },
                        ],
                    },
                    {
                        key: '4',
                        cells: [
                            { key: 'a4', children: 'A4' },
                            { key: 'b4', children: 'B4' },
                        ],
                    },
                ],
            },
            type: 'object',
        },
        footer: {
            defaultValue: {
                rows: [
                    {
                        key: '5',
                        cells: [
                            { key: 'a5', isHeader: true, children: 'A5' },
                            { key: 'b5', children: 'B5'  },
                        ],
                    },
                ],
            },
            type: 'object',
        },
    }
} as Meta;

export { Table };
