# Template Collection

This is a template collection to help you create new API collections.

## How to Use

1. Copy this entire `_template` folder
2. Rename it to your collection name (e.g., `users`, `plaid`, `transactions`)
3. Update `bruno.json` with your collection name
4. Copy `Endpoint Template.bru` and modify it for each endpoint
5. Delete this README.md and create your own documentation

## Example: Creating a Users Collection

```bash
# From bruno/collections/
cp -r _template users
cd users
# Edit bruno.json to change name to "Users API"
# Copy Endpoint Template.bru for each endpoint
# Rename and customize each .bru file
```

## Collection Structure

```
collection-name/
├── bruno.json              # Collection metadata
├── Endpoint 1.bru          # First endpoint
├── Endpoint 2.bru          # Second endpoint
└── README.md               # Collection documentation (optional)
```
