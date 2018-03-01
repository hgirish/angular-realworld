import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { ReplaySubject } from 'rxjs/ReplaySubject'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class UserService {
  constructor() {}
}
