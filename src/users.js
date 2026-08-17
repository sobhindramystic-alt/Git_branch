const users = [
  {
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "Sarah"
  }
];

export function getUsers() {
  return users;
}

export function findUser(id) {
  return users.find(user => user.id === id);
}