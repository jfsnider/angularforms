import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularforms';
  defaultState = 'ohio';

  firstname!: string;
  lastname!: string;
  streetAddress!: string;
  emailAddress!: string;
  state!: string;

  @ViewChild('myForm') form!: NgForm;




  onSubmit() {
    console.log(this.form);

    this.firstname = this.form.value.personDetails.firstname;
    this.lastname = this.form.value.personDetails.lastname;
    this.streetAddress = this.form.value.personDetails.address;
    this.state = this.form.value.personDetails.stateselect;
    this.emailAddress = this.form.value.personDetails.email;

    this.form.reset();
  }

}
