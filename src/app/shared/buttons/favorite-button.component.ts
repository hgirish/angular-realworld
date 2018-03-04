import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Article } from '../models'
import { ArticlesService, UserService } from '../services'

@Component({
  selector: 'favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.css']
})
export class FavoriteButtonComponent implements OnInit {
  constructor(
    private articlesService: ArticlesService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {}

  @Input() article: Article
  @Output() onToggle = new EventEmitter<boolean>()
  isSubmitting = false

  toggleFavorite() {
    this.isSubmitting = true

    this.userService.isAuhenticated.subscribe(authenticated => {
      if (!authenticated) {
        this.router.navigateByUrl('/login')
        return
      }

      if (!this.article.favorited) {
        this.articlesService.favorite(this.article.slug).subscribe(data => {
          this.isSubmitting = false
          this.onToggle.emit(true)
        }, err => (this.isSubmitting = false))
      } else {
        this.articlesService.unfavorite(this.article.slug).subscribe(data => {
          this.isSubmitting = false
          this.onToggle.emit(false)
        }, err => (this.isSubmitting = false))
      }
    })
  }
}
