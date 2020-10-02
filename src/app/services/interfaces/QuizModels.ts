import { Theme } from '../enums/theme.enum';
import { CreateQuestionModel, QuestionModel } from './QuestionModel';

export interface CreateQuizModel {
    name: string;
    theme: Theme;
    questions: CreateQuestionModel[];
}
export interface UpdateQuizModel{
    id: number;
    name: string;
    questions: QuestionModel[];
    theme: Theme;
}