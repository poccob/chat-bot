import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-bot';

  links = [
    { path: '/main', label: 'Главная', active: 'button-active'},
    { path: '/chat', label: 'Чат', active: 'button-active'}
  ];
}
