import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import { Gameservice } from './gameService';
import { GameClass } from 'src/domain/gameClass';

describe('gameService', () => {
    let httpMock: HttpTestingController;
    let service: Gameservice;


    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
        ],
        providers: [
        ]
      });
      service = TestBed.inject(Gameservice);
      httpMock = TestBed.inject(HttpTestingController);
    });
  
    afterEach(() => {
      httpMock.verify();
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    describe('When send players move', () => {
        it('Then game backend endpoint is called', async () => {
          service.postUserInput(GameClass.STONE);
          const req = httpMock.expectOne(`http://localhost:8080/game/playersMove`);
          expect(req.request.method).toBe('POST');
        });
    
        it('Then game backend is called with body', async () => {
          service.postUserInput(GameClass.STONE);
    
          const req = httpMock.expectOne(`http://localhost:8080/game/playersMove`);
          expect(req.request.method).toBe('POST');
          expect(req.request.body).toEqual({
            choice: GameClass.STONE
          });
          expect(req.request.responseType).toEqual('json');
        });
    });
});