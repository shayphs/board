import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  index: any;
  commentForm: FormGroup;
  showAlert = false;
  isLoading = false;
  list = JSON.parse(localStorage.getItem('boardItems')) || [];

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
    this.createForm();
    if (this.index > -1) {
      this.commentSetValue();
    }
  }

  add() {
    if (this.commentForm.invalid) {
      this.showAlert = true;
      return;
    }

    this.isLoading = true;
    const postData = this.commentForm.value;
    postData.date = new Date();

    if (this.index > -1) {
      this.list[this.index] = postData;
    } else {
      this.list.unshift(postData);
    }
    
    localStorage.setItem('boardItems', JSON.stringify(this.list));

    setTimeout(() => {
      this.isLoading = false;
      this.closeModal({postData}, false);
    }, 1000);
  }

  closeModal(data: any = null, conf: boolean = true) {
    if (conf && this.commentForm.dirty) {
      if (!confirm('You have unsaved data!\nAre you sure you want to close the form, and lose your changes?')) {
        return;
      }
    }

    this.activeModal.close(data);
  }

  commentSetValue() {
    this.commentForm.setValue({
      name: this.list[this.index].name,
      body: this.list[this.index].body
    });
  }

  private createForm() {
    this.commentForm = this.formBuilder.group({
      name: ['', Validators.required],
      body: ['', Validators.required],
    });
  }
}
