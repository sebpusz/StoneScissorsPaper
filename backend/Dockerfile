FROM openjdk:17-slim

WORKDIR /app
COPY build/libs/game-0.0.1-SNAPSHOT.jar /app/game.jar
EXPOSE 8080

CMD ["java", "-jar", "game.jar"]
