import { Component, Input } from '@angular/core';
import { QuizQuestion } from '../quiz-question';

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [],
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.scss'
})
export class QuizCardComponent {
  @Input() vocabularyDefinition!:QuizQuestion;

  constructor() {
    
  }
}
