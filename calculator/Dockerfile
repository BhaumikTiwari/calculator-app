FROM openjdk:21-jdk-slim

WORKDIR /app

COPY . /app

RUN ./mvnw clean package -DskipTests

CMD ["java", "-jar", "target/calculator-0.0.1-SNAPSHOT.jar"]
