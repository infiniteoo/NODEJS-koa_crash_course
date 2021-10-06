const Koa = require("koa");
const KoaRouter = require("koa-router");
const app = new Koa();

const router = new KoaRouter();

/* app.use(async (ctx) => (ctx.body = { msg: "Hello World" })); */
router.get("/test", (ctx) => (ctx.body = "Hello Test"));

// Router middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("Server started"));
