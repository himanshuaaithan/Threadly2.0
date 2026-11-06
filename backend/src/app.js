import express from 'express'
import ProductRouter from './routes/Product.route.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin:"http://localhost:5173"
}))



app.get('/health', (req, res) => {
    try {
        res.status(200).json({ message: 'Server is healthy' });
    } catch (error) {
        throw new Error('Error checking server health: ' + error.message)
    }
})

app.use('/api/products',ProductRouter)

export default app