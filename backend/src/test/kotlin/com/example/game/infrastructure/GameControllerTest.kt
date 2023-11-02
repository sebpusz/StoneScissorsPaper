package com.example.game.infrastructure
import com.example.game.application.GameService
import com.example.game.domain.GameClass
import com.example.game.domain.GameResult
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import org.mockito.Mockito.mock
import org.mockito.kotlin.whenever

class GameControllerTest : FunSpec({
    val gameService = mock<GameService>()

    val gameController = GameController(gameService)

    context("function retrievePlayersMove") {
        test("should return game stats") {
            val playersChoice = GameClass.PAPER
            val botChoice = GameClass.PAPER
            val gameResult = GameResult.DRAW

            whenever(gameService.play(playersChoice)).thenReturn(Pair(botChoice, gameResult))

            val controllerResult = gameController.retrievePlayersMove(MovePayload(playersChoice))
            val expectedResult = GameResultResponse(playersChoice, botChoice, gameResult)
            controllerResult shouldBe expectedResult
        }
    }
})
