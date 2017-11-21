import { Component } from '@angular/core';

@Component({
  selector: 'my-form',
  template: `
    <link rel="stylesheet" href="https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css">
    <h2>Form</h2>
    {{diagnostic}}
    <form #userForm="ngForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name"
                required
                [(ngModel)]="user.name" name="name"
                #spy/>
        <br />TODO: remove this: {{spy.className}}
      </div>
      <div class="form-group">
        <label for="alterEgo">Alter Ego</label>
        <input type="text" class="form-control" id="alterEgo"
                [(ngModel)]="user.alterEgo" name="alterEgo"/>
      </div>
      <div class="form-group">
        <label for="power">User Power</label>
        <select id="power" class="form-control"
                required
                [(ngModel)]="user.power" name="power">
          <option *ngFor="let pow of powers" [value]="pow">{{pow}}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  `,
  styles: [`
    .ng-valid[required], .ng-valid.required  {
      border-left: 5px solid #42A948; /* green */
    }
    .ng-invalid:not(form)  {
      border-left: 5px solid #a94442; /* red */
    }
  `]
})
export class FormComponent {

  powers = [ 'Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer' ];

  user = new User(18, 'Dr IQ', this.powers[0], 'Chuck overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // for debug.
  get diagnostic() { return JSON.stringify(this.user); }
}

class User {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public tel?: string
  ) {}
}
