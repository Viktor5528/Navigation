import { QuestionModel } from './QuestionModel';

export interface CreateAnswerModel {
    text: string;
    isCorrect: boolean;
}
export interface UpdateAnswerModel {
    id: number;
    text: string;
}
export interface DeleteAnswerModel {
    id: number;
}
export interface AnswerModel{
    id: number;
    text: string;
    isCorrect: boolean;
    question: QuestionModel;
}
