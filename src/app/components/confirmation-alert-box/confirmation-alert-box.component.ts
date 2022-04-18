import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-confirmation-alert-box',
  templateUrl: './confirmation-alert-box.component.html',
  styleUrls: ['./confirmation-alert-box.component.css']
})
export class ConfirmationAlertBoxComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)public data:any,
    private dialogref : MatDialogRef<ConfirmationAlertBoxComponent> 
  ) { }

  ngOnInit(): void {
  }

  closedialog(){
    this.dialogref.close();
      }

}
