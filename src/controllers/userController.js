// // userController.js
// import express from 'express';
// import userService from '../services/userService';

// const router = express.Router();

// // Route to get all users
// router.get('/', async (req, res) => {
//   try {
//     const users = await userService.getAllUsers();
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Route to get a single user by ID
// router.get('/:id', async (req, res) => {
//   const userId = req.params.id;

//   try {
//     const user = await userService.getUserById(userId);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// export default router;


// controllers/userController.js
import userService from '../services/userServices.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
