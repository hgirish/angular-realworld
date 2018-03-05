import { Component, OnInit, Input } from '@angular/core'

import { Article, ArticleListConfig } from '../models'
import { ArticlesService } from '../services'

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {}

  query: ArticleListConfig
  results: Article[]
  loading: boolean = false
  currentPage: number = 1
  totalPages: Array<number> = [1]

  @Input() limit: number
  @Input()
  set config(config: ArticleListConfig) {
    if (config) {
      this.query = config
      this.currentPage = 1
      this.runQuery()
    }
  }

  runQuery() {
    this.loading = true
    this.results = []

    if (this.limit) {
      this.query.filters.limit = this.limit
      this.query.filters.offset = this.limit * (this.currentPage - 1)
    }

    this.articlesService.query(this.query).subscribe(data => {
      this.loading = false
      if (data && data.articles) {
        this.results = data.articles

        this.totalPages = Array.from(
          new Array(Math.ceil(data.articlesCount / this.limit)),
          (val, index) => index + 1
        )
      }
    })
  }

  setPageTo(pageNumber) {
    this.currentPage = pageNumber
    this.runQuery()
  }
}
