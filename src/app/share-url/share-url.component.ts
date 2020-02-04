import {Component, Input, OnInit} from '@angular/core';
import {Router, UrlSerializer} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-share-url',
  templateUrl: './share-url.component.html',
  styleUrls: ['./share-url.component.css']
})
export class ShareUrlComponent implements OnInit {
  url = '';
  @Input() startTime;
  @Input() remain;
  @Input() started;
  @Input() paused;
  constructor(private router: Router, private serializer: UrlSerializer, private snackBar: MatSnackBar) {
  }
  ngOnInit() {
    this.url = '';
  }
  buildUrl(): string {
    return '/'.concat('?')
      .concat('startTime=').concat(this.startTime)
      .concat('&')
      .concat('remain=').concat(this.remain)
      .concat('&')
      .concat('started=').concat(this.started)
      .concat('&')
      .concat('paused=').concat(this.paused)
      .concat('&')
      .concat('autoStart=').concat('true');
  }
  copyLink(): void {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.buildUrl();
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.snackBar.open('URL Copied to clipboard', 'Undo', {
      duration: 3000
    });
  }
}
