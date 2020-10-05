import { Theme } from '../enums/theme.enum';
import { CreateAnswerModel } from './AnswerModels';

export interface CreateQuestionModel {
    text: string;
    answers: CreateAnswerModel[];
    complexity: boolean;
    theme: Theme;
}
export interface UpdateQuestionModel {
    id: number;
    text: string;
    complexity: boolean;
    theme: Theme;
}
export interface DeleteQuesitonModel{
    id: number;
}

