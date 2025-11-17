# Better Auth Quickstart

A quickstart project demonstrating Better Auth integration with Express.js, PostgreSQL, and Prisma. This project provides a complete authentication backend with email/password authentication, session management, and protected routes.

## Features

- 🔐 **Better Auth** - Modern authentication library
- 📧 **Email/Password Authentication** - Sign up, sign in, and sign out
- 🎫 **Session Management** - Secure session handling with cookies
- 🗄️ **PostgreSQL Database** - Using Prisma ORM
- 🛡️ **Protected Routes** - Session-based route protection
- 🧪 **API Testing** - Bruno collections included for testing

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Docker** and **Docker Compose**
- **Git**

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd better-auth-quickstart
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

You need a `.env` file in the root directory. If you don't have one, create it:

```bash
# Create .env file
touch .env
```

**Required Environment Variables:**

Add these to your `.env` file (minimum required to run):

```env
# Required: Database connection
DATABASE_URL="postgresql://username:password@localhost:5432/better_auth_db?schema=public"

```

**Quick Setup:**
- Replace `DATABASE_URL` with your PostgreSQL connection string

### 4. Set Up the Database

Start PostgreSQL with Docker Compose:

```bash
docker-compose up -d
```

This will start a PostgreSQL container with:
- Database: `better_auth_db`
- User: `postgres`
- Password: `postgres`
- Port: `5432`

Make sure your `.env` file has:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/better_auth_db?schema=public"
```

Run Prisma migrations to set up the database schema:

```bash
# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate
```

### 5. Start the Development Server

```bash
npm run dev
```

The server will start on `http://localhost:8080` (or the port specified in your `.env` file).

You should see:
```
🚀 Server running on port 8080
📡 Environment: development
🔗 API available at http://localhost:8080/api
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm start` - Start production server
- `npm run prisma:generate` - Generate Prisma Client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio (database GUI)
- `npm run prisma:migrate:deploy` - Deploy migrations (production)
- `npm run prisma:migrate:reset` - Reset database (⚠️ deletes all data)
- `npm run format` - Format code with Prettier
- `npm run lint` - Lint code with ESLint
- `npm run type-check` - Type check without building

## API Endpoints

### Authentication (Better Auth)

All authentication endpoints are handled by Better Auth at `/api/auth/*`:

- `POST /api/auth/sign-up` - Create a new user account
- `POST /api/auth/sign-in` - Sign in with email and password
- `POST /api/auth/sign-out` - Sign out current session

### Application Routes

- `GET /api/healthcheck` - Health check endpoint
- `GET /api/session` - Get current user session (protected)

## Testing with Bruno

This project includes Bruno API collections for testing. See the [Bruno README](./bruno/README.md) for detailed instructions.

Quick start:

1. Install [Bruno](https://www.usebruno.com/)
2. Copy the local environment file:
   ```bash
   cp bruno/environments/local.bru.example bruno/environments/local.bru
   ```
3. Update `bruno/environments/local.bru` with your test credentials
4. Open Bruno and select "Open Collection"
5. Navigate to the `bruno` folder
6. Test the authentication endpoints!

## Project Structure

```
better-auth-quickstart/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── lib/             # Core libraries (auth, prisma)
│   ├── middleware/      # Express middleware
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── utils/           # Utility functions
│   └── server.ts        # Express server entry point
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── migrations/      # Database migrations
├── bruno/               # Bruno API collections
└── package.json
```

## Database Schema

The project uses Prisma with the following models:

- **User** - User accounts
- **Session** - User sessions
- **Account** - Authentication accounts (email/password, OAuth, etc.)
- **Verification** - Email verification tokens

## Managing Docker Compose

If you're using Docker Compose for the database:

```bash
# Start the database
docker-compose up -d

# Stop the database
docker-compose down

# Stop and remove volumes (⚠️ deletes all data)
docker-compose down -v

# View logs
docker-compose logs -f postgres

# Check if container is running
docker-compose ps
```

## Troubleshooting

### Database Connection Issues

- Ensure the Docker container is running with `docker-compose ps`
- Verify your `DATABASE_URL` is correct
- Check that the database exists

### Better Auth Errors

- Ensure `BETTER_AUTH_SECRET` is set and at least 32 characters
- Verify `CLIENT_URL` matches your frontend URL
- Check CORS settings if making requests from a frontend

### Port Already in Use

- Change the `PORT` in your `.env` file
- Or stop the process using the port:
  ```bash
  lsof -ti:8080 | xargs kill
  ```

## Next Steps

- Explore the Better Auth [documentation](https://www.better-auth.com/docs)
- Customize authentication settings in `src/lib/auth.ts`
- Add more protected routes in `src/routes/index.ts`
- Integrate with your frontend application

## License

MIT

