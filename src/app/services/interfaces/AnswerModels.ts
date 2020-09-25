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