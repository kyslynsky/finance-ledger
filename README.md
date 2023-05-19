# Project Title

FinanceLedger

## Overview

FinanceLedger is a personal project developed for practicing.
The website has been designed and developed with keyboard accessibility in mind, ensuring that it can be fully navigated and interacted with using only the keyboard.
It is deployed on Netlify. You can access the project [here](https://main--beautiful-crumble-86bdfb.netlify.app/).

## Technologies Used

- HTML5, CSS3, TypeScript
- React.js

## Dependencies

- `classnames`: A utility library for conditionally joining CSS class names.
- `date-fns`: A modern JavaScript date utility library.
- `react-hook-form`: A library for flexible and efficient form validation in React.
- `react-spring-lightbox`: A lightweight and flexible lightbox component for React.
- `react-toastify`: Notification library for React applications.

## Development Scripts

### svg-dev

This script converts SVG files located in the `src/icons` directory into React components using the `@svgr/cli` tool. The generated components are outputted to the `src/components/iconComponents` directory.

The `--out-dir` option specifies the output directory for the generated React components.

The `--icon` flag indicates that the generated components should be optimized for icon usage.

The `--typescript` flag ensures that the generated React components have TypeScript typings.

To run this script, use the following command:

```shell
npm run svg-dev
```

## Installation

To run the FinanceLedger application locally, follow these steps:

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open `http://localhost:3000` in your web browser.

## Roadmap

This project is an ongoing effort, and future enhancements may include:

- User authentication and authorization
- Expense tracking
- Budget management
- Data visualization using charts and graphs
- Blog

## Contributing

As this project is primarily for personal practice, contributions are not actively sought. However, feel free to fork the repository and make modifications for your own learning purposes.

## License

This project is open source and is licensed under the [MIT License](https://opensource.org/licenses/MIT).

