import path from "node:path";
import sql from "better-sqlite3";

const db = sql(path.join(process.cwd(), "data/meals.db"));

const getAllMeals = db.prepare("SELECT * FROM meals");
const getMealBySlug = db.prepare("SELECT * FROM meals WHERE slug = ?");
export type Meal = {
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

export function getMeals(): Meal[] {
  return getAllMeals.all() as Meal[];
}
export function getMealDetails(slug: string): Meal | undefined {
  return getMealBySlug.get(slug) as Meal | undefined;
}
