import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'

import { EditorComponent } from './editor.component'
import { EditableArticleResolverService } from './editable-article-resolver.service'
import { AuthGuardService, SharedModule } from '../shared'

const editorRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'editor',
    component: EditorComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'editor/:slug',
    component: EditorComponent,
    canActivate: [AuthGuardService],
    resolve: {
      article: EditableArticleResolverService
    }
  }
])
@NgModule({
  imports: [editorRouting, SharedModule],
  declarations: [EditorComponent],
  providers: [EditableArticleResolverService]
})
export class EditorModule {}
