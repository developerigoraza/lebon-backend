const Booking = require("../../model/menuModel");
const addItemToMenu = async (req, res) => {
  try {
    const { itemName, description, itemImage, price } = req.body;

    if (!itemName || !description || !itemImage || !price) {
      return res.status(400).json({ message: "Fill all fields" });
    }

    const newItem = await Menu.create({
      itemName,
      description,
      itemImage,
      price,
    });

    return res
      .status(201)
      .json({ message: "Item Added successfully", newItem: newItem });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports = { addItemToMenu };
