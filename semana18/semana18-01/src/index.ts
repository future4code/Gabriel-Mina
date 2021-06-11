import app from './app'
import createuser from './enpoints/createUser'
import { editUser } from './enpoints/editUser'
import { userLogin } from './enpoints/UserLogin'

app.post("/criar-usuario-token",createuser)
app.post("/login-usuario-token",userLogin)
app.post("/editar-usuario-token",editUser)
 