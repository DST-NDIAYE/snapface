import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  monFormulaire!: FormGroup ;
  facesnapAttend$!:  Observable<FaceSnap> ; 


  constructor( private formbuilder: FormBuilder) { }



  ngOnInit(): void {



    this.monFormulaire = this.formbuilder.group({
      title: [null],
      description: [null],
      imageUrl: [null],
      location: [null]
     }) ;
  
  
     this.facesnapAttend$ = this.monFormulaire.valueChanges.pipe(

      map( formValue => ({
        ...formValue ,
        createdDate: new Date(),
        snaps: 0,
        id: 0

      })  )

     ) ;


    }


  onSubmitForm() {
    console.log(this.monFormulaire.value);
}

}
