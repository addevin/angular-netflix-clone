import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  constructor(private service:MovieApiServiceService, private router:ActivatedRoute, private sanitizer: DomSanitizer){}
  
  movieDetails:any;
  movieVideo:any;
  movieVideos:any;
  movieVideoTrailer:any;
  movieCast:any;
  error:string|undefined;
  ngOnInit(): void {
    let movieID = this.router.snapshot.paramMap.get('id') 
      this.getMovie(movieID)
      this.getVideo(movieID)
      this.getCast(movieID)
      
  }
  
  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=>{
      this.movieDetails = result
      console.log(result);      
    })
  }
  getVideo(id:any){
    this.service.getMovieVideo(id).subscribe((result)=>{
      console.log(result);
      result.results.forEach((e:any) => {
        if(e.type == 'Trailer'){
          this.movieVideoTrailer = e.key;
          
        }
        this.movieVideos = result.results;
      });
    })
  }
  getCast(id:any){
    this.service.getMovieCast(id).subscribe((result)=>{
      this.movieCast = result.cast;
      
    })
  }
  movieVidUrl(url:string){
    this.movieVideo = this.sanitizer.bypassSecurityTrustResourceUrl(url)
    // this.movieVideo = this.movieVideo.changingThisBreaksApplicationSecurity
  }
  
}
