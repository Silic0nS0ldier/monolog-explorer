import { h } from "preact";

type Props = {
    children: string,
};

export function StandardButton(props: Props) {
    return (
        <button>
            {props.children}
        </button>
    )
}
