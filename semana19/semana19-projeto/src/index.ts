import app from './Controllers/app'
import { postRouter } from './Router/postRouter';
import {userRouter} from './Router/userRouter'


app.use("/user",userRouter)
app.use("/post",postRouter);