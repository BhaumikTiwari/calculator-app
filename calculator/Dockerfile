# Use a lightweight JDK base image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy all files to the container
COPY . /app

# Build the Spring Boot app (skip tests to speed it up)
RUN mvn clean package -DskipTests


# Run the JAR (replace name if different)
CMD ["java", "-jar", "target/calculator-0.0.1-SNAPSHOT.jar"]