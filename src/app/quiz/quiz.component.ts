import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocabularyDefinition } from '../vocab-definition';
import { VocabularyList } from '../vocab-list';
import { QuizCardComponent } from '../quiz-card/quiz-card.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, QuizCardComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {

  vocabularyList: VocabularyList = inject(VocabularyList);
  vocabularyDefinition: VocabularyDefinition[] = [];

  constructor() {
    this.vocabularyDefinition = this.vocabularyList.getVocabularyQuiz();
    console.log(this.vocabularyDefinition);
  }
}
