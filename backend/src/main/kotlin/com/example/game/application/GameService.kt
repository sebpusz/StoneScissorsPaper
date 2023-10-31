package com.example.game.application

import com.example.game.domain.GameClass
import org.springframework.stereotype.Component

@Component
class GameService(private val botPlayerService: BotPlayerService) {
    fun play(playersChoice: GameClass): Pair<GameClass, Boolean?> {
        val botChoice = botPlayerService.chooseSymbol()
        val result = calculateResult(botChoice, playersChoice)
        return Pair(botChoice, result)
    }
    private fun calculateResult(botChoice: GameClass, playersChoice: GameClass): Boolean? {
        return when (playersChoice) {
            botChoice ->  null
            GameClass.STONE -> botChoice == GameClass.SCISSORS
            GameClass.PAPER -> botChoice == GameClass.STONE
            GameClass.SCISSORS -> botChoice == GameClass.PAPER
        }
    }
}