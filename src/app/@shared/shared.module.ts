import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { DeleteComponent } from './delete/delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [LoaderComponent, DeleteComponent],
  exports: [LoaderComponent, DeleteComponent],
  entryComponents: [DeleteComponent]
})
export class SharedModule {}
