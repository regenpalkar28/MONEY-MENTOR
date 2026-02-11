import { generateObject } from 'ai';
import { google } from '@ai-sdk/google';
import { z } from 'zod';

export async function POST(req: Request) {
  try {
    const { topic, numberOfQuestions: N } = await req.json();

    const { object } = await generateObject({
      model: google('gemini-1.5-flash'),
      
      schema: z.object({
        questions: z.array(z.object({
          question: z.string(),
          options: z.array(z.string()).length(4),
          correctAnswer: z.number().min(0).max(3),
        })).length(N)
      }),
      
      prompt: `Generate exactly ${N} multiple choice questions about ${topic}. 
      Each question should have 4 options and the correctAnswer should be the index (0-3) of the correct option.
      Make the questions challenging, educational, and professional.
      Ensure options are clear and unambiguous.
      Topics to cover in ${topic}: fundamentals, key concepts, practical applications, and calculations where relevant.`,
    });

    return Response.json(object.questions);
  } catch (error) {
    console.error('Quiz generation error:', error);
    return Response.json({ error: 'Failed to generate quiz' }, { status: 500 });
  }
}