import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import createAdress from "./endpoints/createAdress"
import PassReset from "./endpoints/PassReset"



app.post('/user/signup', createUser);
app.post('/user/login', login);
app.put('/user/edit', editUser);
app.post('/user/createadress',createAdress);
app.post('/user/resetpass',PassReset);