import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

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
                loadChildren: () => import('../note/list/note-list.module').then(m => m.NoteListModule),
            },
            {
                path: 'roles',
                loadChildren: () => import('../role/list/role-list.module').then(m => m.RoleListModule),
            }
        ],
        canActivateChild: [AuthGuard]
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
