# Future Plan (Phase 2)

This document outlines the proposed enhancements and features for the next phase of the Finsaarthi project, building upon the current "Coming Soon" page foundation.

## 1. Backend Integration

### Objective
Replace the current static form submission (which relies on `un-static.com`) with a custom backend service to handle data securely and reliably.

### Action Items
-   **Develop an API**: Create a RESTful API (Node.js/Express or Python/Django) to handle form submissions.
-   **Database Setup**: implement a database (e.g., MongoDB, PostgreSQL) to store subscriber details (Name, Email, Timestamp).
-   **Validation**: Implement robust server-side validation to prevent spam and ensure data integrity.
-   **Security**: Add rate limiting and CORS policies to protect the API.

## 2. Admin Dashboard

### Objective
Provide a restricted area for administrators to view and manage the list of subscribers.

### Action Items
-   **Authentication**: Implement login functionality for admins.
-   **Dashboard UI**: Create a view to list all subscribers with pagination and search/filter options.
-   **Export Data**: Add functionality to export the subscriber list to CSV or Excel formats for marketing use.

## 3. Email Notification System

### Objective
Automate communication with subscribers.

### Action Items
-   **Confirmation Emails**: Send an automatic "Thank You" email immediately after a user subscribes.
-   **Launch Notification**: Build a system to blast an email to all subscribers when the countdown reaches zero.
-   **Integration**: Use email service providers like SendGrid, AWS SES, or Mailgun.

## 4. Content Management System (CMS)

### Objective
Allow non-technical team members to update content on the landing page without editing code.

### Action Items
-   **Dynamic Content**: Make the countdown date, main headline, and social links configurable.
-   **CMS Selection**: Integrate a headless CMS (like Strapi or Contentful) or build a simple configuration interface in the Admin Dashboard.

## 5. Testing & CI/CD

### Objective
Ensure code quality and automate deployment.

### Action Items
-   **Unit Testing**: Add unit tests for JavaScript logic (e.g., using Jest).
-   **E2E Testing**: Implement End-to-End tests (e.g., using Cypress or Playwright) to verify the form submission flow.
-   **CI Pipeline**: Set up GitHub Actions to run tests on every push.
-   **Deployment**: Automate deployment to hosting platforms (e.g., Vercel, Netlify, or AWS S3/CloudFront).

## 6. UI/UX Enhancements

### Objective
Improve user engagement and accessibility.

### Action Items
-   **Accessibility Audit**: Ensure the site meets WCAG 2.1 standards (screen reader support, keyboard navigation).
-   **Dark Mode**: Add a toggle for dark/light themes.
-   **Social Share**: Add buttons for users to share the page on their social media profiles.
