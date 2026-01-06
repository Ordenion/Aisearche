# My Vite React App

This is a minimal Vite React application with TypeScript, featuring React Router for navigation.

## Project Structure

```
my-vite-react-app
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
├── public
│   └── favicon.ico
└── src
    ├── main.tsx
    ├── App.tsx
    ├── pages
    │   ├── Home.tsx
    │   └── About.tsx
    ├── components
    │   ├── Header.tsx
    │   └── NotFound.tsx
    ├── api
    │   └── index.ts
    ├── hooks
    │   └── useFetch.ts
    └── styles
        └── global.css
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-vite-react-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Features

- Home and About pages with navigation.
- 404 Not Found page for unmatched routes.
- Custom hook for fetching data from APIs.

## License

This project is licensed under the MIT License.