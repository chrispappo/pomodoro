import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pomodoro';
  buttonTitle = 'START';
  buttonStyle = 'primary';
  started = false;
  paused = false;
  autoStart = false;
  seconds; startTime;
  interval;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.seconds = params.remain;
      this.started = params.started;
      this.paused = params.paused;
      this.autoStart = params.autoStart;
      this.isAutoStart();
    });
  }

  ngOnInit() {
    this.seconds = 25 * 60;
  }
  isAutoStart() {
    if (this.autoStart) {
      this.startOrPause();
    }
  }
  startOrPause() {
    if (this.started && !this.paused) {
      this.pauseTimer();
      this.buttonTitle = 'RESUME';
      this.buttonStyle = 'primary';
      this.paused = true;
      return;
    }
    this.paused = false;
    this.started = true;
    this.startTime = Date.now().toString();
    this.interval = setInterval(() => {
      this.seconds--;
    }, 1000);
    this.buttonTitle = 'PAUSE';
    this.buttonStyle = 'accent';
  }

  pauseTimer() {
    clearInterval(this.interval);
  }


}
