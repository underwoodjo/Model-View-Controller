const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/',async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
try {
  const tags = await Tag.findAll({
    include: [{model: Product}]
  })
  res.json(tags)
}catch(err){
  res.status
}
});

router.get('/:id',async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    res.json(tag)
  }catch(err){
    res.status
  }
});

router.post('/',async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body)
    res.json(newTag)
  }catch(err){
    res.status
  }
});

router.put('/:id',async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update(req.body, {
      where: {id: req.params.id}
    })
    res.json(updatedTag)
  }catch(err){
    res.status
  }
});

router.delete('/:id',async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.findByPk(req.params.id)
    await Tag.destroy({
      where: {id: req.params.id}})
      res.json(deleteTag)
  }catch(err){
    res.status
  }
});

module.exports = router;