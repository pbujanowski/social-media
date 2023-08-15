import { Injectable } from "@nestjs/common";

export interface User {
  id: string;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: "910ac5e9-d5e3-4cbb-ba79-5c9c16ca35a4",
      email: "alice@mail.com",
      password: "Alice123",
    },
    {
      id: "75c75dc7-0bbf-45ef-aae0-218be433ba37",
      email: "bob@mail.com",
      password: "Bob123",
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
