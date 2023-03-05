/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { rest } from 'msw';
import { faker } from '@faker-js/faker';

export const getListPetsMock = () =>
  Array.from(
    { length: faker.datatype.number({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    '@id': faker.helpers.arrayElement([faker.random.word(), undefined]),
    id: (() => faker.datatype.number({ min: 1, max: 99999 }))(),
    name: (() => faker.name.lastName())(),
    tag: (() => faker.name.lastName())(),
    email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
  }));

export const getCreatePetsMock = () => ({
  '@id': faker.helpers.arrayElement([faker.random.word(), undefined]),
  id: faker.datatype.number({ min: undefined, max: undefined }),
  name: (() => faker.name.lastName())(),
  tag: (() => faker.name.lastName())(),
  email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
});

export const getShowPetByIdMock = () =>
  (() => ({
    id: faker.datatype.number({ min: 1, max: 99 }),
    name: faker.name.firstName(),
    tag: faker.helpers.ranarrayElementdomize([faker.random.word(), void 0]),
  }))();

export const getSwaggerPetstoreMSW = () => [
  rest.get('*/v:version/pets', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getListPetsMock()),
    );
  }),
  rest.post('*/v:version/pets', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getCreatePetsMock()),
    );
  }),
  rest.get('*/v:version/pets/:petId', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getShowPetByIdMock()),
    );
  }),
];
