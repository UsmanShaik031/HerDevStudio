import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "GROQ_API_KEY is not configured" },
        { status: 500 }
      );
    }

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant for Shaik's portfolio. Shaik is a Digital Craftsman and software engineer specializing in minimalist design and interaction. Answer questions about Shaik's work, principles, and contact information. Keep responses concise and professional.",
        },
        ...messages,
      ],
      model: "llama-3.3-70b-versatile",
    });

    return NextResponse.json({
      message: completion.choices[0]?.message?.content || "No response from AI.",
    });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process chat request" },
      { status: 500 }
    );
  }
}
