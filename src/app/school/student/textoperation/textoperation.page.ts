import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-textoperation',
  templateUrl: './textoperation.page.html',
  styleUrls: ['./textoperation.page.scss'],
})
export class TextoperationPage implements OnInit {

  items: MenuItem[];
  text;
  constructor() { }

  ngOnInit() {

    this.text = "In the eyes of millions of his fellow Indians, Gandhi was the Mahatma (“Great Soul”). The unthinking adoration of the huge crowds that gathered to see him all along the route of his tours made them a severe ordeal; he could hardly work during the day or rest at night. “The woes of the Mahatmas,” he wrote, “are known only to the Mahatmas.” His fame spread worldwide during his lifetime and only increased after his death. The name Mahatma Gandhi is now one of the most universally recognized on earth."


    this.items = [
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-times',
        command: () => this.menuSelect("Delete") 
      },
      {
        label: 'Highlighter',
        icon: 'pi pi-fw pi-star',
        command: () => this.menuSelect("Highlighter") 
      },
      {
        label: 'Comment',
        icon: 'pi pi-fw pi-comments',
        command: () => this.menuSelect("Comment") 
      },
      {
        label: 'Undo',
        icon: 'pi pi-fw pi-undo',
        command: () => this.menuSelect("Undo") 
      },
      {
        label: 'Redo',
        icon: 'pi pi-fw pi-replay',
        command: () => this.menuSelect("Redo") 
      }
    ];
  }

  menuSelect(e){
    console.log(e);
  }

   handleClick() {
   

    const selection = window.getSelection();
    const selectionRange = window.getSelection().getRangeAt(0);
        const textSelected = selection.toString();
        console.log(textSelected)
        console.log(selectionRange)
  }
}
