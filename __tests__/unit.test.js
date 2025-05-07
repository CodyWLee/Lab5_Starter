// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Part 2
test('checking if ABC is a phone number', () => {
  expect(isPhoneNumber('abc')).toBe(false);
});
test('checking if null is a phone number', () => {
  expect(isPhoneNumber(null)).toBe(false);
});
test('checking if (123)-456-7890 is a phone number', () => {
  expect(isPhoneNumber('(123)-456-7890')).toBe(true);
});
test('checking if (098)-765-4321 is a phone number', () => {
  expect(isPhoneNumber('(098)-765-4321')).toBe(true);
});

test('checking if ABC is an email', () => {
  expect(isEmail('abc')).toBe(false);
});
test('checking if null is an email', () => {
  expect(isEmail(null)).toBe(false);
});
test('checking if hello@gmail.org is an email', () => {
  expect(isEmail('hello@gmail.org')).toBe(true);
});
test('checking if blep@hello.io is an email', () => {
  expect(isEmail('blep@hello.io')).toBe(true);
});

test('checking if * is an password', () => {
  expect(isStrongPassword('*')).toBe(false);
});
test('checking if \' \' is an password', () => {
  expect(isStrongPassword(' ')).toBe(false);
});
test('checking if helpme is an password', () => {
  expect(isStrongPassword('helpme')).toBe(true);
});
test('checking if wall12  is an password', () => {
  expect(isStrongPassword('wall12')).toBe(true);
});

test('checking if null  is an date', () => {
  expect(isDate(null)).toBe(false);
});
test('checking if * is an date', () => {
  expect(isDate(' * ')).toBe(false);
}); 
test('checking if 1/1/1111 is an date', () => {
  expect(isDate('1/1/1111')).toBe(true);
}); 
test('checking if 2/1/1111 is an date', () => {
  expect(isDate('2/1/1111')).toBe(true);
});

test('checking if abcd is a hex color', () => {
  expect(isHexColor('abcd')).toBe(false);
});
test('checking if null is a hex color', () => {
  expect(isHexColor(null)).toBe(false);
});
test('checking if fff is a hex color', () => {
  expect(isHexColor('fff')).toBe(true);
});
test('checking if #abc is a hex color', () => {
  expect(isHexColor('#abc')).toBe(true);
});