import { Component } from '@angular/core';
import { CreateComponent } from './create/create.component';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FeedAnimations } from './feed.animations';
import { DeleteComponent } from '@shared/delete/delete.component';

interface CommentInf {
  name: string,
  body: string,
  date: string,
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  animations: [FeedAnimations.inOutAnimation]
})
export class BoardComponent {
  comments: CommentInf[] = JSON.parse(localStorage.getItem('boardItems')) || [];
  showSummary: any = [];

  constructor(private modalService: NgbModal, private modalConfig: NgbModalConfig) {
    this.modalConfig.backdrop = 'static';
    this.modalConfig.keyboard = false;
  }

  writeNewComment(index: any = -1) {
    const modalRef = this.modalService.open(CreateComponent, {
      windowClass: 'modal-shadow'
    });
    modalRef.componentInstance.index = index;
    modalRef.result.then((data: any) => {
      if (index > -1) {
        this.comments[index] = data.postData;
      } else {
        this.comments.unshift(data.postData);
      }
    });
  }

  deleteConfirm(alert: any) {
    const modalRef = this.modalService.open(DeleteComponent, { windowClass: 'delete-modal modal-effect' });
    modalRef.componentInstance.entity = alert;
    modalRef.componentInstance.title = `Name: ${alert.name}`;
    modalRef.componentInstance.typeConfirm = true;

    modalRef.result.then((data: any) => {
      if (data && data.delete) {
        this.delete(data.entity);
      }
    });
  }

  delete(comment: any) {
    this.comments.splice(this.comments.indexOf(comment), 1);
    localStorage.setItem('boardItems', JSON.stringify(this.comments));
  }
}
