// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import product from './product'
import vendor from './vendor'
import productVariant from './productVariant'

import localeString from './locale/String'
import localeText from './locale/Text'
import localeBlockContent from './locale/BlockContent'
import regionsSchema from './regions/regionsSchema'
import headerSchema from './regions/header/headerSchema'
import figureSchema from './components/figure/figureSchema'
import section01Schema from './regions/seccion01/section01Schema'
import section02Schema from './regions/seccion02/section02Schema'
import dispoSchema from './regions/dispo/dispoSchema'
import footerSchema from './regions/footer/footerSchema'
import socialSchema from './components/social/socialSchema'
import SEOSchema from './regions/SEO/SEOSchema'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    product,
    vendor,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    productVariant,
    ///Landings
    regionsSchema,
    headerSchema,
    figureSchema,
    section01Schema,
    section02Schema,
    dispoSchema,
    footerSchema,
    socialSchema,
    SEOSchema,
  ]),
})