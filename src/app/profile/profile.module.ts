import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ProfileComponent } from './profile.component'
import { ProfileResolverService } from './profile-resolver.service'
import { SharedModule } from '../shared'
import { ProfileArticleComponent } from './profile-article.component'
import { ProfileFavoritesComponent } from './profile-favorites.component'

const profileRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'profile/:username',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolverService
    },
    children: [
      {
        path: '',
        component: ProfileArticleComponent
      },
      {
        path: 'favorites',
        component: ProfileFavoritesComponent
      }
    ]
  }
])

@NgModule({
  imports: [profileRouting, SharedModule],
  declarations: [
    ProfileComponent,
    ProfileArticleComponent,
    ProfileFavoritesComponent
  ],
  providers: [ProfileResolverService]
})
export class ProfileModule {}
