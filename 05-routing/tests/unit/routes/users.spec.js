const request = require("supertest");

const app = require("../../../app");
const users = require("../../../services/users");
users.getUserById = jest.fn(id => {
  console.log("Mocked users");
  return {
    id
  };
});

describe("Users route", () => {
  it("should return 200 if id > 200", () => {
    const id = "250";
    const expectedBody = {
      id
    };
    return request(app)
      .get(`/users/${id}`)
      .expect(200)
      .then(res => expect(res.body).toEqual(expectedBody));
  });

  it("should return 400 if id = 200", () => {
    const id = "200";
    const expectedBody = {};
    return request(app)
      .get(`/users/${id}`)
      .expect(400)
      .then(res => expect(res.body).toEqual({}));
  });
});
