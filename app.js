const Koa = require("koa");
const KoaRouter = require("koa-router");
const app = new Koa();
const path = require("path");
const render = require("koa-ejs");
const bodyParser = require("koa-bodyparser");

const router = new KoaRouter();

// replace with database
const things = ["My family", "Programming", "Music"];

// bodyparser middleware
app.use(bodyParser());

render(app, {
  root: path.join(__dirname, "views"),
  layout: "layout",
  viewExt: "html",
  cache: false,
  debug: false,
});

// Routes
router.get("/", index);
router.get("/add", showAdd);
router.post("/add", add);

// list of things
async function index(ctx) {
  await ctx.render("index", {
    title: "Things I Love",
    things: things,
  });
}

// show add page
async function showAdd(ctx) {
  await ctx.render("add");
}

// add thing
async function add(ctx) {
  const body = ctx.request.body;
  things.push(body.thing);
  ctx.redirect("/");
}

/* app.use(async (ctx) => (ctx.body = { msg: "Hello World" })); */
router.get("/test", (ctx) => (ctx.body = "Hello Test"));

// Router middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("Server started"));
