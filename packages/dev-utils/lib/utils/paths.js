const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const appDirectoryName = path.basename(appDirectory);
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
];

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(ext =>
    fs.existsSync(resolveFn(`${filePath}.${ext}`))
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

const resolveMain = filePath => {
  if (appDirectoryName === 'app-main') {
    return resolveApp(filePath);
  } else {
    return resolveApp(path.join('../app-main', filePath));
  }
};

const resolveRenderer = filePath => {
  if (appDirectoryName === 'app-renderer') {
    return resolveApp(filePath);
  } else {
    return resolveApp(path.join('../app-renderer', filePath));
  }
};

module.exports = {
  /** 当前应用的路径 */
  appPath: resolveApp('.'),
  appMainPath: resolveMain('.'),
  appRendererPath: resolveRenderer('.'),
  /** 当前应用的 package.json 文件 */
  appPackageJson: resolveApp('package.json'),
  /** 当前应用的静态资源目录 */
  appPublic: resolveApp('public'),
  /** 当前应用的源代码目录，webpackDevServer 会监听该目录的文件变更 */
  appSrc: resolveApp('src'),
  /** 当前页面的入口文件, js/jsx/ts/tsx 皆可 */
  appSrcEntry: resolveModule(resolveApp, 'src/index'),
  /** 当前应用的 tsconfig 配置文件 */
  appTsConfig: resolveApp('tsconfig.json'),
  /** 当前应用的 webpackConfig 配置文件 */
  appWebpackConfig: resolveApp('webpack.config.js'),
  /** app 构建目录 */
  appDist: resolveApp('dist'),
  appMainDist: resolveMain('dist'),
  appRendererDist: resolveRenderer('dist'),
  /** app DLL 目录 */
  appDLL: resolveApp('dll'),
  /** app DLL manifest */
  appDLLManifest: resolveApp('dll/manifest.json'),
  /** main dev */
  appMainDev: resolveMain('dist/main.dev.js'),
  /** main prod */
  appMainProd: resolveMain('dist/main.prod.js'),
  /** renderer dev */
  appRendererDev: resolveRenderer('dist/renderer.dev.js'),
  /** renderer prod */
  appRendererProd: resolveRenderer('dist/renderer.prod.js'),
};
