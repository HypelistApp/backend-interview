export type User = {
  id: number;
  username: string;
  email: string;
};

// This is a mock database interface. Replace with actual database code as needed.
const users: User[] = [];

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
