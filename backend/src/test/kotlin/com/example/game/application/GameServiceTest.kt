package com.example.game.application

import com.example.game.domain.GameClass
import com.example.game.domain.GameResult
import io.kotest.core.spec.style.FunSpec
import io.kotest.data.forAll
import io.kotest.data.row
import io.kotest.matchers.shouldBe
import org.mockito.Mockito.mock
import org.mockito.kotlin.whenever

class GameServiceTest : FunSpec({
    val botPlayerSerivce = mock<BotPlayerService>()
    val gameService = GameService(botPlayerSerivce)

    context("Testing game service") {
        test("should return bot players choice with correct game result") {
            forAll(
                row(GameClass.PAPER, GameClass.STONE, GameResult.PLAYERS_WIN),
                row(GameClass.PAPER, GameClass.SCISSORS, GameResult.BOT_WIN),
                row(GameClass.PAPER, GameClass.PAPER, GameResult.DRAW),
                row(GameClass.SCISSORS, GameClass.PAPER, GameResult.PLAYERS_WIN),
                row(GameClass.SCISSORS, GameClass.SCISSORS, GameResult.DRAW),
                row(GameClass.SCISSORS, GameClass.STONE, GameResult.BOT_WIN),
                row(GameClass.STONE, GameClass.PAPER, GameResult.BOT_WIN),
                row(GameClass.STONE, GameClass.STONE, GameResult.DRAW),
                row(GameClass.STONE, GameClass.SCISSORS, GameResult.PLAYERS_WIN)
            ) { playersChoice, botChoice, expectedResult ->
                whenever(botPlayerSerivce.chooseSymbol()).thenReturn(botChoice)

                val gameServiceResult = gameService.play(playersChoice)

                gameServiceResult.first shouldBe botChoice
                gameServiceResult.second shouldBe expectedResult
            }
        }
    }
})
