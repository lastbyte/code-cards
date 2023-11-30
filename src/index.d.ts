export type TOption = {
  text: string,
  correct: boolean,
  __typename: string;
}

export type TQuestion = {
  id: string,
  title: string,
  options: TOption[],
  code: string,
  explanation: string,
  __typename: string,
}

export type TBreadcrumb = { to: string, display: string, icon: string }
