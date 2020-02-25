const exitHook = require('async-exit-hook');
const env = require('../utils/env');
const createWebpackCompiler = require('../utils/createWebpackCompiler');

/** 启用 webpack watch dev */
module.exports = (webpackConfig, onCompiled) => {
  const compiler = createWebpackCompiler({
    config: webpackConfig,
    useTypeScript: !env.disableTsCheck,
    tscCompileOnError: env.compileOnTsError,
    onCompiled,
  });

  const watching = compiler.watch(
    {
      aggregateTimeout: 300,
      poll: undefined,
    },
    () => {}
  );

  exitHook(() => {
    watching.close();
  });

  return watching;
};
