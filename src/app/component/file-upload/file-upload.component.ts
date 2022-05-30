import { Component, OnInit } from '@angular/core';
import {FileUploadService} from "../../services/file-upload.service";
import {Observable} from "rxjs";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file!: File; // Variable to store file
  currentFile!: File;

  progress = 0;
  message = '';

  fileInfos!: Observable<any>;

  // Inject service
  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  // On file Select
  onChange(event: any) {
    this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {
    this.progress = 0;
    this.loading = !this.loading;
    console.log(this.file);
    if (this.file) {
      this.currentFile = this.file;
      this.fileUploadService.upload(this.file).subscribe({
        next: (event: any) => {
            console.log(event.message);
            this.message = event.message;
        },
        error: (err: any) => {
          console.log(err);
          this.progress = 0;
          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the file!';
          }
        }
      });
    }
  }
}
