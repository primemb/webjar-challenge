import { Post } from "../models/Post";

export const getPosts = async () => {
  try {
    const response = await fetch("https://challenge.webjar.ir/posts", {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    });
    if (response.ok) {
      const data = (await response.json()) as Post[];
      return data;
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    throw error;
  }
};
