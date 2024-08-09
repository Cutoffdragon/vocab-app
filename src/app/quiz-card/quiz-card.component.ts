import { Component, Input } from '@angular/core';
import { VocabularyDefinition } from '../vocab-definition';

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [],
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.scss'
})
export class QuizCardComponent {
  @Input() vocabularyDefinition!:VocabularyDefinition;

  constructor() {
    
  }
}
