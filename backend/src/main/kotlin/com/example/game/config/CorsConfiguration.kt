package com.example.game.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter


@Configuration
open class CorsConfiguration {
    @Bean
    open fun corsFilter(): CorsFilter {
        val source = UrlBasedCorsConfigurationSource()
        val config = CorsConfiguration()

        config.addAllowedOrigin("http://localhost:4200")
        config.addAllowedOrigin("http://localhost")
        config.addAllowedMethod("*")

        config.addAllowedHeader("*")
        source.registerCorsConfiguration("/**", config)
        return CorsFilter(source)
    }
}