import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalState = new BehaviorSubject<any>(null);
  modalState$ = this.modalState.asObservable();

  open(config: any) {
    this.modalState.next(config);
  }

  close() {
    this.modalState.next(null);
  }
}
