import User from "../models/user.js";

const CreateUser = async (req, res) => {
  const { roll, name, email, projectname } = req.body;

  const newUser = new User({
    roll,
    name,
    email,
    projectname,
  });
  try {
    await newUser.save();
    return res.status(200).json({success:true, msg: "Data created successfully" });
  } catch (error) {
    return res.status(401).json({ msg: `Enternal error occured ${error}`});
  }
};

const GetUser = async (req, res) => {
  try {
    const findUser = await User.find();
    if (!findUser) return res.status(401).json({ msg: "user not found" });

    return res.status(200).send({success:true,findUser});
  } catch (error) {
    return res.status(401).json({ msg: `Enternal error occured ${error}` });
  }
};

const UpdateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const findUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!UpdateUser) return res.status(401).json({ msg: "user not found" });
    return res.status(200).json({success:true, msg: "Data updated successfully" });
  } catch (error) {
    return res.status(401).json({ msg: `Enternal error occured ${error}` });
  }
};

const DeleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const findUser = await User.findByIdAndDelete(userId);
    if (!findUser) return res.status(401).json({ msg: "user not found" });
    return res.status(200).json({success:true, msg: "Data deleted successfully" });
  } catch (error) {
    return res.status(401).json({ msg: `Enternal error occured ${error}` });
  }
};

export { CreateUser, DeleteUser, GetUser, UpdateUser };
