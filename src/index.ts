import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Cloudflare Workers! Bun");
});

export default app;
