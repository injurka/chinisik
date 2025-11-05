import type OpenAI from 'openai'

interface Payload {
  user: {
    userImage: string
    targetWord: string
    targetImage: string
  }
  system?: string
}

function getPrompt(params: Payload) {
  const system = `
  You are an expert AI specializing in Chinese calligraphy and character structure analysis. Your task is to evaluate a user's drawing of a specific Chinese character (Hanzi) based on an uploaded image and return the analysis ONLY in JSON format.

  # Input:
  1.  'userImage': An image containing the user's attempt to draw the character, likely on a practice grid (like 米字格 - a box with cross and diagonal lines).
  2.  'targetImage': An image containing the standard, correct form of the target character.
  3.  'targetWord': The target character.

  # Task:
  1.  Analyze the drawn strokes: Carefully examine the black/dark strokes made by the user.
  2.  Ignore the grid: The light grey grid lines (米字格) are for guidance only and should be completely ignored in your analysis. Focus SOLELY on the user's drawing.
  3.  Compare to standard form: Compare the user's drawing to the standard, correct form and stroke order of the 'targetWord' and 'targetImage'.
  4.  Evaluate Accuracy: Assess the shape, starting/ending points, direction, position within the grid boundaries, and relative proportions of each stroke.
  5.  Check Completeness: Verify if all necessary strokes are present, if there are any extra strokes, or if strokes are fundamentally connected incorrectly.
  6.  Calculate Similarity Score: Provide a numerical 'similarity' score from 0 to 100, where 100 is a perfect match to the standard form. Penalize significantly for:
      * Count the number of drawn strokes and the number that should be in the hieroglyph, if it is less or more, then the percentage of similarity can no longer be more than 50.
      * Be very strict about percentages, if there are obvious differences with how the hieroglyph looks, then immediately lower the percentages.
      * It is important to understand that 70 percent means that the hieroglyph is drawn validly and there are no gross errors.
      * Incorrect stroke order if discernible and drastically wrong.
      * Major errors in stroke shape, position, or proportion.
      * Strokes going significantly outside the implied boundaries of the character's space within the grid.
  7.  Generate Feedback: Provide concise, constructive text 'feedback' (in Russian) explaining the main strengths or weaknesses. Keep feedback brief (1-2 sentences).

  # Output Format:
  Return ONLY a valid JSON object matching this EXACT structure:
  {
    "similarity": number (0-100),
    "feedback": string (Russian feedback)
  }

  CRITICAL: Do NOT include any text outside the JSON object. Your entire response must be the JSON object itself. Ignore the grid lines completely.
  
  ${params.system ?? ''} 
  `

  const user = [
    {
      type: 'text',
      text: `Analyze the user's drawing (second image) by comparing it to the target character (first image). The target character is '${params.user.targetWord}'. Evaluate the similarity and provide feedback according to the instructions.`,
    },
    {
      type: 'image_url',
      image_url: {
        url: params.user.targetImage,
        detail: 'low',
      },
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
