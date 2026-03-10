import { test, expect } from '@playwright/test';
test.use({actionTimeout: 2000})

test('Demonstrate Playwright Assertions in TypeScript', async ({ page }) => {

  // toBe()
  expect(5).toBe(5);

  // toBeCloseTo()
  expect(0.1 + 0.2).toBeCloseTo(0.3);

  // toBeDefined()
  const name: string = "Playwright";
  expect(name).toBeDefined();

  // toBeFalsy()
  const value: number = 0;
  expect(value).toBeFalsy();

  // toBeGreaterThan()
  expect(10).toBeGreaterThan(5);

  // toBeGreaterThanOrEqual()
  expect(10).toBeGreaterThanOrEqual(10);

  // toBeInstanceOf()
  class Car {}
  const myCar = new Car();
  expect(myCar).toBeInstanceOf(Car);

  // toBeLessThan()
  expect(3).toBeLessThan(5);

  // toBeLessThanOrEqual()
  expect(5).toBeLessThanOrEqual(5);

  // toBeNaN()
  const notNumber: number = NaN;
  expect(notNumber).toBeNaN();

  // toBeNull()
  const data: null = null;
  expect(data).toBeNull();

  // toBeTruthy()
  const status: boolean = true;
  expect(status).toBeTruthy();

  // toBeUndefined()
  let undef: undefined;
  expect(undef).toBeUndefined();

  // toContain() - string
  const text: string = "Playwright Automation";
  expect(text).toContain("Automation");

  // toContain() - array
  const fruits: string[] = ["apple", "banana", "orange"];
  expect(fruits).toContain("banana");

  // toContainEqual()
  const users = [{ name: "John" }, { name: "Jane" }];
  expect(users).toContainEqual({ name: "Jane" });

  // toEqual()
  const obj1 = { a: 1, b: 2 };
  expect(obj1).toEqual({ a: 1, b: 2 });

  // toHaveLength()
  const numbers: number[] = [1, 2, 3, 4];
  expect(numbers).toHaveLength(4);

  // toHaveProperty()
  const person = { name: "Alex", age: 25 };
  expect(person).toHaveProperty("name");

  // toMatch() - regex
  const email: string = "playwright@test.com";
  expect(email).toMatch(/@/);

  // toMatchObject()
  const user = { id: 1, name: "Sam", role: "admin" };
  expect(user).toMatchObject({ name: "Sam" });

  // toStrictEqual()
  expect({ a: 1 }).toStrictEqual({ a: 1 });

  // toThrow()
  const throwError = (): void => {
    throw new Error("Something went wrong");
  };
  expect(throwError).toThrow();

});