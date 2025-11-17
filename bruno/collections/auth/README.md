# Authentication API

## Better Auth Endpoints (handled by Better Auth handler)

All routes under `/api/auth/*` are handled by Better Auth:

- **Sign Up** - Register a new user account (`POST /api/auth/sign-up/email`)
- **Sign In** - Authenticate with email and password (`POST /api/auth/sign-in/email`)
- **Sign Out** - Sign out the current user (`POST /api/auth/sign-out`)
- **TOTP/2FA** - Two-factor authentication endpoints (when plugin is enabled)

## Custom Auth Endpoints (handled by custom controllers)

- **Get Session** - Get current user session (`GET /api/session`)

## Usage

1. Start with **Sign Up** to create a test user
2. Use **Sign In** - Bruno will automatically store cookies
3. Use **Get Session** to verify your session and get user info
4. Use **Sign Out** to end the session

## Notes

- Sessions last 7 days by default
- `rememberMe: true` persists cookie across browser restarts
- Bruno automatically handles session cookies
