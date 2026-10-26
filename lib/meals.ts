type Meal = {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
};

const meals: Meal[] = [
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
    creator: "Maximilian",
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

export function getMeals() {
  return meals;
}

export function getMealDetails(slug: string) {
  return getMeals().find((meal) => meal.slug === slug);
}

export function getMealTitle(slug: string) {
  return getMeals().find((meal) => meal.slug === slug)?.title || "";
}

export function getMealImage(slug: string) {
  return getMeals().find((meal) => meal.slug === slug)?.image || "";
}

export function getMealSummary(slug: string) {
  return getMeals().find((meal) => meal.slug === slug)?.summary || "";
}

export function getMealCreator(slug: string) {
  return getMeals().find((meal) => meal.slug === slug)?.creator || "";
}
