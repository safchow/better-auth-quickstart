# Bruno API Collections

This directory contains Bruno API collections for testing the Better Auth backend APIs.

## Structure

```
bruno/
├── bruno.json              # Root collection config
├── environments/           # Bruno native environments
├── collections/            # API endpoint collections (auth, users, plaid, etc.)
└── README.md               # This file
```

## Setup

1. Install [Bruno](https://www.usebruno.com/) if you haven't already
2. **Create your local environment** (first time only):
   ```bash
   cp bruno/environments/local.bru.example bruno/environments/local.bru
   ```
   Then edit `local.bru` with your test credentials.
3. Open Bruno and select "Open Collection"
4. Navigate to the `bruno` folder
5. The collection will load with all sub-collections
6. Select your environment from the dropdown (top-right in Bruno UI)

## Environments

Bruno uses native environment files (`.bru` files) in the `environments/` folder. Each environment defines variables that can be used across all requests.

### Available Environments

- **local** - Local development (`http://localhost:8080`) - **Not version controlled**
  - Copy `local.bru.example` to `local.bru` and customize with your test credentials
  - This file is gitignored to keep personal credentials private
- **staging** - Staging server (version controlled)
- **production** - Production server (version controlled)

### Environment Variables

Each environment file (e.g., `environments/local.bru`) defines:
- `base_url`: Base URL for the API
- `test_email`: Test user email for authentication requests
- `test_password`: Test user password for authentication requests
- `test_name`: Test user name for registration requests

**Note:** 
- The `local.bru` file is gitignored - each developer creates their own copy from `local.bru.example`
- Update values in your `local.bru` to match your test data
- Sensitive values (like real passwords) should not be committed to git

### Switching Environments

Use the environment dropdown in Bruno's UI (top-right corner) to switch between environments. All `{{variable}}` references in requests will automatically use the selected environment's values.


## Adding New Collections

1. Create a new folder in `collections/` (e.g., `collections/users/`)
2. Create `bruno.json`:
   ```json
   {
     "version": "1",
     "name": "Users API",
     "type": "collection"
   }
   ```
3. Create your endpoint files (`.bru` files)
4. Use `{{base_url}}` variable in URLs

## Adding New Endpoints

1. Create a new `.bru` file in the appropriate collection folder
2. Name it descriptively (e.g., `Get User Profile.bru`)
3. Use the template structure:
   ```bru
   meta {
     name: Endpoint Name
     type: http
     seq: 1
   }

   get {
     url: {{base_url}}/api/endpoint
     body: none
     auth: none
   }

   docs {
     # Endpoint Name
     
     Description of what this endpoint does.
   }
   ```

## Testing Flow

1. Make sure your backend server is running: `npm run dev`
2. Open the collection in Bruno
3. Start with authentication endpoints
4. Bruno automatically stores cookies for authenticated requests
5. Test protected endpoints after signing in

## Notes

- Bruno automatically handles cookies, so after signing in, all subsequent requests include the session cookie
- Use environment variables for different environments (dev, staging, production)
- Each collection is self-contained but shares global variables
