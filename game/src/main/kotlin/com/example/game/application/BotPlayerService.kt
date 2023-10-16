package com.example.game.application

import com.example.game.domain.GameClass
import org.springframework.stereotype.Component

@Component
class BotPlayerService() {
    fun chooseSymbol() = GameClass.values().random()
}
