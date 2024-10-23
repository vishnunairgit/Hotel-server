
const MENU = require('../models/menuModels');

const Menu = async (req, res) => {
    try {
        const { FoodTitle, Amount, Includes, TypeOff } = req.body;

        const newMenu = new MENU({ FoodTitle, Amount, Includes, TypeOff });

        await newMenu.save();

        return res.status(201).json({
            message: 'Menu item added successfully',
            menuItem: newMenu
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'An error occurred while adding the menu item',
            error: error.message
        });
    }
};

const Allmenu = async (req, res) => {
    try {
        const menuItems = await MENU.find();

        if (menuItems.length === 0) {
            return res.status(404).json({ error: 'No menu items found' });
        }
        res.status(200).json(menuItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = { Menu, Allmenu };
