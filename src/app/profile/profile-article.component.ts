import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { ArticleListConfig, Profile } from '../shared'

@Component({
  selector: 'profile-article',
  templateUrl: './profile-article.component.html',
  styleUrls: ['./profile-article.component.css']
})
export class ProfileArticleComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  profile: Profile
  articlesConfig: ArticleListConfig = new ArticleListConfig()

  ngOnInit() {
    this.route.parent.data.subscribe((data: { profile: Profile }) => {
      this.profile = data.profile
      this.articlesConfig.filters.author = this.profile.username
    })
  }
}
