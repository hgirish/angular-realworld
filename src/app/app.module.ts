import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { SharedModule, FooterComponent, HeaderComponent } from './shared'
import { HomeModule } from './home/home.module'

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {
  useHash: true
})
@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [BrowserModule, SharedModule, HomeModule, rootRouting],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
