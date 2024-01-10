import * as dotenv from 'dotenv'
dotenv.config({path:'./config.env'})
import express from 'express'
import cors from 'cors'
import dbConnect from './db/config.js'
import router from './routes/routes.js'
// import crypto from 'crypto'
const app = express()
const PORT = process.env.PORT_NUMBER || 3002;

app.use(express.json())
dbConnect()

const corsOptions = {
  origin: "http://localhost:3000" // frontend URI (ReactJS)
}
app.use(cors(corsOptions))


const products = [
  {
    id: 'WhiteGarden',
    src: "images/Product1.jpeg ",
    alt: "Product Image",
    heading: "White Garden 🍀",
    para: "Jasmin & Lily of the Valley Candle",
    category: "Floral Candles",
    price: '150Rs'
  },
  {
    id: 'BreezyLilyOasis🌺',
    src: "images/Product2.jpg",
    alt: "Product Image",
    heading: "Breezy Lily Oasis 🌺",
    para: "Ocean Breeze & Lily of the Valley Candle",
    category: "Floral Candles",
    price: '110Rs'

  },
  {
    id: "EnchantingRosewoodsymphony",
    src: "images/Product3.jpg",
    alt: "Product Image",
    heading: "Enchanting Rosewood symphony 🌷🥀",
    para: "Rose & Amber Candle",
    category: "Floral Candles",
    price: '250Rs'

  },
  {
    id: '"WhisperingBlossomsofJasmine',
    src: "images/Product4.jpg",
    alt: "Product Image",
    heading: "Whispering Blossoms of Jasmine 🌺💜",
    para: "Our Jasmin, Orange Blossom & Lily of the Valley Candle",
    category: "Floral Candles",
    price: '200Rs'

  },
  {
    id: 'MintyLavenderOasis',
    src: "images/Product5.jpg",
    alt: "Product Image",
    heading: "Minty Lavender Oasis 💜🌸",
    para: "Lavender & Garden Mint Candle",
    category: "Floral Candles",
    price: '180Rs'

  },
  {
    id: 'CrispAutumnLeaves',
    src: "images/Product6.jpg",
    alt: "Product Image",
    heading: "Crisp Autumn Leaves 🌅🍊",
    para: "Bergamot, Amber & Orange and Cinnamon Candle",
    category: "Fall Candles",
    price: '110Rs'

  },
  {
    id: 'SpicedCaféDreams',
    src: "images/Product7.jpg",
    alt: "Product Image",
    heading: "Spiced Café Dreams ☕✨",
    para: "Vanilla & Coffee and Cinnamon Candle",
    category: "Fall Candles",
    price: '260Rs'

  },
  {
    id: 'WoodsyWhispers',
    src: "images/Product8.jpg",
    alt: "Product Image",
    heading: "Woodsy Whispers 🌲🕊️",
    para: "Sandalwood + Cedarwood and Musk Candle",
    category: "Fall Candles",
    price: '254Rs'

  },
]

// const buf = crypto.randomBytes(64).toString('hex')
// console.log(buf)

app.use('/user', router)

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.listen(PORT, () => {
  console.log('Server is Running on Port ' + PORT)
})





