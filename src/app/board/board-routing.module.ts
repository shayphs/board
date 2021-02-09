import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { BoardComponent } from './board.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'board', component: BoardComponent, data: { title: 'Board' } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class BoardRoutingModule {}
