import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SettingsModule } from './settings/settings.module'
import { AppComponent } from './app.component'
import { ProfileModule } from './profile/profile.module'
import {
  ApiService,
  UserService,
  SharedModule,
  FooterComponent,
  JwtService,
  HeaderComponent,
  AuthGuardService,
  ProfilesService,
  ArticlesService
} from './shared'
import { EditorModule } from './editor/editor.module'
import { HomeModule } from './home/home.module'
import { AuthModule } from './auth/auth.module'
//import { EditorComponent } from './editor/editor.component'
// import { ProfileComponent } from './profile/profile.component'

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {
  useHash: true
})
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
    //EditorComponent
    //ProfileComponent
  ],
  imports: [
    SettingsModule,
    BrowserModule,
    AuthModule,
    ProfileModule,
    SharedModule,
    HomeModule,
    EditorModule,
    rootRouting
  ],
  providers: [
    ApiService,
    ProfilesService,
    UserService,
    JwtService,
    ArticlesService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
