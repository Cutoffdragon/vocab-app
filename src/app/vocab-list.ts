// src/app/vocab-list.ts
import { Injectable } from '@angular/core';
import { VocabularyDefinition } from './vocab-definition';
import { QuizQuestion } from './quiz-question';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class VocabularyList {
    private vocabularySubset: VocabularyDefinition[] = [];
    private distractorCache: { [id: number]: string[] } = {};

    constructor(private supabaseService: SupabaseService) {}

    async loadVocabularyForQuiz(): Promise<void> {
        // Fetch a subset of 15 vocabulary words
        this.vocabularySubset = await this.supabaseService.getVocabularySubset(this.generateVocabularyNumbers(15, 562));
        this.precomputeDistractors();
        console.log(this.vocabularySubset)
    }

    private precomputeDistractors(): void {
        this.vocabularySubset.forEach(vocab => {
            this.distractorCache[vocab.id] = this.generateDistractors(vocab.id, 3);
        });
    }

    private generateDistractors(correctId: number, distractorCount: number): string[] {
        // Get distractors from the fetched subset
        const availableDistractors = this.vocabularySubset
            .filter(vocab => vocab.id !== correctId) // Exclude the correct definition
            .map(vocab => vocab.definition);

        // Shuffle and slice to get a fixed number of distractors
        return this.shuffleArray(availableDistractors).slice(0, distractorCount);
    }

    private getCachedDistractors(correctId: number): string[] {
        return this.distractorCache[correctId];
    }

    getVocabularyQuiz(): QuizQuestion[] {

        this.loadVocabularyForQuiz();
        
        const quizQuestions: QuizQuestion[] = [];

        for (const vocab of this.vocabularySubset) {
            const distractors = this.getCachedDistractors(vocab.id); // Use cached distractors
            const options = this.shuffleArray([vocab.definition, ...distractors]); // Include the correct definition and shuffle

            quizQuestions.push({ 
                word: vocab.word, 
                options: options, 
                correct: vocab.definition 
            });
        }

        return quizQuestions;
    }

    private shuffleArray(array: any[]): any[] {
        return array.sort(() => Math.random() - 0.5);
    }

    // Utility method to generate unique random numbers
    private generateVocabularyNumbers(count: number, max: number): number[] {
        const numbers = new Set<number>();

        while (numbers.size < count) {
            const randomNumber = Math.floor(Math.random() * max);
            numbers.add(randomNumber);
        }
        console.log(Array.from(numbers))
        return Array.from(numbers);
    } 
}
