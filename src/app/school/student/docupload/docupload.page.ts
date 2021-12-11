import { Component, OnInit} from '@angular/core';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-docupload',
  templateUrl: './docupload.page.html',
  styleUrls: ['./docupload.page.scss'],
})

export class DocuploadPage implements OnInit {
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() { }

  onUpload(event) {
    for (let file of event.files)
    {
      this.uploadedFiles.push(file);
    }
    console.log('on upload')
  }

  cancelUpload() {
    console.log('on cancel')
    this.uploadedFiles = [];
  }

  DeleteSingle(e) {
    console.log(this.uploadedFiles)
    this.uploadedFiles.findIndex(el => el.name == e.file.name);
    this.uploadedFiles.splice(this.uploadedFiles.findIndex(el => el.name == e.file.name), 1);
    console.log(this.uploadedFiles)
    console.log('on cancel')
  }

  onRejectUpload() {
    this.messageService.clear('c');
  }
}
