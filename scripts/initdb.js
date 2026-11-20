const sql = require("better-sqlite3");

const db = sql("data/meals.db");

const dummyMeals = [
  {
    title: "Juicy Cheese Burger",
    slug: "juicy-cheese-burger",
    image: "/food-images/burger.jpg",
    summary: "A juicy beef patty with melted cheese, served in a soft bun.",
    instructions:
      "Season the beef and form it into a patty. Cook it in a hot pan until browned on both sides, then melt the cheese over the top. Toast the bun and assemble the burger.",
    creator: "John Doe",
    creator_email: "john.doe@example.com",
  },
  {
    title: "Spicy Curry",
    slug: "spicy-curry",
    image: "/food-images/curry.jpg",
    summary: "A rich curry with warm spices and a creamy coconut sauce.",
    instructions:
      "Warm the spices in oil, then stir in the vegetables and coconut sauce. Simmer until the sauce thickens. Serve over rice.",
    creator: "Dmitriy",
    creator_email: "dmitriy@example.com",
  },
  {
    title: "Classic Mac and Cheese",
    slug: "mac-and-cheese",
    image: "/food-images/macncheese.jpg",
    summary: "Creamy cheddar sauce folded through tender pasta.",
    instructions:
      "Boil the pasta until tender. Stir it into a cheddar sauce, then bake until the top is bubbling.",
    creator: "Laura",
    creator_email: "laura@example.com",
  },
  {
    title: "Homemade Pizza",
    slug: "homemade-pizza",
    image: "/food-images/pizza.jpg",
    summary: "A crisp crust topped with tomato, cheese, and fresh herbs.",
    instructions:
      "Stretch the dough, spread on the tomato, and add the cheese and herbs. Bake on a hot stone until the crust is crisp.",
    creator: "Mario",
    creator_email: "mario@example.com",
  },
  {
    title: "Wiener Schnitzel",
    slug: "wiener-schnitzel",
    image: "/food-images/schnitzel.jpg",
    summary: "Crispy breaded cutlet with a squeeze of lemon.",
    instructions:
      "Pound the cutlet thin, coat it in breadcrumbs, and fry it until golden. Finish with lemon.",
    creator: "Franz",
    creator_email: "franz@example.com",
  },
  {
    title: "Fresh Tomato Salad",
    slug: "tomato-salad",
    image: "/food-images/tomato-salad.jpg",
    summary: "Ripe tomatoes, olive oil, and basil, served chilled.",
    instructions:
      "Slice the tomatoes, dress them with olive oil, salt, and basil, and chill before serving.",
    creator: "Sophia",
    creator_email: "sophia@example.com",
  },
];

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS meals (
    slug TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    instructions TEXT NOT NULL,
    creator TEXT NOT NULL,
    creator_email TEXT NOT NULL
  )
`,
).run();

function initData() {
  const stmt = db.prepare(`
    INSERT OR REPLACE INTO meals (
      slug,
      title,
      image,
      summary,
      instructions,
      creator,
      creator_email
    )
    VALUES (
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )
  `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }

  const rows = db.prepare("SELECT slug FROM meals").all();
  const seedSlugs = new Set(dummyMeals.map((meal) => meal.slug));
  const deleteMeal = db.prepare("DELETE FROM meals WHERE slug = ?");

  for (const row of rows) {
    if (!seedSlugs.has(row.slug)) {
      deleteMeal.run(row.slug);
    }
  }
}

initData();
