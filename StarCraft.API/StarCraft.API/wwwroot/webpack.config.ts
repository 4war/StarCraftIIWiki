import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPaths } from "./config/build/types/config";

const paths: BuildPaths = { 
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = 'development';
const isDevelopment = mode === 'development';
const port = 3000;

const config: webpack.Configuration = buildWebpackConfig({
    mode: "development",
    paths: paths,
    isDevelopment,
    port,
});

export default config;