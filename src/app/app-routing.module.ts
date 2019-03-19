import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'workouts', pathMatch: 'full' },
  { path: 'workouts', loadChildren: './workouts/workouts.module#WorkoutsPageModule' },
  { path: 'workout/:id', loadChildren: './workout-details/workout-details.module#WorkoutDetailsPageModule' },
  { path: 'exercises', loadChildren: './exercises/exercises.module#ExercisesPageModule' },
  { path: 'exercise/:id', loadChildren: './exercise-details/exercise-details.module#ExerciseDetailsPageModule' },  { path: 'exerciseProgressionModal', loadChildren: './modal/exercise-progression-modal/exercise-progression-modal.module#ExerciseProgressionModalPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
