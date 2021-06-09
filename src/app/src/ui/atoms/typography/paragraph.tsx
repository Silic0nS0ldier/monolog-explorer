import { h } from "preact";

type Props = {
    children: string,
};

export function Paragraph(props: Props) {
    return (
        <p>
            {props.children}
        </p>
    );
}
