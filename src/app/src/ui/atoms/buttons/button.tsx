import { h } from "preact";

export type ButtonProps = {
    children: string,
    class?: string,
};

export function renderButton(props: ButtonProps) {
    return (
        <button class={props.class}>
            {props.children}
        </button>
    );
}
