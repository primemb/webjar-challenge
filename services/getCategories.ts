import { Category } from "../models/Category";

export const getCategories = async () => {
  try {
    const response = await fetch(
      "https://challenge.webjar.ir/post-categories",
      {
        headers: {
          "content-type": "application/json; charset=utf-8",
        },
      }
    );
    if (response.ok) {
      const data = (await response.json()) as Category[];
      return data;
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    throw error;
  }
};
