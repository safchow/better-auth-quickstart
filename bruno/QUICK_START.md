# Bruno Quick Start Guide

## Creating a New Collection

### Step 1: Copy Template
```bash
cd bruno/collections
cp -r _template your-collection-name
cd your-collection-name
```

### Step 2: Update Collection Config
Edit `bruno.json`:
```json
{
  "version": "1",
  "name": "Your Collection Name",
  "type": "collection"
}
```

### Step 3: Create Endpoints
Copy `Endpoint Template.bru` for each endpoint:
```bash
cp "Endpoint Template.bru" "Your Endpoint Name.bru"
```

Edit the `.bru` file:
- Update `name` in meta
- Change HTTP method (get, post, put, delete, patch)
- Update URL: `{{base_url}}/api/your-endpoint`
- Add request body if needed
- Update documentation

### Step 4: Organize
- Delete `README.md` and create your own if needed
- Delete `Endpoint Template.bru` when done

## Example: Creating a Users Collection

```bash
# 1. Copy template
cp -r bruno/collections/_template bruno/collections/users

# 2. Create endpoints
cd bruno/collections/users
cp "Endpoint Template.bru" "Get User Profile.bru"
cp "Endpoint Template.bru" "Update User Profile.bru"

# 3. Edit each .bru file with endpoint details
# 4. Update bruno.json name to "Users API"
# 5. Delete template files
```

## Adding a New Endpoint to Existing Collection

1. Copy `_template/Endpoint Template.bru`
2. Rename it (e.g., `Create User.bru`)
3. Place it in your collection folder
4. Update the content:
   - Meta name
   - HTTP method and URL
   - Request body/params
   - Documentation

## Using Variables

Bruno uses native environment files in `environments/` folder. Variables are defined per environment:

- `{{base_url}}` - Use in all URLs
- `{{test_email}}` - Test user email
- `{{test_password}}` - Test user password
- `{{test_name}}` - Test user name

### First Time Setup

**Create your local environment** (do this once):
```bash
cp bruno/environments/local.bru.example bruno/environments/local.bru
```

Then edit `bruno/environments/local.bru` with your test credentials. This file is gitignored so your personal credentials stay private.

### Switching Environments

Use the environment dropdown in Bruno's UI (top-right) to switch between:
- **local** - `http://localhost:8080` (create from `local.bru.example`)
- **staging** - `https://api-staging.example.com`
- **production** - `https://api.example.com`

All `{{variable}}` references automatically use the selected environment's values.

### Adding a New Environment

Create a new `.bru` file in `environments/`:
```bru
vars {
  base_url: https://api-custom.example.com
  test_email: [email protected]
  test_password: TestPassword123!
  test_name: Test User
}
```

## Best Practices

1. **Naming**: Use descriptive names (e.g., `Get User Profile.bru` not `endpoint1.bru`)
2. **Sequencing**: Set `seq` in meta to control order in Bruno
3. **Documentation**: Always fill out the `docs` section
4. **Organization**: One collection per domain (users, plaid, transactions)
5. **Templates**: Keep `_template` folder clean for reuse
