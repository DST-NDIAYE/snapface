import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  faceSnaps$!: Observable<FaceSnap[]>;
  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
     this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  //   interval(1000).pipe(
  //     tap(console.log))
  //     .subscribe();
 

 }

}
