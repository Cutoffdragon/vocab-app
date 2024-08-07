import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  route: ActivatedRoute = inject(ActivatedRoute)

}
