const addFollower = async (req, res) => {
  console.log(req.body);
  res.json({ response: "i am your response." });
};

export { addFollower };
