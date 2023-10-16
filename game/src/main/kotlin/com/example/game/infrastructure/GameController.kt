package com.example.game.infrastructure

import com.example.game.application.BotPlayerService
import com.example.game.domain.GameClass
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController


@RestController
class GameController(
    private val botPlayerService: BotPlayerService
) {
    @GetMapping("/game/getbotschoice", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun getBotsPlayersChoice(): BotChoiceResponse {
        val botChoice = botPlayerService.chooseSymbol()
        return BotChoiceResponse(botChoice)
    }
}

data class BotChoiceResponse(val choice: GameClass)