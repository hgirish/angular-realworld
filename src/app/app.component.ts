import { Component, VERSION, OnInit } from '@angular/core'
import { UserService } from './shared'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  version = `Angular! v${VERSION.full}`
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.populate()
  }
}
