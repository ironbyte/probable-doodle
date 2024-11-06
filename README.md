# Offset-based Pagination

```bash
# Install dependencies
pnpm install

# Create and migrate the database, and then apply seed data located at `./prisma/seed`
npx prisma migrate dev --name init

# Drop and re-seed the database
npx prisma migrate reset

# Start the server in watch mode with hot-reloading
pnpm start:dev
```

## API

### Workers

- `POST /workers`: Create a worker.
  - Body: [`createWorkerSchema`](./src/modules/workers/workers.schemas.ts).
- `GET /workers/:id`: Get a worker by ID.
  - Path parameters:
    - `:id`: Worker ID.
- `GET /workers`: Get workers.
  - Query parameters:
    - `page` (optional): Page number.
- `GET /workers/claims`: Get worker claims.
  - Query parameters:
    - `:workerId`: Worker ID.
    - `page` (optional): Page number.

### Workplaces

- `POST /workplaces`: Create a workplace.
  - Body: [`createWorkplaceSchema`](./src/modules/workplaces/workplaces.schemas.ts).
- `GET /workplaces/:id`: Get a workplace by ID.
  - Path parameters:
    - `:id`: Workplace ID.
- `GET /workplaces`: Get workplaces.
  - Query parameters:
    - `page` (optional): Page number.

### Shifts

- `POST /shifts`: Create a shift.
  - Body: [`createShiftSchema`](./src/modules/shifts/shifts.schemas.ts).
- `GET /shifts/:id`: Get a shift by ID.
  - Path parameters:
    - `:id`: Shift ID.
- `POST /shifts/:id/claim`: Claim a shift.
  - Path parameters:
    - `:id`: Shift ID.
  - Body:
    - `workerId`: Worker ID.
- `POST /shifts/:id/cancel`: Cancel a claimed shift.
  - Path parameters:
    - `:id`: Shift ID.
- `GET /shifts`: Get shifts.
  - Query parameters:
    - `page` (optional): Page number.
