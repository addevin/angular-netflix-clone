import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {
  
  constructor(private http:HttpClient) { }
  baseUrl = 'https://api.themoviedb.org/3'
  apiKey = '7ad668f5e95165e4b29386d379ffc9cc'
  apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWQ2NjhmNWU5NTE2NWU0YjI5Mzg2ZDM3OWZmYzljYyIsInN1YiI6IjYzZTY1NWY2YzJmZjNkMDBjM2RiNmVmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VQhikQR1Md3OrPyCohlkGuCztgXBYUu0j_789xAc1G0'
  
  getBannerApiData():Observable<any>{
    const bannerApi = `${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`
    return this.http.get(bannerApi)
  }
  getTrendingMovieApiData():Observable<any>{
    const trendingApi = `${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`
    return this.http.get(trendingApi)
  }
  getSearchMovie(q:any):Observable<any>{
    const searchApi = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${q.movieName}`
    return this.http.get(searchApi)
  }
  getMovieDetails(data:String):Observable<any>{
    const movieApi = `${this.baseUrl}/movie/${data}?api_key=${this.apiKey}`
    return this.http.get(movieApi)
  }
  getMovieVideo(data:any):Observable<any>{
    const movieApi = `${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}`
    return this.http.get(movieApi)

  }
  getMovieCast(data:any):Observable<any>{
    const movieApi = `${this.baseUrl}/movie/${data}/credits?api_key=${this.apiKey}`
    return this.http.get(movieApi)

  }
  getActionMovies():Observable<any>{
    const movieApi = `${this.baseUrl}/discover/movie/?api_key=${this.apiKey}&with_genres=28`
    return this.http.get(movieApi)
  }
  getAdventureMovies():Observable<any>{
    const movieApi = `${this.baseUrl}/discover/movie/?api_key=${this.apiKey}&with_genres=12`
    return this.http.get(movieApi)
  }
  getAnimationMovies():Observable<any>{
    const movieApi = `${this.baseUrl}/discover/movie/?api_key=${this.apiKey}&with_genres=16`
    return this.http.get(movieApi)
  }
  getComedyMovies():Observable<any>{
    const movieApi = `${this.baseUrl}/discover/movie/?api_key=${this.apiKey}&with_genres=35`
    return this.http.get(movieApi)
  }
  getDocumentaryMovies():Observable<any>{
    const movieApi = `${this.baseUrl}/discover/movie/?api_key=${this.apiKey}&with_genres=99`
    return this.http.get(movieApi)
  }
  getSciFiMovies():Observable<any>{
    const movieApi = `${this.baseUrl}/discover/movie/?api_key=${this.apiKey}&with_genres=878`
    return this.http.get(movieApi)
  }
  getThrillerMovies():Observable<any>{
    const movieApi = `${this.baseUrl}/discover/movie/?api_key=${this.apiKey}&with_genres=53`
    return this.http.get(movieApi)
  }
}
