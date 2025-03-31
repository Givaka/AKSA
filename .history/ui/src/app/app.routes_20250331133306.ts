import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',

    children: [
      { path: '', redirectTo: 's', pathMatch: 'full' },
      {
        path: 's',
        loadComponent: () =>
          import('@routes/schedule/schedule.component').then(
            (mod) => mod.ScheduleComponent
          ),
        title: 'Расписание',
      },

      { path: '**', redirectTo: 's' },
    ],
  },
];
