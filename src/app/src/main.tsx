import { h, render } from "preact";
import "preact/debug";
import { PrimaryButton } from "./ui/atoms/buttons/primary-button.js";
import { StandardButton } from "./ui/atoms/buttons/standard-button.js";
import { Table } from "./ui/atoms/table/table.js";
import { Heading1, Heading2 } from "./ui/atoms/typography/headings.js";

function App() {
    return (
        <div>
            <Heading1>Heading 1</Heading1>
            <Heading2>Heading 2</Heading2>
            <PrimaryButton>Primary Button</PrimaryButton>
            <StandardButton>Standard Button</StandardButton>
            <Table
                columns={[
                    { key: 'col1' }
                ]}
                header={{
                    rows: [
                        {
                            key: '1',
                            cells: [
                                { key: 'a1', isHeader: true, children: 'A1' },
                                { key: 'b1', children: 'B1' },
                            ],
                        },
                    ]
                }}
                body={{
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
                }}
                footer={{
                    rows: [
                        {
                            key: '5',
                            cells: [
                                { key: 'a5', isHeader: true, children: 'A5' },
                                { key: 'b5', children: 'B5'  },
                            ],
                        },
                    ],
                }}
            />
        </div>
    );
}

const target = document.getElementById("app");
if (!target) {
    throw new Error();
}

render(<App />, target);
