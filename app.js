const Koa = require("koa");
const KoaRouter = require("koa-router");
const app = new Koa();
const path = require("path");
const render = require("koa-ejs");

const router = new KoaRouter();

render(app, {
  root: path.join(__dirname, "views"),
  layout: "layout",
  viewExt: "html",
  cache: false,
  debug: false,
});

/* app.use(async (ctx) => (ctx.body = { msg: "Hello World" })); */
router.get("/test", (ctx) => (ctx.body = "Hello Test"));

// Router middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("Server started"));
