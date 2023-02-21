import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  bannerApiData:any = []
  trendingMovieData:any = []
  actionMovieData:any = []
  adventureMovieData:any = []
  comedyMovieData:any = []
  documentaryMovieData:any = []
  scifiMovieData:any = []
  thrillerMovieData:any = []
  animationMovieData:any = []
  ngOnInit(): void {
    this.bannerData();  
    this.trendingData();  
    this.actionData();
    this.adventureData()
    this.comedyData();
    this.documentaryData()
    this.scifiData()
    this.thrillerData()
    this.animationData()
  }
  constructor(private service:MovieApiServiceService){}

  //Banner Data
  bannerData(){
    this.service.getBannerApiData().subscribe((result)=>{
      this.bannerApiData = result.results;
      
    })
  }
  trendingData(){
    this.service.getTrendingMovieApiData().subscribe((data)=>{
      this.trendingMovieData = data.results;
    })
  }
  actionData(){
    this.service.getActionMovies().subscribe((data)=>{
      this.actionMovieData = data.results;
    })
  }
  adventureData(){
    this.service.getAdventureMovies().subscribe((data)=>{
      this.adventureMovieData = data.results;
    })
  }
  comedyData(){
    this.service.getComedyMovies().subscribe((data)=>{
      this.comedyMovieData = data.results;
    })
  }
  documentaryData(){
    this.service.getDocumentaryMovies().subscribe((data)=>{
      this.documentaryMovieData = data.results;
    })
  }
  scifiData(){
    this.service.getSciFiMovies().subscribe((data)=>{
      this.scifiMovieData = data.results;
    })
  }
  animationData(){
    this.service.getAnimationMovies().subscribe((data)=>{
      this.animationMovieData = data.results;
    })
  }
  thrillerData(){
    this.service.getThrillerMovies().subscribe((data)=>{
      this.thrillerMovieData = data.results;
    })
  }
  
}
