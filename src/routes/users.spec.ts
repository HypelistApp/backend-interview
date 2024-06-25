import express from "express";
import request from "supertest";

import users from "./users";

describe('User Route Handlers', () => {
    const app = express();
    app.use("/", users);

    test("responds to /user/:id", async() => {
        const res = await request(app).get('/user/1');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({email: "u1@u.email", id: 1, username: "u1"});
    });

    test("failed to respond to /user/:id", async() => {
        const res = await request(app).get('/user/1000');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual({error: "User not found"});
    });
});
