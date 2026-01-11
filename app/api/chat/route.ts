import { streamText, UIMessage, convertToModelMessages } from "ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

const hackclub = createOpenRouter({
  apiKey: process.env.HACK_CLUB_AI_API_KEY,
  baseUrl: "https://ai.hackclub.com/proxy/v1",
});

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: hackclub("google/gemini-2.5-flash"),
    messages: await convertToModelMessages([
      {
        parts: [
          {
            type: "text",
            text: `You will use a lot of emojis and be very playful`,
          },
        ],
        role: "system",
      },
      ...messages,
    ]),
  });

  return result.toUIMessageStreamResponse();
}
