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

export function Heading2(props: Props) {
    return (
        <h2>
            {props.children}
        </h2>
    )
}
