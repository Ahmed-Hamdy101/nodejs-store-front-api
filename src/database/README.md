# Database

This folder is responsible for the PostgreSQL connection pool.

- creates the `pg` client instance
- exports a shared database connection
- listens for pool-level errors and logs them

Keep the database connection configuration here and avoid creating direct DB connections elsewhere in the app.
