import { Injectable } from '@angular/core'

@Injectable()
export class JwtService {
  constructor() {}

  private readonly jwtTokenName = 'jwtToken'

  getToken(): string {
    return window.localStorage[this.jwtTokenName]
  }

  saveToken(token: String) {
    window.localStorage[this.jwtTokenName] = token
  }

  destroyToken() {
    window.localStorage.removeItem(this.jwtTokenName)
  }
}
