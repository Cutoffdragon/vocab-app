import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Vocabulary Mogul'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Sign Up'
    },
    {
        path: 'quiz/:difficulty',
        component: QuizComponent,
        title: 'Vocabulary Quiz'
    }

];
