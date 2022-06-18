export default (req, res) => {
  console.error({ stuff: { things: "here" } });
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
