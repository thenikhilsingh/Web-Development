const { prisma } = require("../db/prisma.js");

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const createdUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });
    return res.status(201).json(createdUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const updatedUser = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name,
        email: email,
      },
    });
    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    return res.status(200).json(deletedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
