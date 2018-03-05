import { Component, OnInit, Input } from '@angular/core'
import { Article } from '../models'

@Component({
  selector: 'article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article: Article

  constructor() {}

  ngOnInit() {}

  onToggleFavorite(favorited: boolean) {
    this.article['favorited'] = favorited
    if (favorited) {
      this.article['favoritesCount']++
    } else {
      this.article['favoritesCount']--
    }
  }
}
