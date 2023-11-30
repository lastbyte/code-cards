import { defineStore } from 'pinia';

export const useJsQuizStore = defineStore('jsQuizStore', {
  state: () => <{ explanation: boolean, questionIndex: string }>({
    explanation: false,
    questionIndex: '1',
  }),
  getters: {},
  actions: {
    toggleExplanation() {
      this.explanation = !this.explanation;
    },
    nextQuestion() {
      this.questionIndex = `${+this.questionIndex + 1}`;
    },
    prevQuestion() {
      this.questionIndex = `${+this.questionIndex - 1}`;
    },
  },
});
