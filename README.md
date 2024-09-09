# Affiliate Revenue Calculator

This project is a Full Stack Engineer Challenge, which involves creating an interactive affiliate revenue forecast calculator using **Remix**, **React**, and **TypeScript**. The calculator allows users to forecast their 12-month affiliate revenue based on customer referrals and project statistics. It dynamically updates based on user input and displays the results on an interactive graph.

## Project Overview

### Features

1. **Interactive Affiliate Calculator**:

      - Adjust the sliders to forecast affiliate revenue.
      - Three variables:
           - **Referred customers per month**: A number between 1 and 10.
           - **Avg. new projects per month**: A number between 5 and 50.
           - **Avg. existing projects**: A number between 0 and 10,000.

2. **Backend Calculations**:

      - Revenue calculations happen in the backend to keep billing logic secure.
      - 20% referral payout and 2% churn rate are adjustable backend variables.
      - Backend request made on slider change, with loading indicator.

3. **Responsive Design**:

      - Designed with **Tailwind CSS** following [Sunvoy branding](https://sunvoy.com/branding).
      - Fully responsive for different screen sizes.

4. **Graph Display**:

      - 12-month revenue forecast displayed as a dynamic graph.
      - The graph starts with the current month and extends to 12 months into the future.
      - Properly formatted dollar values and month/year labels.
      - Last graph month is highlighted.

5. **Loading Indicator**:
      - A loading spinner (using FontAwesome circle notch icon) is shown during backend requests.

### Technologies Used

- **Remix**: Full-stack framework for building server-rendered React applications.
- **TypeScript**: Ensures strong typing throughout the project.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **React**: Frontend library for building interactive user interfaces.
- **Chart.js (or other graph library)**: For rendering the interactive graph.
- **FontAwesome**: For the loading spinner icon.

### Installation and Running the Project

1. Clone the repository:

      ```bash
      git clone https://github.com/yourusername/affiliate-revenue-calculator.git
      cd affiliate-revenue-calculator

      ```

2. Install Dependencies

      ```bash
      npm install
      ```

3. Start the Remix dev server:

      ```bash
      npm run dev
      ```

4. Access the application at:
      ```bash
      http://localhost:3001/
      ```

# Project Overview

## Code Structure

### Frontend

- Uses Remix and React for UI.
- Tailwind CSS for styling.
- A graph library for interactive charts.

### Backend

- Handles all revenue calculations and returns the result to the frontend.
- The referral payout rate (20%) and churn rate (2%) are backend variables.

### TypeScript

- Ensures type safety and better developer experience.

## Development Process

Each step of the development process has been documented and committed to this repository incrementally. You can view each step's progress in the commit history.

## Recording

You can find the screen recording of the project in action at the following link:

[Watch the video](https://www.loom.com/share/1e4b7f75172c4138973149af8b1dc33a?sid=1f48e009-2176-4e05-bbe7-95e7a4efe026)

## Time Taken

I spent approximately 2 days on this assignment.
