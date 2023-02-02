const express = require('express');
const userController = require('./controllers/UserController');

const app = express();
app.use(express.json());

app.get('/', userController.getHomePage);
app.get('/users', userController.getUserById);
app.post('/users', userController.postUser);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});