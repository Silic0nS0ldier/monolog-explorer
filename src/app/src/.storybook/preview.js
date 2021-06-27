import { h } from "preact";

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            icon: 'circlehollow',
            // Array of plain string values or MenuItem shape (see below)
            items: ['light', 'dark'],
            // Property that specifies if the name of the item will be displayed
            showName: true,
        },
    },
};

const darkStyleLinks = Array.from(document.querySelectorAll("link"))
    .filter(link => {
        const media = link.attributes.getNamedItem("media")?.value ?? "";
        return media.includes("prefers-color-scheme") && media.includes("dark");
    });

export const decorators = [
    (Story, context) => {
        const lightTime = context.globals.theme === "light";
        for (const darkStyleLink of darkStyleLinks) {
            darkStyleLink.disabled = lightTime;
        }
        return (
            <div class={context.globals.theme}>
                <Story />
            </div>
        );
    },
];
