export default (req, res) => {
  console.info({ stuff: { things: "here" } });
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
