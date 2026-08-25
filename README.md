# Config Server

**Student Name:** Ahasna Charumee
**Student Number:** 241722057
**GCP Project ID:** project-f26e7e83-129c-40a6-977

## Project Description
Spring Cloud Config Server for the City Care Hospital Management microservice platform. Centralizes and externalizes configuration for all backend microservices (Eureka Server, API Gateway, Patient Service, Doctor Service, Appointment Service), allowing configuration changes without redeploying individual services.

## Technology Stack
- Java 25
- Spring Boot
- Spring Cloud Config Server
- PM2 (process management)
- Deployed on Google Cloud Platform (Compute Engine, Managed Instance Group)

## Setup / Getting Started
1. Clone the repository
2. Build the project: `./mvnw clean package -DskipTests`
3. Run with PM2: `pm2 start ecosystem.config.js`
4. Config server runs on port `8888` and serves configuration to all other microservices in the platform.

## Deployment
Deployed on a Google Compute Engine Managed Instance Group as part of the IaaS backend platform, managed by PM2 for automatic restart and process management. Runs alongside Eureka Server, API Gateway, and all backend services on the same VM instance template.