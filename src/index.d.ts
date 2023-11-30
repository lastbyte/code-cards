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

export type TBreadcrumb = { to: string, display: string, icon: string }