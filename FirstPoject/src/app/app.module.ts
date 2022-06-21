import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { StudentModule } from './student/student.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SidebarComponentComponent,
    ContentComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
