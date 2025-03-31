import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',

    children: [
      { path: '', redirectTo: 's', pathMatch: 'full' },
      {
        path: 'b',
        loadComponent: () =>
          import('@routes/schedule/schedule.component').then(
            (mod) => mod.ScheduleComponent
          ),
        title: 'Расписание',
      },
      {
        path: 'h',
        loadComponent: () =>
          import('@routes/history/history.component').then(
            (mod) => mod.HistoryComponent
          ),
        title: 'История',
      },

      {
        path: 'c',
        loadComponent: () =>
          import('@routes/clients/clients.component').then(
            (mod) => mod.ClientsComponent
          ),
        title: 'Клиенты',
      },
      {
        path: 's',
        loadComponent: () =>
          import('@routes/service/service.component').then(
            (mod) => mod.ServiceComponent
          ),
        title: 'Услуги',
      },

      { path: '**', redirectTo: 's' },
    ],
  },
];
