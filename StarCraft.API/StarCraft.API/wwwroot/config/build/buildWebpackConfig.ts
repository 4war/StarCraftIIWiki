import webpack from "webpack";
import path from "path";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolve";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;

    return {
        mode,
        entry: {
            bundle: paths.entry
        }, 
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        output: {
            //name - bundle, 
            //[contenthash] - чтобы при каждом билде генерился новый bundle 
            filename: "[name].[contenthash].js", path: paths.build,
            clean: true //чтобы старые билды очищались
        },
        plugins: buildPlugins(options),

        // https://webpack.js.org/guides/development/
        // Чтобы после автосборки можно было найти ошибку в конкретном файле, 
        // когда все они будут собраны в единый файл
        devtool: 'inline-source-map',
        devServer: buildDevServer(options),
    }
}