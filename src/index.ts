import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Cloudflare Workers! Bun JS");
});

export default app;
