export interface User {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
}

export type UserCreate = Omit<User, "id">;

export type ActionResult =
	| {
			status: "success";
			message: string;
	  }
	| {
			status: "error";
			message: string;
	  };
