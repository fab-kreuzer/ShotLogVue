# ShotLogVue

ShotLogVue is a web application for tracking shooting performance, managing training sessions, and organizing competitions. It provides a user-friendly interface for shooters to log their activities and monitor their progress.

## Features

- **Home Dashboard**: Quick overview of your shooting activities
- **Training Management**: Log and track your training sessions
- **Competition Tracking**: Record and analyze competition results
- **Calendar**: Schedule and manage your shooting events
- **User Management**: Administer user accounts and permissions

## Technologies Used

### Frontend
- **Vue.js 3**: Progressive JavaScript framework
- **Vue Router**: Official router for Vue.js
- **PrimeVue**: UI component library for Vue
- **PrimeFlex**: CSS utility library
- **PrimeIcons**: Icon library
- **Vite**: Next generation frontend tooling

### Backend
- Backend structure is prepared but implementation details are not yet available

## Project Structure

```
ShotLogVue/
├── backend/               # Backend code (to be implemented)
├── frontend/              # Frontend Vue.js application
│   ├── public/            # Static assets
│   ├── src/               # Source files
│   │   ├── assets/        # Assets used in the application
│   │   ├── components/    # Vue components
│   │   │   └── SideBar.vue # Navigation sidebar
│   │   ├── pages/         # Page components
│   │   │   ├── Home.vue
│   │   │   ├── Training.vue
│   │   │   ├── Competition.vue
│   │   │   ├── Calender.vue
│   │   │   ├── UserManagement.vue
│   │   │   └── Login.vue
│   │   ├── App.vue        # Main application component
│   │   ├── main.js        # Application entry point
│   │   ├── router.js      # Vue Router configuration
│   │   └── routeNames.js  # Route name constants
│   ├── package.json       # Dependencies and scripts
│   └── vite.config.js     # Vite configuration
└── README.md              # Project documentation
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal)

## Usage

1. **Login**: Access the application through the login page
2. **Home**: View your dashboard with recent activities
3. **Training**: Log and manage your training sessions
4. **Competition**: Record and track competition results
5. **Calendar**: Schedule and manage upcoming events
6. **User Management**: Administer user accounts (admin only)

## Development

### Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run preview`: Preview the production build locally

## Language Support

The application includes German language elements, particularly in the route names and some UI components.