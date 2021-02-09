import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { CreateComponent } from './create/create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@shared';

@NgModule({
  imports: [
    BoardRoutingModule,
    CommonModule,   
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule
  ],
  declarations: [BoardComponent, CreateComponent],
})
export class BoardModule {}