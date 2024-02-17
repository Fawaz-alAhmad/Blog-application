import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  public commentForm: FormGroup = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Comment: new FormControl('', [Validators.required]),
  })

  ngOnInit():void{

  }

}
