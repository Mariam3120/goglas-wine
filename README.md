🍷 Gogla’s Wine – Interactive Wine Showcase Website
📌 Project Overview

Gogla’s Wine is a responsive showcase website built to present Georgian wines in a visually engaging and user-friendly way. The website focuses on storytelling, UI/UX comfort, and dynamic user interaction while maintaining clean and semantic front-end architecture.

The project was developed using HTML, CSS, and Vanilla JavaScript, with Firebase Authentication and Database integration for user registration and data storage.

This website represents a real Georgian wine brand and serves as a presentational platform until full backend e-commerce functionality is implemented.

🎨 Design & Concept

The entire design concept was created independently and inspired by the wine brand’s logo and identity.

Key Design Ideas:

The Hero Section visually separates white and red wine using a dual layout, symbolizing contrast and balance.

Color palette and layout structure were handcrafted to match the brand identity.

Rounded soft UI details were intentionally implemented to create a premium and elegant feel.

🚀 Features
👤 User Authentication

User registration and login implemented using Firebase

User data is securely stored in the Firebase database

🛒 Shopping Interaction (Front-End Logic)

Users can add wines to the cart

Cart dynamically displays selected products and quantities

Navigation to the cart page shows selected items

🌍 Multi-Language Support

Dynamic language switching using JavaScript

Content translations stored in external JSON files

Language loading is handled asynchronously

📖 Product Quick View (UX Improvement)

Instead of redirecting users to a new page:

Clicking “Details” opens a modal window

Provides a wine description without losing browsing context

Tested with real users and received positive usability feedback

🧩 Technical Challenges & Solutions
✅ Dynamic Language Switching
Problem:

Initially, language content was hardcoded, which made scaling and maintenance difficult.

Solution:

Implemented external JSON translation files and dynamic content replacement using JavaScript.

This improved:

Scalability

Code maintainability

Cleaner separation of content and logic

✅ Handling Language Loading Errors

During development, issues appeared while fetching JSON files, including 404 errors and missing language IDs.

Solution:

Improved file path handling

Added validation checks for language IDs

Implemented error handling for failed fetch requests

🧩 Cross-Page JavaScript Error Handling

During development, I encountered an issue where JavaScript components were throwing errors on pages where specific DOM elements did not exist.

Initially, interactive features such as the Hero Section slider were executed globally without verifying whether the required elements were present on the page. This caused runtime errors when the same script file was loaded across multiple pages.

To solve this, I implemented defensive DOM checks before executing functionality. For example:

Verifying if the main component wrapper exists

Validating child elements before attaching event listeners

Preventing unnecessary script execution on unrelated pages

This improved:

Script stability

Reusability across multiple pages

Overall project scalability

Example implementation:

let wrapper = document.getElementById("wrapper");

if (!wrapper) return;

✅ UI/UX Decision Making

Instead of classic product redirection pages, modal-based quick information windows were introduced.

This improved:

Navigation flow

User engagement

Accessibility of product details

🧱 Technologies Used

HTML5 (Semantic Structure)

CSS3 (Custom Layout & Responsive Design)

Vanilla JavaScript (DOM manipulation, async loading, cart logic)

Firebase Authentication

📐 Architecture & Code Quality

The project follows:

Semantic HTML structure

Modular JavaScript organization

Separation of content using JSON

Reusable UI components

Maintainable and readable styling

📱 Responsiveness

The website is designed to work across different screen sizes, ensuring a consistent layout and usability.

🧪 User Feedback

The interface was tested with several users who highlighted:

Comfortable navigation flow

Highly intuitive product quick-view modal

Visually unique hero section

Elegant, rounded UI elements

🔮 Future Improvements

Full backend e-commerce functionality

Payment system integration

Admin panel for product management

Performance optimization

Accessibility improvements

💡 Personal Learning Outcomes

Through this project, I improved my skills in:

JavaScript problem solving

Async data handling

UI/UX thinking

Firebase integration

Structuring scalable front-end architecture

Debugging real development issues

🧑‍💻 Author

Developed by Mariam Grigolia
