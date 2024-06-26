export type User = {
  id: number;
  username: string;
  email: string;
};

const temporaryUsers: Array<User> = [
  {
    id: 1,
    username: "u1_butterfly",
    email: "u1@u.email",
  },
  {
    id: 2,
    username: "u2_moth",
    email: "u2@u.email",
  },
  {
    id: 3,
    username: "u3_caterpillar",
    email: "u3@u.email",
  },
];

// This is a mock database interface. Replace with actual database code as needed.
const users: User[] = temporaryUsers;

const getUserById = async (id: number): Promise<User | undefined> => {
  return users.find((user) => user.id === id);
};

const createUser = async (user: Omit<User, "id">): Promise<User> => {
  const newUser = { id: users.length + 1, ...user };
  users.push(newUser);
  return newUser;
};

export default {
  getUserById,
  createUser,
};
