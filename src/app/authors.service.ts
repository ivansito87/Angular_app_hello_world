import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors() {
    return ["autor1", "autor2", "autor3"]
  }
}
