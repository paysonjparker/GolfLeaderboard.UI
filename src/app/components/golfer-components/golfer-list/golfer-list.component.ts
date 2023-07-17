import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Golfer } from 'src/app/models/golfer';
import { GolferServiceService } from 'src/app/services/golfer-service.service';

@Component({
  selector: 'app-golfer-list',
  templateUrl: './golfer-list.component.html',
  styleUrls: ['./golfer-list.component.css']
})
export class GolferListComponent {

  @Input()
  golfer!: Golfer;

  golfers: Golfer[] = [];

  selectedGolfer!: any;

  constructor(private router: Router, private service: GolferServiceService){
    
  }

  ngOnInit(){
    this.service.getGolfers((golfers: Golfer[]) => this.golfers = golfers);
    console.log(this.golfers);
  }

  onSelectGolfer(golferId: string){
    console.log(golferId);
    this.router.navigate(['/golfer/' + golferId]);
  }
}
