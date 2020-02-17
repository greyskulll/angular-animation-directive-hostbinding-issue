import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('heightChange', [
    transition('void <=> *', []),
    transition('* <=> *', [
      style({
        height: '{{currentHeight}}px',
        opacity: 0.7
      }),
      animate('{{animationDurationMs}}ms {{animationFunction}}')
    ], {
      params: {
        currentHeight: 0,
        animationDurationMs: 300,
        animationFunction: 'ease-out'
      }
    })
  ])]
})
export class AppComponent implements OnInit {
  title = 'animation-directive-test';

  changeHeight = true;
  // tslint:disable-next-line:max-line-length
  staticContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut eu sem integer. Turpis nunc eget lorem dolor. Tincidunt ornare massa eget egestas purus viverra. Cursus metus aliquam eleifend mi. Sit amet nisl suscipit adipiscing bibendum est ultricies. Tincidunt arcu non sodales neque sodales ut etiam sit. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Maecenas pharetra convallis posuere morbi. Eleifend donec pretium vulputate sapien. Leo duis ut diam quam. Lorem sed risus ultricies tristique nulla aliquet.';
  dynamicContent: string;

  ngOnInit(): void {
    this.dynamicContent = this.staticContent;
  }

  expandCollapse() {
    if (this.changeHeight) {
      this.dynamicContent = this.staticContent + this.staticContent;
    } else {
      this.dynamicContent = this.staticContent;
    }
    this.changeHeight = !this.changeHeight;
  }
}
