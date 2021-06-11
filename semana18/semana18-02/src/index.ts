import app from './App'
import { userCreateLogin } from './endpoints/UserCreateLogin'
import { userEdit } from './endpoints/UserEdit'
import { userLogin } from './endpoints/UserLogin'

app.post("/userCreateLogin",userCreateLogin)
app.post("/userLogin",userLogin)
app.post("/userEdit",userEdit)