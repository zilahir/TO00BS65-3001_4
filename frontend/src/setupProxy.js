const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://host.docker.internal:30014/api",
      pathRewrite: { "^/api": "" },
    }),
  );
};
