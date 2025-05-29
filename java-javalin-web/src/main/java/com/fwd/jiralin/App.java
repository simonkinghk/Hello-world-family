package com.fwd.jiralin;

import io.javalin.Javalin;
import io.javalin.http.staticfiles.Location;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class App {
    // Store Jira content in memory
    private static final Logger LOG = LoggerFactory.getLogger(App.class);

    public static void main(String[] args) {
        Javalin app = Javalin.create(config -> {
            config.bundledPlugins.enableCors(cors -> {
                cors.addRule(it -> {
                    it.anyHost(); 
                });
            });
            config.staticFiles.add("/public", Location.CLASSPATH);
        }).start(8081);

        app.get("/echo", ctx -> ctx.result("Hello, World!"));
        LOG.info("Start javalin program");
    }
}

