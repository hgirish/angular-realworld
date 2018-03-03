import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { User, UserService, Profile } from '../shared'
@Component({
  selector: 'profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { profile: Profile }) => {
      this.profile = data.profile
    })

    this.userService.currentUser.subscribe((userData: User) => {
      this.currentUser = userData
      this.isUser = this.currentUser.username === this.profile.username
    })
  }

  profile: Profile
  currentUser: User
  isUser: boolean

  onToggleFollowing(following: boolean) {
    this.profile.following = following
  }
}
