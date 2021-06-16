import app from './Controller/app'
import { accountRouter } from './Router/accountRouter'

app.use("/account",accountRouter);


