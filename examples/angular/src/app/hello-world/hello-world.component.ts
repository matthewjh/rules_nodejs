import {Component} from '@angular/core';
import {shorten} from '@bazel/shorten';
import {format} from 'date-fns';

console.log(shorten);

@Component({
  selector: 'hello-world',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['./hello-world.component.scss', './secondary-styles.scss']
})
export class HelloWorldComponent {
  name: string = shorten('Adolph Blaine, Senior ', 15);
  date: string = format(new Date(), 'MMMM D, YYYY');
}
