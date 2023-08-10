const usersModel = require("../../models/users/users.model");

exports.userGetRequest = async (req, res) => {
  const user = await usersModel.find();
  try {
    if (user) {
      res.status(201).send({
        success: true,
        data: user,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Data not found",
      });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
