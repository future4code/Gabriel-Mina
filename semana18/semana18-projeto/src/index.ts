import app from "./app"
import anotherUserProfile from "./endpoints/anotherUserProfile"
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import profileUser from './endpoints/profileUser'


app.post('/user/signup', createUser)
app.post('/user/login', login)
app.get('/user/profile',profileUser)
app.get('/user/:id',anotherUserProfile)