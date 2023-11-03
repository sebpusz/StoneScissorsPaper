import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameClass } from '../domain/gameClass';
import { GameResult } from 'src/domain/gameResult';

@Injectable({
    providedIn: 'root',
  })
export class Gameservice { 
    constructor(private httpClient: HttpClient) { }

    async postUserInput(playersChoice: GameClass) : Promise<PlayerMoveResponse> { 
        const headers = new HttpHeaders().set("Content-Type", "application/json").set("Accept", "application/json")
        return new Promise((resolve, reject) => {
        this.httpClient.post<PlayerMoveResponse>("http://localhost:8080/game/playersMove", {
                "choice": playersChoice
            }, { headers }).subscribe({
                error: (error) => { reject(error) },
                next: (result) => { 
                    console.log(result)
                    resolve(result)
                }
            });
        });
    }
}

interface PlayerMoveResponse {
    playersChoice: GameClass, 
    botChoice: GameClass, 
    result: GameResult;
  }
  
