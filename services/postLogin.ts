import { Auth } from "../models/Auth";

export const postLogin = async (username: string, password: string) => {
  try {
    const response = await fetch("https://challenge.webjar.ir/auth/login", {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ userName: username, password }),
    });

    if (response.ok) {
      const data = (await response.json()) as Auth;
      return data;
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    throw error;
  }
};
