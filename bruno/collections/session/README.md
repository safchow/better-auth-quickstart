# Session API

Session-related endpoints.

## Endpoints

- **Get Session** - Get current user session (`GET /api/session`)

## Usage

1. First, authenticate using the **Sign In** endpoint in the `auth` collection
2. Bruno will automatically store the session cookie
3. Call **Get Session** to verify your session and get user info
4. The session cookie is automatically included in subsequent requests

## Notes

- Sessions last 7 days by default
- Session cookies are automatically managed by Bruno
- This endpoint requires an active session (use Sign In first)

