const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;
console.log("DOMAIN:", domain);
console.log("TOKEN EXISTS:", !!token);
const endpoint = `https://${domain}/api/2025-07/graphql.json`;

/**
 * Shopify GraphQL Fetch
 */
export async function shopifyFetch(
  query: string,
  variables: Record<string, any> = {}
) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    cache: "no-store",
  });

  const json = await res.json();

 if (json.errors) {
  console.log("VARIABLES:", variables);
  console.error(JSON.stringify(json.errors, null, 2));
  throw new Error("Shopify request failed");
}

  return json.data;
}

/**
 * Get Products
 */
export async function getProducts() {
  const data = await shopifyFetch(`
    {
      products(first: 20) {
        nodes {
          id
          title
          handle
          description

          featuredImage {
            url
          }

          images(first: 10) {
            nodes {
              url
            }
          }

          variants(first: 20) {
            nodes {
              id
              title
              availableForSale

              price {
                amount
                currencyCode
              }

              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
  `);

  return data.products.nodes;
}

/**
 * Create Shopify Cart
 */
export async function createCart(
  variantId: string,
  quantity: number = 1
) {
  const data = await shopifyFetch(
    `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
        }
      }
    }
    `,
    {
      input: {
        lines: [
          {
            merchandiseId: variantId,
            quantity,
          },
        ],
      },
    }
  );

  console.log("CREATE CART RESPONSE:", data);

return data.cartCreate.cart;
}

/**
 * Add Line To Existing Cart
 */
export async function addToCartShopify(
  cartId: string,
  variantId: string,
  quantity: number = 1
) {
  const data = await shopifyFetch(
    `
    mutation cartLinesAdd(
      $cartId: ID!
      $lines: [CartLineInput!]!
    ) {
      cartLinesAdd(
        cartId: $cartId
        lines: $lines
      ) {
        cart {
          id
          checkoutUrl
        }
      }
    }
    `,
    {
      cartId,
      lines: [
        {
          merchandiseId: variantId,
          quantity,
        },
      ],
    }
  );

  return data.cartLinesAdd.cart;
}
export async function getProductByHandle(handle: string) {
  const data = await shopifyFetch(
    `
    query getProduct($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description

        featuredImage {
          url
        }

        images(first: 10) {
          nodes {
            url
          }
        }

        variants(first: 20) {
          nodes {
            id
            title
            availableForSale

            price {
              amount
              currencyCode
            }

            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
    `,
    {
      handle,
    }
  );
console.log("SHOPIFY DATA:", data);

return data.product;
}