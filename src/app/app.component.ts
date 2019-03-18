import { Component, Inject, Input } from '@angular/core';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-management-system';
  books:string[] = ["Angular", "Java", "Spring"];
 //@Input(BookdetailsComponent) details;
  ngAfterViewInit(){
   // this.details = details;
  }
}

