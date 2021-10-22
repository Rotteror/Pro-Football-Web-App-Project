import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchesCreatorComponent } from './matches-creator/matches-creator.component';



const routes: Routes = [
    {
        path: 'matches',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: MatchListComponent,
                canActivate: [AuthActivate],
                data: {
                    authenticationRequired: true,
                    authenticationFailureRedirectUrl: '/login'
                }
            },
            {
                path: 'create',
                component: MatchesCreatorComponent,
                canActivate: [AuthActivate],
                data: {
                    authenticationRequired: true,
                    authenticationFailureRedirectUrl: '/'
                }
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MatchesRoutingModule { }
