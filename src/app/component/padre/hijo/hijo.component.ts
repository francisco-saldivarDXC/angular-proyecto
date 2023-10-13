import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() parameter: string = "";
  @Output() message = new EventEmitter<string>();
  valorHijo : string = "";

  ngOnInit(): void {
    
  }

  public btnSendMessageClick() {
    this.message.emit(this.valorHijo);
  }
}
