import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  content = [
    {
      cont: "https://images.unsplash.com/photo-1525265332434-d52e2314161d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
    },
    {
      cont:"https://images.unsplash.com/photo-1572461354052-0105fe842087?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=874&q=80"
    },
    {
      cont:"https://images.unsplash.com/photo-1545043565-42d7d40b2a9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    },
    {
      cont:"https://images.unsplash.com/photo-1587314168485-3236d6710814?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=670&q=80"
    }
  ]

}
