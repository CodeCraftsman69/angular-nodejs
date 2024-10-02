import { NgFor, NgIf } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MatExpansionModule,NgFor,NgIf],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  @Input({ required: true }) addPost: any[] = [];
  
  ngOnInit(): void {}
}

