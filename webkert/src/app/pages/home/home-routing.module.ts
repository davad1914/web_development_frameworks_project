import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'tasks',
                loadChildren: () => import('../tasks/tasks.module').then(m => m.SplashScreenModule),
            },
            {
                path: 'notes',
                loadChildren: () => import('./../game/list/game-list.module').then(m => m.GameListModule),
            }
        ],
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
