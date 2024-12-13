import express from "express";
import { serveStatic, staticRoutes } from "./routes";

class App {
  public server;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(staticRoutes, serveStatic);
    this.server.use((req, res) => {
      res.status(404).send(req.url + " Asset not found");
    });
  }
}

export default new App().server;
