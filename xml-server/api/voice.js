// api/voice.js
export default function handler(req, res) {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  const xml = `
<Response>
  <Speak voice="WOMAN">Test OK</Speak>
</Response>`.trim();
  res.status(200).send(xml);
}
