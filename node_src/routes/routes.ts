import express from "express";
import serveIndex from "serve-index";

const staticRoutes = express.static("node_src/static", {
  cacheControl: true,
  maxAge: "30d",
  etag: true,
});
const serveStatic = serveIndex("node_src/static");
export { staticRoutes, serveStatic };
