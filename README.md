# বাজার দর (Bazar Dor)

A responsive Bangla market price web application that helps users explore product prices, browse category-wise products, and identify products with decreasing prices.

## About the Project

**Bazar Dor** is a web application designed to make market price information easier to access. Users can browse products by category, view product prices and price changes, and explore products whose prices are decreasing.

The application also includes user authentication, allowing users to sign up and sign in to access user-specific features.

## Features

- **Responsive Design:** Works across desktop, tablet, and mobile devices.
- **Category-wise Navigation:** Browse products through category-specific links.
- **All Products:** View available products in one place.
- **Price Change Tracking:** Display current prices and price change information.
- **Price Decrease Section:** Highlight products whose prices are decreasing.
- **Price Trend Indicators:** Use visual indicators to distinguish decreasing, increasing, and unchanged prices.
- **User Authentication:** Sign up and sign in using Better Auth.
- **Form Validation:** Handle authentication errors and invalid input.
- **Toast Notifications:** Display user feedback through toast messages.
- **Bangla Interface:** Provide a Bengali-friendly market price browsing experience.
- **Reusable Components:** Organize the interface into reusable React components.

## Tech Stack

### Frontend
- Next.js
- React.js
- Tailwind CSS
- DaisyUI
- HeroUI

### Authentication and Database
- Better Auth
- MongoDB

### API and Data
- REST API
- JavaScript
- JSON

## Project Structure

```text
bazar-dor/
├── public/
├── src/
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   └── ...
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navlinks.jsx
│   │   ├── HeadLine.jsx
│   │   ├── Footer.jsx
│   │   ├── AllProductsCard.jsx
│   │   └── ...
│   └── ...
├── package.json
└── README.md
```

*Note: Adjust the folder structure to match your actual project.*

## Installation and Setup

### Prerequisites

- Node.js
- npm
- MongoDB configuration for authentication

### 1. Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd bazar-dor
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file and add the environment variables required by your Better Auth and MongoDB configuration.

```env
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
```

*Make sure the variable names match your actual project configuration. Never commit secret keys or database credentials.*

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Learning Outcomes

Through this project, I practiced:

- Building a web application using Next.js and React.
- Creating responsive layouts with Tailwind CSS and DaisyUI.
- Developing reusable UI components.
- Fetching and displaying product data from a REST API.
- Handling price information and conditional UI rendering.
- Implementing authentication with Better Auth.
- Working with MongoDB.
- Managing application layouts and navigation.
- Improving form validation and user feedback.

## Future Improvements

- Add product search and filtering.
- Introduce historical price charts.
- Add price alerts and notifications.
- Improve product data visualization.
- Add more personalized features for authenticated users.

## Author

**Mithila Farjana**



---

*Bazar Dor — Making market price information easier to explore.*
