import * as Eta from "eta";
import fastify_ from "fastify";
import viewsPlugin from "@fastify/view";

const fastify = fastify_();

fastify.register(viewsPlugin, {
  engine: {
    eta: new Eta.Eta(),
  },
  templates: "templates",
  options: { useWith: true },
});

fastify.get("/", (req, res) => {
  res.view("./index", { text: "text" });
});

await fastify.listen({ port: 3003, host: "0.0.0.0" });
