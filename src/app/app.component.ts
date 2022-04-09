import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <div>
    <h2>Angular Accordion Example </h2>

    <accordion>
        <group title="First Group">this is the content</group>
        <group title="Second Group">
          <input type="text" class="form-control" />
          <button>Send</button>
        </group>
      </accordion>
  </div>
  `,
})
export class AppComponent {}
