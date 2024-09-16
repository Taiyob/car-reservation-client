export function extractInitialWords(
  sentence: string | undefined,
  wordCount: number
): string {
  if (!sentence) {
    throw new Error("The 'sentence' parameter is undefined or null.");
  }
  const wordsArray = sentence.split(" ");
  const extractedWords = wordsArray.slice(0, wordCount).join(" ");
  return extractedWords;
}
