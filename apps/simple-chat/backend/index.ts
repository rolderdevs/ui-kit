import cors from "@elysiajs/cors";
import {
	createOpenRouter,
	type OpenRouterProviderOptions,
} from "@openrouter/ai-sdk-provider";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { Elysia } from "elysia";

const port = process.env.PORT || 3000;
const openrouter = createOpenRouter();
const model = openrouter.chat("google/gemini-2.5-flash");

const app = new Elysia()
	.use(cors())
	.post("/api/chat", async ({ body }) => {
		const { messages } = (await body) as { messages: UIMessage[] };
		const stream = streamText({
			model,
			messages: convertToModelMessages(messages),
			providerOptions: {
				openrouter: {
					reasoning: {
						enabled: true,
						effort: "low",
					},
				} satisfies OpenRouterProviderOptions,
			},
			// На фронте поток буферизируется и красиво выводится в стиле печати на клавиатуре, эта опция чуть менее красивая альтернатива.
			// experimental_transform: smoothStream(),
		});

		return stream.toUIMessageStreamResponse();
	})
	.listen(port);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
