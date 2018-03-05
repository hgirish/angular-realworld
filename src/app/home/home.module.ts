import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home.component'
import { SharedModule } from '../shared'
import { HomeAuthResolverService } from './home-auth-resolver.service'

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent,
    resolve: {
      isAuthenticated: HomeAuthResolverService
    }
  }
])
@NgModule({
  imports: [homeRouting, SharedModule],
  declarations: [HomeComponent],
  providers: [HomeAuthResolverService]
})
export class HomeModule {}
