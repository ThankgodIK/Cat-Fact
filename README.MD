# get_me_00

Minimal Express app that returns a user profile plus a random cat fact.

Prerequisites

- Node.js (uses global `fetch`)
- Dependencies listed in [package.json](package.json)

Install
npm install

Run
node index.js
Or set a PORT:
PORT=4000 node index.js

API

- GET /me — returns user info and a cat fact.

Example request
curl http://localhost:3000/me

Example response
{
"status":"success",
"message":"Welcome back, Thankgod Ikefuama!",
"user": { "name":"Thankgod Ikefuama", "stack":"Full-Stack Developer", "email":"thankgod@example.com" },
"catFact":"Cats sleep 12-16 hours a day.",
"timeStamp":"2025-10-16T12:00:00.000Z"
}

Key files

- [index.js](index.js) — main server and route.
- [catFact.js](catFact.js) — fetches a cat fact via the [`getCatFact`](catFact.js) function.
- [data.js](data.js) — exports the [`user`](data.js) object.
- [package.json](package.json) — project metadata and dependencies.
- [README.MD](README.MD) — this file.

Notes

- The route in [index.js](index.js) uses [`getCatFact`](catFact.js) and the [`user`](data.js) export to build the response.
- If you get network errors fetching the cat fact, the server responds with HTTP 500 and an error
