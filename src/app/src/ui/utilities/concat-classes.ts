export function concatClasses(...classes: (string|undefined)[]) {
    return classes.filter(c => !!c).join(" ");
}
