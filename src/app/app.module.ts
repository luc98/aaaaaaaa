import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from "./components/login-component/login-component.component";
import { ImagesDialogComponent } from './components/dialog/imagesDialogComponent/images-dialog.component';
import {ProductsComponent } from './components/products-component/products-component.component';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {CarouselModule} from 'primeng/carousel';
import {ImageModule} from 'primeng/image';
import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import { AltaProductosDialogComponent } from './components/dialog/altaProductosDialog/alta-productos-dialog.component';
import {ProgressBarModule} from 'primeng/progressbar';
/*
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
*/
import { list } from '@angular/fire/database';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ImagesDialogComponent,
    ProductsComponent,
    AltaProductosDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ProgressSpinnerModule,
    DialogModule,
    MatDialogModule,
    CarouselModule,
    ImageModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    ProgressBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MessagesModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
