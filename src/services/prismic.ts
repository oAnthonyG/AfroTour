import * as Prismic from '@prismicio/client';

const endpoit = Prismic.getRepositoryEndpoint('anthony-afro-tour')
export const client = Prismic.createClient(endpoit)