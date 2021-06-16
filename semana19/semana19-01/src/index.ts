import app from './Controllers/app'
import getAllUsers from './Controllers/getAllUsers'
import login from './Controllers/login'
import signUp from './Controllers/signUp'


app.post("/signup",signUp)
app.post("/login",login)
app.get("/allUsers",getAllUsers)