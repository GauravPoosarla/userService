let users = [];
let id = 0;

exports.getUserById = (id) => {
  return users.find(user => user.id === id);
};

exports.postUser = (name, age) => {
  const user = {
    id: id++,
    name,
    age
  };
  users.push(user);
  return user;
};