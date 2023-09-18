import { Express } from "express";
export const ExpressConnection = {
  init(app: Express) {
    app.get("/", (req, res) => {
      res.end("app running...");
    });
  },
};
