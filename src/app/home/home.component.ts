import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { ArticleListConfig, TagsService, UserService } from '../shared'
import { RootData } from '@angular/core/src/view'

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private tagsService: TagsService,
    private userService: UserService
  ) {}

  isAuthenticated: boolean
  listConfig: ArticleListConfig = new ArticleListConfig()
  tags: Array<string> = []
  tagsLoaded: boolean = false

  ngOnInit() {
    this.userService.isAuhenticated.subscribe(authenticated => {
      this.isAuthenticated = authenticated

      if (authenticated) {
        this.setListTo('feed')
      } else {
        this.setListTo('all')
      }
    })

    this.tagsService.getAll().subscribe(tags => {
      this.tags = tags
      this.tagsLoaded = true
    })
  }

  setListTo(type: string = '', filters: Object = {}) {
    if (type === 'feed' && !this.isAuthenticated) {
      this.router.navigateByUrl('/login')
      return
    }

    this.listConfig = { type: type, filters: filters }
  }
}
