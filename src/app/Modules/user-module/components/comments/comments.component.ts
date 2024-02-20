import { Component } from '@angular/core';
import { comments } from './comments';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {

  comments_list: comments[] = [];
  id: number | undefined;
  name: string | undefined;
  postTitle: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.getCommentsById(this.id);
      }
    });
  }


  getCommentsById(id: number): void {
    if (id !== undefined) {
      this.commentsService.getCommentsById(id).subscribe(
        (data: comments[]) => {
          if (data.length > 0) {
            this.comments_list = data;
            this.name = data[0].name;
          }
        },
        (error) => {
          console.error('Error fetching comments:', error);
        }
      );
    }
  }

}
