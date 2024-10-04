import { User, UserCreate, ActionResult } from "./types";

export async function getUsers() {
	const res = await fetch("http://localhost:3001/api/user");
	return res.json() as Promise<User[]>;
}

export async function deleteUser(userId: number) {
	const res = await fetch(`http://localhost:3001/api/user/${userId}/delete`, {
		method: "DELETE",
	});
	const data = (await res.json()) as ActionResult;
	if (res.status >= 400) throw Error(data.message);
	return data;
}

export async function addUser(user: UserCreate) {
	const res = await fetch(`http://localhost:3001/api/user/create`, {
		method: "POST",
		body: JSON.stringify(user),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = (await res.json()) as ActionResult;
	if (res.status >= 400) throw Error(data.message);
	return data;
}
