export default (req, res) => {
  console.warn({ stuff: { things: "here" } });
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
