import { Component } from '@angular/core';
import { Posts } from './posts';
import { Albums } from './albums';
import { Todos } from './todos';
import { ActivatedRoute } from '@angular/router';
import { DataUserIdService } from './data-user-id.service';

@Component({
  selector: 'app-data-user-id',
  templateUrl: './data-user-id.component.html',
  styleUrl: './data-user-id.component.scss'
})
export class DataUserIdComponent {

  posts_list: Posts[] = [];
  albums_list: Albums[] = [];
  todos_list: Todos[] = [];
  userId: number | undefined;

  constructor(private route: ActivatedRoute, private dataUserIdsService: DataUserIdService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id']; // Extract user ID from route parameters
      this.getDataByUserId(); // Call method to fetch data based on user ID
    });
  }

  getDataByUserId(): void {
    if (this.userId !== undefined) {
      this.getPostsByUserId(this.userId);
      this.getAlbumsByUserId(this.userId);
      this.getTodosByUserId(this.userId);
    }
  }

  getPostsByUserId(userId: number): void {
    if (userId !== undefined) {
      this.dataUserIdsService.getPostsByUserId(userId).subscribe(
        (data: Posts[]) => {
          this.posts_list = data;
        },
        (error) => {
          console.error('Error fetching posts:', error);
        }
      );
    }
  }

  getAlbumsByUserId(userId: number): void {
    if (userId !== undefined) {
      this.dataUserIdsService.getAlbumsByUserId(userId).subscribe(
        (data: Albums[]) => {
          this.albums_list = data;
        },
        (error) => {
          console.error('Error fetching albums:', error);
        }
      );
    }
  }

  getTodosByUserId(userId: number): void {
    if (userId !== undefined) {
      this.dataUserIdsService.getTodosByUserId(userId).subscribe(
        (data: Todos[]) => {
          this.todos_list = data;
        },
        (error) => {
          console.error('Error fetching todos:', error);
        }
      );
    }
  }

}
