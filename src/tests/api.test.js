const request = require("supertest")
const baseURL = "http://localhost:8082/v1/github"


describe("GET /get-personal-info/johnpapa", () => {
    it("should return a valid user for /johnpapa", async () => {
        const response = await request(baseURL).get("/get-personal-info/johnpapa");
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe("John Papa");
        expect(response.body.bio).toBe("Winter is Coming");
    });
    it("should return error for invalid user", async () => {
        const response = await request(baseURL).get("/get-personal-info/johnpapasa");
        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe("Not Found");
    });
});


describe("GET /get-repos/johnpapa", () => {
    it("should return all repos for the johnpapa user", async () => {
        const response = await request(baseURL).get("/get-repos/johnpapa");
        expect(response.statusCode).toBe(200);
        expect(response.body[0].name).toBe(".github")
        expect(response.body[1].description).toBe("serverless function with api aggregator with azure")
        expect(response.body[12].topics.length).toBe(3)
    })
    it("Should not return repos for invalid user", async () => {
        const response = await request(baseURL).get("/get-repos/johnpapasa");
        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe("Not Found");
    })
})


describe("Pagination work test", () => {
    it("Should return only 10 repos as in request ?page=1&limit=10", async () => {
        const response = await request(baseURL).get("/get-repos/johnpapa?page=1&limit=10");
        expect(response.body.length).toBe(10)
    })

    it("Should return nothing for out of bound query params", async () => {
        const response = await request(baseURL).get("/get-repos/johnpapa?page=20&limit=10");
        expect(response.body.length).toBe(0)
    })
})