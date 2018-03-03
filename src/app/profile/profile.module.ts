import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ProfileComponent } from './profile.component'
import { ProfileResolverService } from './profile-resolver.service'
import { SharedModule } from '../shared'

const profileRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'profile/:username',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolverService
    }
  }
])

@NgModule({
  imports: [profileRouting, SharedModule],
  declarations: [ProfileComponent],
  providers: [ProfileResolverService]
})
export class ProfileModule {}
