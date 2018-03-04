import { ModuleWithProviders, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ArticleComponent } from './article.component'
import { ArticleResolverService } from './article-resolver.service'
import { MarkdownPipe } from './markdown.pipe'
import { SharedModule } from '../shared'

const articleRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'article/:slug',
    component: ArticleComponent,
    resolve: {
      article: ArticleResolverService
    }
  }
])

@NgModule({
  imports: [articleRouting, SharedModule],
  declarations: [ArticleComponent, MarkdownPipe],
  providers: [ArticleResolverService]
})
export class ArticleModule {}
