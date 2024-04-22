import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  displayImages: boolean = true;
  displayVideos: boolean = true;

  showAll() {
    this.displayImages = true;
    this.displayVideos = true;
  }
  showImages() {
    this.displayImages = true;
    this.displayVideos = false;

  }

  showVideos() {
    this.displayImages = false;
    this.displayVideos = true;
  }
}
