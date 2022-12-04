import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import HLS from 'hls.js';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
})
export class VideoPlayerComponent implements OnInit {
  private hls = new HLS();
  public user: string | null = 'HOME';
  private playing: boolean = false;
  @ViewChild('video', { static: true }) private readonly video:
    | ElementRef<HTMLVideoElement>
    | any;

  constructor(private route: ActivatedRoute) {}

  public ngOnInit() {
    this.user = this.route.snapshot.paramMap.get('user') || 'HOME';
    this.load(`http://25.6.4.246:8000/live/${this.user}/index.m3u8`);
  }

  public loadInit(): void {}

  public load(currentVideo: string): void {
    if (HLS.isSupported()) {
      this.loadVideoWithHLS(currentVideo);
    } else {
      console.log('Ups! no es soportado por tu navegador');
    }
  }

  private loadVideoWithHLS(currentVideo: string) {
    this.hls.loadSource(currentVideo);
    this.hls.attachMedia(this.video.nativeElement);
  }
}
