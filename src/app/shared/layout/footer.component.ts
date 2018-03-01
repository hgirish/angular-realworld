import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  today: number = Date.now()
  @Input() version
  constructor() {}

  ngOnInit() {}
}
