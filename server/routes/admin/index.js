module.exports = app => {
  const express = require("express");
  const router = express.Router();
  const Category = require("../../models/Category")
  router.post("/categories", async (req, res) => {
    const model = await Category.create(req.body)
    res.send(model)
<<<<<<< HEAD
  });
  // 编辑
  router.put("/categories/:id", async (req, res) => {
    const model = await Category.findByIdAndUpdate(req.params.id,req.body)
    res.send(model)
  });
  // 删除
  router.delete("/categories/:id", async (req, res) => {
    await Category.findByIdAndDelete(req.params.id,req.body)
    res.send({
      success: true
    })
=======
>>>>>>> 438a8d80abb24e0e21dc0836dcd8bbf9ee7b7c5c
  })
  router.get("/categories", async (req, res) => {
    const items = await Category.find().limit(10)
    res.send(items)
<<<<<<< HEAD
  });
  router.get("/categories/:id", async (req, res) => {
    const model = await Category.findById(req.params.id)
    res.send(model)
  });
=======
  })
>>>>>>> 438a8d80abb24e0e21dc0836dcd8bbf9ee7b7c5c
  app.use("/admin/api", router)
}