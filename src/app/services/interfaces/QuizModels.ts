import { Theme } from '../enums/theme.enum';
import { CreateQuestionModel } from './QuestionModel';

export interface CreateQuizModel {
    name: string;
    theme: Theme;
    questions: CreateQuestionModel[];
}
export interface UpdateQuizModel{
    id: number;
    name: string;
    questions: CreateQuestionModel[];
    theme: Theme;
}