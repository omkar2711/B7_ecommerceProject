import express from 'express';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import authRouter from './routes/authRoutes.js';
import { databaseConnection } from './dbConnect/databaseConnection.js'


import 'dotenv/config'



const app = express()
const port = 3000


//middleware
app.use(express.json());

//MongoDB Connection
databaseConnection();
    


app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

//error handling middelware for routes not found
app.use((req, res, next) => {
    res.status(404).send("Route not found");
});

app.listen(port, (req,res) => {
    console.log(`Example app listening on port ${port}`)
})

