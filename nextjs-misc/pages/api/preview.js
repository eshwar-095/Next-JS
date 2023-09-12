export default function handler(req, res) {
  res.setPreviewData({ user: "Hello" });
  res.redirect(req.query.redirect);
  res.end("Preview Mode Enabled");
}
