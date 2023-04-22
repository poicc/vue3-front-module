import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path, { join } from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig({
    build: {
        target: 'modules',
        //打包文件目录
        outDir: 'es',
        //压缩
        minify: false,
        //css分离
        //cssCodeSplit: true,
        rollupOptions: {
            //忽略打包vue文件
            external: ['vue'],
            input: ['src/index.ts'],
            output: [
                {
                    format: 'es',
                    //不用打包成.es.js,这里我们想把它打包成.js
                    entryFileNames: '[name].js',
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    //配置打包根目录
                    dir: 'es',
                    preserveModulesRoot: 'src',
                },
                {
                    format: 'cjs',
                    entryFileNames: '[name].js',
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    //配置打包根目录
                    dir: 'lib',
                    preserveModulesRoot: 'src',
                },
            ],
        },
        lib: {
            entry: 'src/index.ts',
            formats: ['es', 'cjs'],
        },
    },
    plugins: [
        vue(),
        createSvgIconsPlugin({
            // 指定需要缓存的图标文件夹
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            // 指定 symbleId 格式
            symbolId: 'icon-[name]',
        }),
        dts({
            //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
            tsConfigFilePath: '../../tsconfig.json',
        }),
        //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
        dts({
            outputDir: 'lib',
            tsConfigFilePath: '../../tsconfig.json',
        }),
    ],
    // 软链接
    resolve: {
        alias: {
            '@': join(__dirname, '/src'),
        },
    },
});
