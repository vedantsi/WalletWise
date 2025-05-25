# WalletWise

## Table of Contents

-   [Project Description](#project-description)
-   [Objectives](#objectives)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Tech Stack](#tech-stack)

## Project Description

> Wallet Wise is a web-based application focused on empowering users to seamlessly monitor and manage their daily financial transactions. Featuring OTP-based authentication, it replaces conventional login methods to significantly enhance security and reduce exposure to common threats. Designed with scalability and resilience in mind, Wallet Wise ensures consistent performance even as user demand increases.

## Objectives

> -   Deliver a secure and intuitive authentication solution optimized for use over public networks.
> -   Enable users to safely monitor and manage their daily transactions through a trusted platform.

## Features

> #### User Authentication
>
> -   Implemented OTP-based email verification during user registration and login processes.
> -   Enabled password reset functionality through OTP authentication for enhanced security.
> -   Integrated temporary account blocking after multiple invalid login attempts to prevent unauthorized access.
> -   Configured email notifications to alert users of suspicious or failed login attempts.

> #### Transaction Dashboard
>
> -   Developed a visual dashboard providing users with a comprehensive overview of their transactions.
> -   Allowed users to create, update, and delete individual transactions with ease.
> -   Included secure logout functionality to ensure session safety and privacy.

## Technologies Used

> #### Backend
>
> -   Developed RESTful APIs using Node.js and Express.js to support the application's core functionalities.
> -   Implemented a secure OTP-based authentication system with Nodemailer, ensuring confidential and reliable user verification.
> -   Performed extensive backend testing and validation using Postman to optimize performance and reliability.

> #### Frontend
>
> -   Designed a smooth and responsive user interface with Material-UI and DevExtreme, focusing on delivering an intuitive user experience.
> -   Improved session management by utilizing Local Storage to maintain persistent login states and enhance user convenience.

> #### Database
>
> -   Managed user information and transaction data using MongoDB, a scalable NoSQL database solution.
> -   Leveraged MongoDB Atlas for secure, cloud-based database hosting and seamless scalability.

> #### Deployment
>
> -   Deployed the application's backend services on Render for reliable server-side hosting.
> -   Deployed the frontend application on Vercel, ensuring fast and efficient content delivery.
> -   Implemented CI/CD pipelines to automate build processes and streamline deployments.

## Tech Stack

**Client:** React.js, Material-UI, DevExtreme

**Server:** Node.js, Express.js

**Database:** MongoDB Atlas

**Testing:** Postman
