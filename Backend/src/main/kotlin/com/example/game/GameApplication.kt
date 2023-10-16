package com.example.game

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
open class GameApplication

fun main(args: Array<String>) {
    runApplication<GameApplication>(*args)
}
