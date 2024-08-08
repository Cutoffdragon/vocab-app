import { Component, inject } from '@angular/core';
import { VocabularyDefinition } from '../vocab-definition';
import { VocabularyList } from '../vocab-list';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {

  vocabularyList = inject(VocabularyList);
  vocabularyDefinition: VocabularyDefinition | undefined;

  constructor() {
    this.vocabularyDefinition = this.vocabularyList.getVocabularyQuiz();
  }
}
