const sql = require("better-sqlite3");

const db = sql("data/meals.db");

const dummyMeals = [
  {
    title: "Juicy Cheese Burger",
    slug: "juicy-cheese-burger",
    image: "/food-images/burger.jpg",
    summary: "A juicy beef patty with melted cheese, served in a soft bun.",
    creator: "John Doe",
  },
  {
    title: "Spicy Curry",
    slug: "spicy-curry",
    image: "/food-images/curry.jpg",
    summary: "A rich curry with warm spices and a creamy coconut sauce.",
    creator: "Dmitriy",
  },
  {
    title: "Classic Mac and Cheese",
    slug: "mac-and-cheese",
    image: "/food-images/macncheese.jpg",
    summary: "Creamy cheddar sauce folded through tender pasta.",
    creator: "Laura",
  },
  {
    title: "Homemade Pizza",
    slug: "homemade-pizza",
    image: "/food-images/pizza.jpg",
    summary: "A crisp crust topped with tomato, cheese, and fresh herbs.",
    creator: "Mario",
  },
  {
    title: "Wiener Schnitzel",
    slug: "wiener-schnitzel",
    image: "/food-images/schnitzel.jpg",
    summary: "Crispy breaded cutlet with a squeeze of lemon.",
    creator: "Franz",
  },
  {
    title: "Fresh Tomato Salad",
    slug: "tomato-salad",
    image: "/food-images/tomato-salad.jpg",
    summary: "Ripe tomatoes, olive oil, and basil, served chilled.",
    creator: "Sophia",
  },
];

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS meals (
    slug TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    creator TEXT NOT NULL
  )
`,
).run();

function initData() {
  const stmt = db.prepare(`
    INSERT OR REPLACE INTO meals (slug, title, image, summary, creator)
    VALUES (@slug, @title, @image, @summary, @creator)
  `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
