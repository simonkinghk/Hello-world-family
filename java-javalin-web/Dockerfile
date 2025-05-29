# Use an official OpenJDK runtime as a parent image
FROM openjdk:17

# Set the working directory in the container

WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app
RUN chmod -R 777 /app/src/main/resources/public

# RUN mvn clean package

# Run the application
CMD ["java", "-jar", "target/javalin-demo-app-1.0-SNAPSHOT.jar"]
