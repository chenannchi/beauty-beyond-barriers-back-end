import { Profile } from "../models/profile.js"
import { Product } from "../models/product.js"

const create = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const products = await Product.find({})
      .sort({ category: 'asc', name:"asc" })
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json(error)
  }
}

export {
  create,
  index,
}
