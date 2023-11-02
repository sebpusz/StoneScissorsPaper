package com.example.game.application

import com.example.game.domain.GameClass
import com.example.game.domain.GameResult
import org.springframework.stereotype.Component

@Component
class GameService(private val botPlayerService: BotPlayerService) {
    fun play(playersChoice: GameClass): Pair<GameClass, GameResult> {
        val botChoice = botPlayerService.chooseSymbol()
        val result = calculateResult(botChoice, playersChoice)
        return Pair(botChoice, result)
    }
    private fun calculateResult(botChoice: GameClass, playersChoice: GameClass): GameResult {
        return when (playersChoice) {
            botChoice -> convertingtoGameResult(null)
            GameClass.STONE -> convertingtoGameResult(botChoice == GameClass.SCISSORS)
            GameClass.PAPER -> convertingtoGameResult(botChoice == GameClass.STONE)
            GameClass.SCISSORS -> convertingtoGameResult(botChoice == GameClass.PAPER)
        }
    }

    private fun convertingtoGameResult(resultBoolean: Boolean?): GameResult {
        return when (resultBoolean) {
            true -> GameResult.PLAYERS_WIN
            false -> GameResult.BOT_WIN
            null -> GameResult.DRAW
        }
    }
}
