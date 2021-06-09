import { h } from "preact";

type Props = {
    children: string,
};

export function PrimaryButton(props: Props) {
    return (
        <button class="primary">
            {props.children}
        </button>
    )
}
