package com.example.game.infrastructure

import com.example.game.application.BotPlayerService
import com.example.game.application.GameService
import com.example.game.domain.GameClass
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController


@RestController
class GameController(
    private val botPlayerService: BotPlayerService,
    private val gameService: GameService
) {
    @GetMapping("/game/getbotschoice", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun getBotsPlayersChoice(): MovePayload {
        val botChoice = botPlayerService.chooseSymbol()
        return MovePayload(botChoice)
    }

    @PostMapping("/game/playersMove",
        produces = [MediaType.APPLICATION_JSON_VALUE],
        consumes = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun retrievePlayersMove(@RequestBody playersMove: MovePayload): PlayersMoveResponse {
        val result = gameService.play(playersMove.choice)
        val response = PlayersMoveResponse(playersChoice = playersMove.choice, botChoice = result.first, playersWin = result.second)
        println(response)
        return response
    }
}

data class MovePayload(val choice: GameClass)

data class PlayersMoveResponse(val playersChoice: GameClass, val botChoice: GameClass, val playersWin: Boolean?)