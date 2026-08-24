module.exports = {
    apps: [
        {
            name: "config-server",
            script: "java",
            args: "-jar target/config-server-0.0.1-SNAPSHOT.jar",
            interpreter: "none",
            autorestart: true,
            max_restarts: 10,
            restart_delay: 3000
        }
    ]
};