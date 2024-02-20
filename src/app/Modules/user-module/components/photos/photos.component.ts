import { Component } from '@angular/core';
import { Photos } from './photos';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})
export class PhotosComponent {

  photos_list: Photos[] = [];
  id: number | undefined;
  name: string | undefined;
  albumTitle: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private photosService: PhotosService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // Explicitly casting to number
      this.albumTitle = params['title'];
      this.getPhotosById(this.id);
    });
  }

  getPhotosById(id: number): void {
    if (id !== undefined) {
      this.photosService.getPhotosById(id).subscribe(
        (data: Photos[]) => {
          if(data.length > 0){
            this.photos_list = data;
            this.name = data[0].title
          }
        },
        (error) => {
          console.error('Error fetching posts:', error);
        }
      );
    }
  }

}
