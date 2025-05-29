
## Configuration

*   **Port:** The application runs on port `8081` by default. This can be changed in the `App.java` file.
*   **Logging:** The logging configuration is defined in `src/main/resources/logback.xml`.  You can adjust the logging levels and appenders as needed. Log4j2 configuration is also included in `src/main/resources/log4j2.xml` although logback is being used at the moment.
*   **Static Files:** Static files are served from the `/public` directory in the classpath.  This can be configured in the `App.java` file.

## Dependencies

The project uses the following dependencies:

*   `io.javalin:javalin:6.4.0`
*   `ch.qos.logback:logback-classic:1.4.6`

These dependencies are managed by Maven and declared in the `pom.xml` file.

## Building an Executable JAR

The project is configured to build an executable JAR file using the Maven Shade Plugin.  This JAR file contains all the necessary dependencies to run the application. The `maven-jar-plugin` configures the main class to be `com.fwd.jiralin.App`.

## License

This project is licensed under the [Specify License] License.