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
        path: 'registerPage',
        component: RegisterComponent,
        title: 'Sign Up'
    },
    {
        path: 'quiz',
        component: QuizComponent,
        title: 'Vocabulary Quiz'
    }

];
