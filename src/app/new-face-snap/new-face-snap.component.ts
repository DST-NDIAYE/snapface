import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  monFormulaire!: FormGroup ;

  constructor( private formbuilder: FormBuilder) { }

  ngOnInit(): void {

    this.monFormulaire = this.formbuilder.group({
      title: [null],
      description: [null],
      imageUrl: [null],
      location: [null]
     }) ;
  }


  onSubmitForm() {
    console.log(this.monFormulaire.value);
}

}
