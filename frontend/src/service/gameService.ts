import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameClass } from '../domain/gameClass';


@Injectable({
    providedIn: 'root',
  })
export class Gameservice { 
    constructor(private httpClient: HttpClient) { }

    sendUserInput() { 
        const headers = new HttpHeaders().set("Content-Type", "application/json").set("Accept", "application/json")

        return this.httpClient.get("http://localhost:8080/game/getbotschoice", { headers }).subscribe({
            complete: () => { console.log("The POST observable is now completed.") }, 
            error: () => { console.log("POST call in error") },
            next: () => {  console.log("POST call successful value returned in body") },
            });
    }

    postUserInput(playersChoice: GameClass) { 
        const headers = new HttpHeaders().set("Content-Type", "application/json").set("Accept", "application/json")
        this.httpClient.post("http://localhost:8080/game/playersMove", {
            "choice": playersChoice
        }, { headers }).subscribe({
            error: () => { console.error("Error uccored while posting user input") },
            next: (result) => { console.log(result) }
            });
    }
}
