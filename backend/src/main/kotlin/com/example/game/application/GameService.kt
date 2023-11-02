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
            botChoice -> GameResult.DRAW
            GameClass.STONE -> if (botChoice == GameClass.SCISSORS) GameResult.PLAYERS_WIN else GameResult.BOT_WIN
            GameClass.PAPER -> if (botChoice == GameClass.STONE) GameResult.PLAYERS_WIN else GameResult.BOT_WIN
            GameClass.SCISSORS -> if (botChoice == GameClass.PAPER) GameResult.PLAYERS_WIN else GameResult.BOT_WIN
        }
    }
}
