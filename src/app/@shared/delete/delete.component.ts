import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './delete.component.html'
})
export class DeleteComponent {
  entity: any;
  title: string;
  name = '';
  typeConfirm = true;

  constructor(public activeModal: NgbActiveModal) {}

  delete(): void {
    this.closeModal({ delete: true, entity: this.entity });
  }

  closeModal(data: any = null) {
    this.activeModal.close(data);
  }
}
