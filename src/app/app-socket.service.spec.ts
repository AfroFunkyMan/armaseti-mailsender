/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppSocketService } from './app-socket.service';

describe('AppSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppSocketService]
    });
  });

  it('should ...', inject([AppSocketService], (service: AppSocketService) => {
    expect(service).toBeTruthy();
  }));
});
