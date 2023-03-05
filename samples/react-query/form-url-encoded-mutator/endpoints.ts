/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { useMutation } from 'react-query';
import type { UseMutationOptions, MutationFunction } from 'react-query';
import type { Pet, Error, CreatePetsBody } from './models';
import { customInstance } from './custom-instance';
import { customFormUrlEncoded } from './custom-form-url-encoded';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary Create a pet
 */
export const createPets = (createPetsBody: CreatePetsBody) => {
  const formUrlEncoded = customFormUrlEncoded(createPetsBody);
  return customInstance<Pet>({
    url: `/pets`,
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: formUrlEncoded,
  });
};

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<typeof createPets>>
>;
export type CreatePetsMutationBody = CreatePetsBody;
export type CreatePetsMutationError = Error;

export const useCreatePets = <TError = Error, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createPets>>,
    { data: CreatePetsBody }
  > = (props) => {
    const { data } = props ?? {};

    return createPets(data);
  };

  return useMutation<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody },
    TContext
  >(mutationFn, mutationOptions);
};
