import app from './Controllers/app'
import {userRouter} from './Router/userRouter'


app.use("/user",userRouter)