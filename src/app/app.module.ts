import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TheAppBarComponent } from './the-app-bar/the-app-bar.component';
import { PostsComponent } from './posts/posts.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { PostCardComponent } from './posts/post-card/post-card.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [AppComponent, TheAppBarComponent, PostsComponent, PostCardComponent, PostDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
