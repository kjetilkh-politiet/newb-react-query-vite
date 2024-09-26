export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export type UserCreate = Omit<User, "id">;

export type UserCreateResult =
  | {
      status: "success";
      user: User;
      message: string;
    }
  | {
      status: "error";
      message: string;
    };
