import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// 组件
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MembersComponent } from './members/members.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
// 服务
import { MailService } from './mail.service';

export const ROUTES: Routes = [
	{path: '', pathMatch: 'full', redirectTo: 'user'},
	{path: 'user', component: UserComponent},
	{path: 'members', component: MembersComponent},
  {path: 'simple', component: SimpleFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MembersComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ 
    MailService,
    { provide: 'apiUrl', useValue: 'https://jsonplaceholder.typicode.com/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
