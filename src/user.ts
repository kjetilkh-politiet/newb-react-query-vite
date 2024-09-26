import { User } from "./types";

export async function getUsers() {
  const res = await fetch("http://localhost:3001/api/user");
  return res.json() as Promise<User[]>;
}
