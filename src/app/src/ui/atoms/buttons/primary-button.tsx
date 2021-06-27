import { concatClasses } from "../../utilities/concat-classes.js";
import { ButtonProps, renderButton } from "./button.js";

export const PrimaryButton = (props: ButtonProps) => renderButton({
    ...props,
    class: concatClasses("primary", props.class),
});
