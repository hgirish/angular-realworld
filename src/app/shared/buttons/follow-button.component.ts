import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core'
import { Router, Route } from '@angular/router'

import { Profile } from '../models'
import { ProfilesService, UserService } from '../services'

@Component({
  selector: 'follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.css']
})
export class FollowButtonComponent implements OnInit {
  constructor(
    private profilesService: ProfilesService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {}

  @Input() profile: Profile
  @Output() onToggle = new EventEmitter<boolean>()
  isSubmitting = false

  toggleFollowing() {
    this.isSubmitting = true

    this.userService.isAuhenticated.subscribe(authenticated => {
      if (!authenticated) {
        this.router.navigateByUrl('/login')
        return
      }

      if (!this.profile.following) {
        this.profilesService.follow(this.profile.username).subscribe(data => {
          this.isSubmitting = false
          this.onToggle.emit(true)
        }, err => (this.isSubmitting = false))
      } else {
        this.profilesService.unfollow(this.profile.username).subscribe(data => {
          this.isSubmitting = false
          this.onToggle.emit(false)
        }, err => (this.isSubmitting = false))
      }
    })
  }
}
