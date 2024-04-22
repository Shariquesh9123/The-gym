import { Component } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  expandImage(event: Event) {
    const imageElement = event.target as HTMLImageElement;
    imageElement.classList.toggle('expanded');
  }
}
