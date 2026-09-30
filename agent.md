# EduVerse agent instructions

- Keep changes within the existing EduVerse product: catalog, authentication, learning progress, bootcamps, certificates, and the existing information pages.
- Use current stable Next.js with Tailwind CSS for the frontend and Express.js for the backend. Write application code in TypeScript with specific types; do not use `any` to bypass type errors.
- Keep shared behavior in one place. Prefer a small, readable implementation over speculative abstractions.
- Before implementing a backend endpoint or database model, write a failing test for its observable API behavior. Run the test, implement the smallest change, and rerun it.
- If a material problem or ambiguity appears, tell the user and wait for their direction before changing that part.
- Treat checkout as a simulation until a real payment provider is explicitly requested. Never claim a real payment occurred.
