import { h } from "preact";

type Props = {
    children: string,
};

export function Heading1(props: Props) {
    return (
        <h1>
            {props.children}
        </h1>
    )
}
