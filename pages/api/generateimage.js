import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createImage({
    prompt: generatePrompt(req.body.animal),
    n: 1,
    size: "1024x1024"
  });
  res.status(200).json({ result: completion.data.data[0].url });
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `${capitalizedAnimal}`;
}
