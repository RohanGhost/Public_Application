export default function handler(req, res) {
  // Set the content type to XML
  res.setHeader("Content-Type", "application/xml");

  const xml = `
    <Response>
      <Speak voice="WOMAN">Test OK</Speak>
    </Response>
  `;

  res.status(200).send(xml);
}
