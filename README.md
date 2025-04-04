# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# JSON Resources REST API UI

This project is a React + TypeScript + Vite-based frontend application designed to provide a user interface for interacting with a free JSON REST API. The API provides fake JSON data for testing and sampling frontend and backend projects.

## Features

- **React + TypeScript**: Built with modern React and TypeScript for type safety and maintainability.
- **Vite**: Uses Vite for fast development and optimized builds.
- **Responsive Design**: Includes responsive stylesheets for mobile and desktop views.
- **API Integration**: Demonstrates fetching and displaying data from a live REST API.
- **Reusable Components**: Modular and reusable React components for navigation, headers, footers, and more.
- **Cookie Management**: Includes functionality to allow or reject cookies.
- **Developer Tools**: Provides links and resources for developers to explore the API.

## API Endpoints

The application interacts with the following API endpoints:

- `/resources/texts`
- `/resources/users`
- `/resources/photos`
- `/resources/posts`

For more details, visit the [API Documentation](https://api-jsonresources-restapi.onrender.com).

## Project Structure

The project is organized as follows:

- **`src/components`**: Contains reusable React components like `Header`, `Footer`, `NavigationBar`, and more.
- **`src/pages`**: Includes the main pages of the application, such as `Home.Page.tsx`.
- **`src/functions`**: Utility functions for handling cookies and other interactions.
- **`src/stylesheets`**: CSS files for styling the application.
- **`public`**: Static assets like images and redirects.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ssekabirarobertsims/api.jsonresources.restapi-ui
   cd api.jsonresources.restapi-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

### Build

Build the project for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the ESLint configuration to enable type-aware lint rules. See the detailed instructions in the [ESLint Configuration](#expanding-the-eslint-configuration) section.

## License

This project is licensed under the [ISC License](LICENSE).

## Author

Developed by [Robert Sims](https://ssekabirarobertsims.netlify.app/), Software Engineer.