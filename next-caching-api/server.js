// Import the framework and instantiate it
import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get("/history", async function handler(request, reply) {
  console.log("Hit!!!");
  return { data: "History from api 4" };
});

// Run the server!
try {
  await fastify.listen({ port: 8000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
