import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor( private http: HttpClient ) { }


  faceSnaps: FaceSnap[] = [];

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    // const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    // if (!faceSnap) {
    //   throw new Error('FaceSnap not found!');
    // } else {
    //   return faceSnap;
    // }

    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`) 

  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
        map(faceSnap => ({
            ...faceSnap,
            snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
        })),
        switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
            `http://localhost:3000/facesnaps/${faceSnapId}`,
            updatedFaceSnap)
        )
    );
}


  AjoueFacesnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): void {
    const facesnapAjouter = {
      ...formValue,
      snaps: 0,
      createdDate: new Date(),
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    };
    this.faceSnaps.push(facesnapAjouter);
  }



  




}


