import {
  Component,
  ElementRef,
  EventEmitter,
  ViewChild,
  OnInit,
} from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-edit',
  standalone: false,
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css',
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subjectInput') subjectInput: ElementRef;
  @ViewChild('msgTextInput') msgTextInput: ElementRef;

  constructor(private messageService: MessageService) {}

  ngOnInit() {}

  onSendMessage(event: Event) {
    event.preventDefault();
    const subjectValue: string = this.subjectInput.nativeElement.value;
    const msgTextValue: string = this.msgTextInput.nativeElement.value;

    const newMessage: Message = {
      id: '',
      sender: '8',
      subject: subjectValue,
      msgText: msgTextValue,
    };
    this.messageService.addMessage(newMessage);
    this.onClear();
  }

  onClear() {
    this.subjectInput.nativeElement.value = '';
    this.msgTextInput.nativeElement.value = '';
  }
}
