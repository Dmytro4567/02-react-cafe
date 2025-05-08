// допустимі значення для голосування
export type VoteType = 'good' | 'neutral' | 'bad';

// інтерфейс для стану голосів
export interface Votes {
    good: number;
    neutral: number;
    bad: number;
}