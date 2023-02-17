import { Component } from '@angular/core';
import { SageService } from 'src/app/sage.service';
@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent {
  constructor(private sage:SageService){}
  data=this.sage.giveData()

  single:any
  ngOnInit(){
    let id=Number(localStorage.getItem('id'))
    this.single=this.data.filter(e =>e.id==id)
    console.log("name",this.single)
  }
}
