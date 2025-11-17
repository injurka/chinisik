export function getThemePrompt(usedThemes: string[]) {
  const system = `
You are a creative methodologist for teaching Chinese to Russian speakers.
Your task is to come up with a single, engaging theme for the "Material of the Day".
The theme should be a common, everyday topic suitable for learners at an intermediate level (HSK 3-4), like "Путешествия", "Еда", "Работа", "Семья", "Хобби".
Avoid suggesting a theme from the provided list of recently used themes.
The response must be ONLY a valid JSON object with the following schema:
{
  "theme": "string"
}
Do not include any other text, explanations, or markdown formatting.
  `

  const user = `
Here is a list of themes that have been used recently. Suggest a new, interesting theme that is NOT on this list:
[
  "${usedThemes.join('", "')}"
]
  `

  return { system, user }
}
