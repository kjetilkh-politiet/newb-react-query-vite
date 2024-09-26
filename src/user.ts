import { User, UserCreate, UserCreateResult } from "./types";

export async function getUsers() {
  const res = await fetch("http://localhost:3001/api/user");
  return res.json() as Promise<User[]>;
}

export async function deleteUser(userId: number) {
  const res = await fetch(`http://localhost:3001/api/user/${userId}/delete`, {
    method: "DELETE",
  });
  return res.json() as Promise<boolean>;
}

export async function addUser(user: UserCreate) {
  const res = await fetch(`http://localhost:3001/api/user/create`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json() as Promise<UserCreateResult>;
}
