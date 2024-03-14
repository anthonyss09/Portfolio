import User from "../models/usersModel.js";

const addFollower = async (req, res) => {
  const { email } = req.body;

  try {
    const response = await User.create({ email });
    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

export { addFollower };
