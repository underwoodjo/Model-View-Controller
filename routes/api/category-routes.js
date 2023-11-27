const router = require('express').Router();
const { Category, Product } = require('../../models');
const { findAll } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: [{ model: Product}]
    })
    res.json(categories)
  }catch(err){
    res.status
  }
});

// Whenever id is in the route parameters, there needs to be a request object which is req._____
router.get('/:id',async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id,{
      include: [{ model: Product}]
    })
    res.json(category)
  }catch(err){
    res.status
  }
});

router.post('/',async (req, res) => {
  // create a new category
try {
  const newCategory = await Category.create(req.body)
  res.json(newCategory)
}catch(err){
  res.status
}
});

router.put('/:id',async (req, res) => {
  // update a category by its `id` value
try {
  const updatedCategory = await Category.update(req.body, {
    where: {id: req.params.id}
  })
  res.json(updatedCategory)
}catch(err){
  res.status
}
});

router.delete('/:id',async (req, res) => {
  // delete a category by its `id` value
try {
  const deleteCategory = await Category.findByPk(req.params.id)
  await Category.destroy({
    where: {id: req.params.id}})
    res.json(deleteCategory)
}catch(err){
  res.status
}
});

module.exports = router;
