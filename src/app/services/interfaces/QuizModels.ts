import { Theme } from '../enums/theme.enum';
import { CreateAnswerModel } from './AnswerModels';
import { CreateQuestionModel } from './QuestionModel';
export interface CreateQuizModel{
    name: string;
    theme: Theme;
    questions: CreateQuestionModel[];
}