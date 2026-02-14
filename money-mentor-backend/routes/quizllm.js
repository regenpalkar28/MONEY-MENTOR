import { generateObject } from 'ai';
// import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { createOllama } from 'ollama-ai-provider-v2';
import { z } from 'zod';
import express from 'express';
import rateLimit from 'express-rate-limit';


const router = express.Router();
const quizRateLimiter = rateLimit({
  windowMs: 60000, // 60s
  max: 3, 
  message: { error: 'Too many quiz requests. Please wait a moment before trying again.' },
  standardHeaders: true, 
  legacyHeaders: false,
});

// const google = createGoogleGenerativeAI({
//   apiKey: process.env.GOOGLE_API_KEY,
// });
const ollama = createOllama();

router.post('/generate-quiz', quizRateLimiter, async (req, res) => {
    console.log('Route hit, body:', req.body);
    try {
      const { topic, N } = req.body;

      const { object } = await generateObject({
        // model: google('gemini-2.0-flash'),
        model: ollama('llama3.2:1b'),
        maxRetries: 0,
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

      res.json(object.questions);
  } catch (error) {
    if (error.statusCode === 429) {
      console.error('Gemini API Quota Exceeded');
      return res.status(429).json({ error: 'AI provider quota exceeded. Try again in a minute.' });
    }
    console.error('Quiz generation error:', error);
    res.status(500).json({ error: 'Failed to generate quiz' });
  }
});

export default router;