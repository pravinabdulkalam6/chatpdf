import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ChatpdfComponent } from './chatpdf/chatpdf.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    ChatpdfComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    FileUploadModule,
    ToastModule,
    CheckboxModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
