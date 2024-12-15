import { db, Comment, Author } from "astro:db";

export default async function () {
  await db.insert(Author).values([
    { id: 1, name: "Kasim" },
    { id: 2, name: "Mina" },
  ]);

  await db.insert(Comment).values([
    {
      authorId: 1,
      author: "Kasim",
      body: "Hope you like Astro DB!",
      likes: 0,
      flagged: false,
      published: new Date(),
      metadata: {},
    },
    {
      authorId: 2,
      author: "Mina",
      body: "Enjoy!",
      likes: 0,
      flagged: false,
      published: new Date(),
      metadata: {},
    },
  ]);
}
