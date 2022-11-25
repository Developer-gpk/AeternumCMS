// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

//import custom schemas
import Home from './document/Home'
import Aviso from './document/Aviso'
import Politica from './document/Politica'

//Import objects shcema
import dias from './object/Days'
import ventajas from './object/Ventajas'
import aprender from './object/Aprender'
import instructor from './object/instructor'
import opinion from './object/Opinion'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    Home,
    Aviso,
    Politica
  ])
  .concat([
    dias,
    ventajas,
    aprender,
    instructor,
    opinion
  ])
})
