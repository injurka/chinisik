export function getThemePrompt(usedThemes: string[]) {
  const system = `
You are a creative methodologist for teaching Chinese.
Your task is to come up with a single theme for the "Material of the Day".
The theme should be everyday topics (HSK 3-4).

Response Rules:
1. JSON ONLY.
2. NO Markdown code blocks.

Schema:
{
  "theme": "string"
}
  `

  const user = `
Recently used themes:
[
  "${usedThemes.join('", "')}"
]
Suggest a NEW theme not in this list.
  `

  return { system, user }
}
