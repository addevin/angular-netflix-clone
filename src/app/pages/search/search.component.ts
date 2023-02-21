import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private service:MovieApiServiceService){}
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  })
  searchData:any = [''];
  searchSuggestList:any ;
  submitForm(){
    this.searchData = null //trying to set loading..
    this.service.getSearchMovie(this.searchForm.value).subscribe((data)=>{
      this.searchData = data.results;
      this.searchSuggestList = null;
    })
    
  }
  searchSuggest(){
    this.service.getSearchMovie(this.searchForm.value).subscribe((data)=>{
      this.searchSuggestList = data.results.slice(0,11);
    })
  }
  cancelSuggest(){
    setTimeout(()=>{
      this.searchSuggestList = null;

    },500)
    
  }
}
