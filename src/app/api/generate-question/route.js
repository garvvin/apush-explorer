export async function POST(req) {
  const { prevQuestions, topic } = await req.json();

  const pastQuestionsString = prevQuestions.map((q) => `- ${q}`).join("\n");
  console.log("generating question of prompt: " + topic);
  console.log("past questions to avoid: " + pastQuestionsString);

  const systemPrompt = `
You are an AP U.S. History quiz generator.

Always return a valid JSON object in this format:
{
  "question": "What is your question?",
  "choices": [
    { "choice": "Option A", "reason": "Explanation A" },
    { "choice": "Option B", "reason": "Explanation B" },
    { "choice": "Option C", "reason": "Explanation C" },
    { "choice": "Option D", "reason": "Explanation D" }
  ],
  "correct": "Option B"
}

Rules:
- Return only the JSON, no commentary.
- Do not repeat any previous questions.
- Randomize the position of the correct answer.
`;

  const userPrompt = `
Generate a new APUSH question about this topic: "${topic}"

Avoid repeating these past questions, as well as its correct choice index:
${pastQuestionsString}
`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      temperature: 0.5,
    }),
  });

  const data = await response.json();

  return Response.json({ result: data.choices[0].message.content });
}
