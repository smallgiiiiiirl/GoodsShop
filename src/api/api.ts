import { Category, Good, GoodInCart } from "../types/types";

const BASE_URL = "http://localhost:3000";

export const getData = (
  url: string,
  params: Record<string, string | number> = {}
) => {
  const searchParams = new URLSearchParams({ ...params } as Record<
    string,
    string
  >);
  const fullUrl = new URL(url, BASE_URL);

  fullUrl.search = searchParams.toString();
  return fetch(fullUrl)
    .then((r) => {
      console.log(r.statusText);
      if (r.ok) {
        return r.json();
      }
      throw new Error(r.statusText ?? "Failed to fetch");
    })
    .catch((r) => {});
};

// export const getProductOnPage = (id: string, ids: string) =>
//   getData(`/api/goods/?${ids}=${id}`);

export const getProducts = (params?: {
  categoryTypeIds?: string;
  sortBy?: keyof Good;
  sortDirection?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  text?: string;
  ids?: string;
  limit?: number;
  offset?: number;
}): Promise<{ items: Good[]; total: number }> => getData("/api/goods", params);

export const getCategories = (): Promise<{ categories: Category[] }> =>
  getData("/api/categories");

export const getToBasket = (id: string): Promise<GoodInCart[]> =>
  getData(`/api/basket/${id}`);

const putBasket = (url: string, body: string) => {
  return fetch(new URL(url, BASE_URL), {
    method: "PUT",
    body: body,
  }).then((data) => {
    if (data.ok) {
      return data.json();
    }
    throw new Error("Something went wrong...");
  });
};

export const addToBasket = (body: GoodInCart): Promise<GoodInCart[]> =>
  putBasket(`/api/cart`, JSON.stringify(body));
