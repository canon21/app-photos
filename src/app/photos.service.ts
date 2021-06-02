import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface UnsplashResponse {
  urls: {
    regular: string,
    raw: string,
    small: string,
    thumb: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  //Dependency injection
  constructor(private httpClient: HttpClient) { }


  getRandomPhoto() {
    return this.httpClient.get<UnsplashResponse>('https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization: 'Client-ID -xQCi8vQUIESd7lt08MM-g-tGAFSXSmLuxW4LIKOWGo'
        }
      });
  }

}
