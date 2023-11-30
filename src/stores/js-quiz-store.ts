import { defineStore } from 'pinia';
import { Dictionary } from 'app/src';

export const useJsQuizStore = defineStore('jsQuizStore', {
  state: () => <{ explanation: boolean, questionIndex: string, selectedAnswers: Dictionary }>({
    explanation: false,
    questionIndex: '1',
    selectedAnswers: {},
  }),
  getters: {},
  actions: {
    toggleExplanation() {
      this.explanation = !this.explanation;
    },
    nextQuestion() {
      this.questionIndex = `${+this.questionIndex + 1}`;
    },
    setQuestion(id: string) {
      this.questionIndex = id;
    },
    saveSelectedAnswers(answer: Dictionary) {
      this.selectedAnswers = { ...this.selectedAnswers, ...answer };
    },
    prevQuestion() {
      this.questionIndex = `${+this.questionIndex - 1}`;
    },
  },
});
