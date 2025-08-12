import { test, expect } from "@playwright/test";

test.describe("JSONPlaceholder public API", () => {
  test("GET /users returns a list", async ({ request }) => {
    const res = await request.get("https://jsonplaceholder.typicode.com/users");
    expect(res.ok()).toBeTruthy();

    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
    // optional: check a field shape
    expect(body[0]).toHaveProperty("email");
  });

  test("POST /posts creates a resource (dummy)", async ({ request }) => {
    const res = await request.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        data: { title: "selina-test", body: "hello world", userId: 1 },
      }
    );
    expect(res.status()).toBe(201);

    const body = await res.json();
    expect(body).toHaveProperty("id");
    expect(body.title).toBe("selina-test");
  });
});
