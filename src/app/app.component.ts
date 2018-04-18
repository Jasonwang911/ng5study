import { Component, Inject } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello 桂胖子';
  // constructor(private mailService: MailService) {

  // }
  // 使用 @Inject 装饰器注入服务
  constructor(
  	private mailService: MailService,
  	@Inject('apiUrl') private apiUrl
  	) {

  }

  onUpdate(id, text){
    this.mailService.update(id,text);
  }
}
