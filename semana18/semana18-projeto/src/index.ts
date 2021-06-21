import app from "./app"
import anotherUserProfile from "./endpoints/anotherUserProfile"
import createRecipe from "./endpoints/createRecipe"
import createUser from './endpoints/createUser'
import getRecipe from "./endpoints/getRecipe"
import login from './endpoints/login'
import profileUser from './endpoints/profileUser'


app.post('/user/signup', createUser)
app.post('/user/recipe',createRecipe)
app.post('/user/login', login)
app.get('/user/profile',profileUser)
app.get('/user/:id',anotherUserProfile)
app.get('/user/recipe/:id',getRecipe)
