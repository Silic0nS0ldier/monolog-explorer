import { esbuildPlugin } from "@web/dev-server-esbuild";

export default {
    nodeResolve: true,
    open: true,
    plugins: [
        esbuildPlugin({
            loaders: {
                ".tsx": "tsx",
                ".ts": "ts",
                ".js": "jsx",
            },
            jsxFactory: "h",
            jsxFragment: "Fragment",
        }),
    ],
};
