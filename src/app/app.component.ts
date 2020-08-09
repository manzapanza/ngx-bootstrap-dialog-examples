import { Component } from '@angular/core';
import { NgxBootstrapDialogService } from 'ngx-bootstrap-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dialog: NgxBootstrapDialogService) {}

  openDialogAlert() {
    this.dialog.alert({
      title: 'Title',
      message: 'Lorem ipsum!',
    });
  }

  openDialogConfirm() {
    this.dialog.confirm({
      title: 'Title',
      message: 'Lorem ipsum?',
    });
  }
}
