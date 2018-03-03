import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import {
  ApiService,
  UserService,
  SharedModule,
  FooterComponent,
  JwtService,
  HeaderComponent,
  AuthGuardService
} from './shared'
import { HomeModule } from './home/home.module'
import { AuthModule } from './auth/auth.module'

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {
  useHash: true
})
@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [BrowserModule, AuthModule, SharedModule, HomeModule, rootRouting],
  providers: [ApiService, UserService, JwtService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
