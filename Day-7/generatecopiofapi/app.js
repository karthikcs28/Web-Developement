import { generateCopy } from "./generateCopy.js"

const hero = await generateCopy(
  "Write a hero headline and subheading for a frontend developer portfolio website."
)

const loginError = await generateCopy(
  "Write a friendly error message for incorrect password during login."
)

const emptyState = await generateCopy(
  "Write an empty-state message for a dashboard with no data."
)

console.log("\nHERO COPY\n", hero)
console.log("\nLOGIN ERROR\n", loginError)
console.log("\nEMPTY STATE\n", emptyState)
