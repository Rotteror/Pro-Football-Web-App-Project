import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchesCreatorComponent } from './matches-creator/matches-creator.component';



const routes: Routes = [
    {
        path: 'matches',
        children:[
            {
                path: '',
                pathMatch: 'full',
                component: MatchListComponent,
            },
            {
                path: 'create',
                component: MatchesCreatorComponent,
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MatchesRoutingModule { }
