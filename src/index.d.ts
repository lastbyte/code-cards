export type TQuestion = {
  name: string,
  index: number,
  question: string,
  options: { [key in string]: string },
  snippets: { code: string }[],
  answer: {
    value: string,
    explanation: string
  },
}
