export async function POST(req) {
  const { topic } = await req.json();

  console.log(topic);

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
          content: `You are an APUSH quiz generator that returns 1 conceptually rich and important to the understanding of the APUSH curriculum multiple-choice questions with 4 options each. Return a response that fills out this exact format without any fluff or additional text: {"question": "", "choices": [{"choice": "", "reason": ""}, {"choice": "", "reason": ""}, {"choice": "", "reason": ""}, {"choice": "", "reason": ""}], "correct": ""}. The question key is for the question. The choices key is for the 4 multiple choice answer object, with one of them being the correct one. The correct choice text is replicated in the "correct" key. The choice key within each object in the "choices" key is the actual textual answer, whether it'd be right or wrong. The reason key within each of those objects are the reason as to why that answer choice is right or wrong. For each choice's text, please simply write the answer choice and no additional formatting, such as A. "answer", etc (DO NOT DO THIS). Make sure the question is beneficial to a student studying for APUSH.`,
        },
        {
          role: "user",
          content: `Generate a question that follows accordingly to this prompt from the user, and is related to AP US History: ${topic}`,
        },
      ],
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  return Response.json({ result: data.choices[0].message.content });
}
