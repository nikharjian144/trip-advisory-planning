import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  public destinations: any;

  constructor(private destinationService: DestinationService) { }

  ngOnInit(): void {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');

    this.destinationService.getDestinations().subscribe(data => {
      this.destinations = data;
    });
  }

}
