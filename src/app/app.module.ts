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
  ProfilesService
} from './shared'
import { HomeModule } from './home/home.module'
import { AuthModule } from './auth/auth.module'
// import { ProfileComponent } from './profile/profile.component'

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {
  useHash: true
})
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
    //ProfileComponent
  ],
  imports: [
    SettingsModule,
    BrowserModule,
    AuthModule,
    ProfileModule,
    SharedModule,
    HomeModule,
    rootRouting
  ],
  providers: [
    ApiService,
    ProfilesService,
    UserService,
    JwtService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
