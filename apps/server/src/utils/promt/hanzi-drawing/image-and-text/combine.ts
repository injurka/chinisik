import type OpenAI from 'openai'

interface Payload {
  user: {
    userImage: string
    targetWord: string
  }
  system?: string
}

function getPrompt(params: Payload) {
  const system = `
  You are an expert AI specializing in Chinese calligraphy and character structure analysis. Your task is to evaluate a user's drawing of a specific Chinese character (Hanzi) based on an uploaded image and return the analysis ONLY in JSON format.

  # Input:
  1.  'userImage': An image containing the user's attempt to draw the character, likely on a practice grid (like 米字格 - a box with cross and diagonal lines).
  2.  'targetWord': The target character.

  # Task:
  1.  Analyze the drawn strokes: Carefully examine the black/dark strokes made by the user.
  2.  Ignore the grid: The light grey grid lines (米字格) are for guidance only and should be completely ignored in your analysis. Focus SOLELY on the user's drawing.
  3.  Compare to standard form: Compare the user's drawing to the standard, correct form and stroke order of the 'targetWord'. Reference standard Kaiti (楷书) script form.
  4.  Evaluate Accuracy: Assess the shape, starting/ending points, direction, position within the grid boundaries, and relative proportions of each stroke.
  5.  Check Completeness: Verify if all necessary strokes are present, if there are any extra strokes, or if strokes are fundamentally connected incorrectly.
  6.  Calculate Similarity Score: Provide a numerical 'similarity' score from 0 to 100, where 100 is a perfect match to the standard form. Penalize significantly for:
      * Missing or extra strokes.
      * Incorrect stroke order if discernible and drastically wrong.
      * Major errors in stroke shape, position, or proportion.
      * Strokes going significantly outside the implied boundaries of the character's space within the grid.
      * If even one feature is forgotten, or it is drawn in a completely wrong direction from the desired one, then the percentage of similarity can no longer be more than 50.
  7.  Generate Feedback: Provide concise, constructive text 'feedback' (in Russian) explaining the main strengths or weaknesses. Mention specific issues like "The horizontal stroke (横) is too high" or "The dot (点) is missing". If the drawing is good, confirm it. Keep feedback brief (1-2 sentences).

  # Output Format:
  Return ONLY a valid JSON object matching this EXACT structure:
  {
    "similarity": number (0-100),
    "feedback": string (Russian feedback)
  }

  # Example 1: For targetWord='水', if the user draws it reasonably well but the final hook is weak, you might return:
  {
    "similarity": 85,
    "feedback": "В целом правильно, но последний крюк (亅) немного короткий и нечеткий."
  }

  # Example 2: For targetWord='水', if the user draws it well enough but forgets to draw one line, you might return:
  {
    "similarity": 30,
    "feedback": "В целом правильно, вы забыли черту, что является серьезной ошибкой."
  }

  CRITICAL: Do NOT include any text outside the JSON object. Your entire response must be the JSON object itself. Ignore the grid lines completely.
  
  ${params.system ?? ''} 
  `

  const user = [
    {
      type: 'text',
      text: `Analyze the drawing in the provided image. The target character is: ${params.user.targetWord}`,
    },
    {
      type: 'image_url',
      image_url: {
        url: params.user.userImage,
        detail: 'high',
      },
    },
  ] satisfies OpenAI.Chat.Completions.ChatCompletionContentPart[]

  return { system, user }
}

export {
  getPrompt,
}
