import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { ListErrorsComponent } from './list-errors.component'
import { ShowAuthedDirective } from './show-authed.directive'
import { FollowButtonComponent } from './buttons/follow-button.component'
import { ArticleMetaComponent } from './article-helpers/article-meta.component'
import { FavoriteButtonComponent } from './buttons/favorite-button.component'
import { ArticlePreviewComponent } from './article-helpers/article-preview.component'
import { ArticleListComponent } from './article-helpers/article-list.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    ListErrorsComponent,
    ShowAuthedDirective,
    FollowButtonComponent,
    ArticleMetaComponent,
    FavoriteButtonComponent,
    ArticlePreviewComponent,
    ArticleListComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    ListErrorsComponent,
    ShowAuthedDirective,
    FollowButtonComponent,
    ArticleMetaComponent,
    FavoriteButtonComponent,
    ArticleListComponent,
    ArticlePreviewComponent
  ]
})
export class SharedModule {}
