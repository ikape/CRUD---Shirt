const Shirt = require('../Models/shirtsModel')

// PUT NEW SHIRT
exports.createShirt = async (req,res)=>{
    try{
    const shirt = new Shirt({
        item: req.body.item,
        color: req.body.color,
        quantity: req.body.quantity,
        available: req.body.available,
    })
    const newShirt = await shirt.save()
    res.status(201).json(newShirt)
    } catch(error){
    res.status(500).send('Error creating new Shirts')
    }
}


// FIND ALL SHIRTS
exports.findAllShirt = async(req,res)=>{
    try {
    const shirts = await Shirt.find()
        res.status(200).json(shirts)
    } catch (error) {
        res.status(500).json({message:error.message})
    }  
}
// FINE ONE SHIRTS
exports.findOneShirt = async(req,res)=>{
    const id = req.params.id
    try {
    const shirts = await Shirt.findById(id)
        res.status(200).json(shirts)
    } catch (error) {
        res.status(500).json({message:error.message})
    }  
}

// UPDATE SHIRTS
exports.updateShirt = async (req, res) => {
    const id = req.params.id;
  
    // if(!req.body) {
    //   return res.status(400).send({message:'data to update cannot be empty'})
    // }
    try {
      const shirts = await Shirt.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
      return await res.status(201).json(shirts)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  // DELETE SHIRT
  exports.deleteShirt = async (req, res) => {
    const id = req.params.id;
  
    try{
      const shirts = await Shirt.findByIdAndDelete(id);
      return await res.status(200).json(`${shirts} has been successfully deleted`)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  // DELETE ALL SHIRT
  exports.deleteAllShirt = async (req, res) => {
    const id = req.params.id;
  
    try{
      const shirts = await Shirt.deleteMany(id);
      return await res.status(200).json(`successfully deleted collection for ${shirts} `)
    } catch (error) {
      return res.status(500).json(error)
    }
  }