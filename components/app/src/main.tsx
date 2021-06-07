import { h, render } from "preact";
import { Heading1 } from "./ui/atoms/typeography/heading.js";

function Test() {
    return (
        <div>
            <Heading1>Heading 1</Heading1>
        </div>
    );
}

const target = document.getElementById("app");
if (!target) {
    throw new Error();
}

render(<Test />, target);
