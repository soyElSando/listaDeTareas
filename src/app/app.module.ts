import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
registerLocaleData(localeEsAr);

const appRoutes:Routes =[
  {path:'', component: TasksComponent},
  {path: 'about', component: AboutComponent},
  {path: 'update/:id', component: UpdateTaskComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    UpdateTaskComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot (appRoutes, {enableTracing: true})
  ],
  providers: [{provide: LOCALE_ID, useValue:'es-AR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
