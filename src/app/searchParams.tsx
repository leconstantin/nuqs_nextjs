import { createLoader, parseAsString, parseAsInteger } from "nuqs/server";

// Describe your search params, and reuse this in useQueryStates / createSerializer:
export const coordinatesSearchParams = {
  search: parseAsString.withDefault(""),
  perPage: parseAsInteger.withDefault(10),
};

export const loadSearchParams = createLoader(coordinatesSearchParams);
