export default (req, res) => {
  console.log({ stuff: { things: "here" } });
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
