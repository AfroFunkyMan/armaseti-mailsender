/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { AppSocketService } from './app-socket.service';
describe('AppSocketService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [AppSocketService]
        });
    });
    it('should ...', inject([AppSocketService], function (service) {
        expect(service).toBeTruthy();
    }));
});
