import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SageService } from 'src/app/sage.service';

@Component({
  selector: 'app-artforms',
  templateUrl: './artforms.component.html',
  styleUrls: ['./artforms.component.css']
})
export class ArtformsComponent {
  constructor(private router:Router, private sage:SageService){}
  artforms=this.sage.giveData();

gotohere(id:any)
{
  localStorage.setItem('id',id);
  this.router.navigate(['/single'])
}
}


