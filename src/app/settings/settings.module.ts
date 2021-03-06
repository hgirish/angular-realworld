import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SettingsComponent } from './settings.component'
import { AuthGuardService, SharedModule } from '../shared'

const settingsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuardService]
  }
])
@NgModule({
  imports: [SharedModule, settingsRouting],
  declarations: [SettingsComponent]
})
export class SettingsModule {}
