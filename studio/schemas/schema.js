// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Image.
import figure from "./image/figure"

// Objects.
import landscapeBlock from "./object/landscapeBlock"
import portraitBlock from "./object/portraitBlock"
import portraitsBlock from "./object/portraitsBlock"
import singleLandscapeBlock from "./object/singleLandscapeBlock"
import featureBlock from "./object/featureBlock"
import people from "./object/people"
import artist from "./object/artist"
import article from "./object/article"
import award from "./object/award"
import portraitsBlockArtist from "./object/portraitsBlockArtist"
import singleLandscapeBlockArtist from "./object/singleLandscapeBlockArtist"
import featureBlockArtist from "./object/featureBlockArtist"
// Documents.
import siteSettings from "./document/siteSettings"
import indexPage from "./document/homePage"
import aboutPage from "./document/aboutPage"
import artistPage from "./document/artistPage"
import pressPage from "./document/pressPage"
import project from "./document/project"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Image.
    figure,
    // Object.
    featureBlock,
    portraitBlock,
    portraitsBlock,
    landscapeBlock,
    singleLandscapeBlock,
    people,
    artist,
    article,
    award,
    portraitsBlockArtist,
    singleLandscapeBlockArtist,
    featureBlockArtist,
    // Document.
    siteSettings,
    indexPage,
    aboutPage,
    artistPage,
    pressPage,
    project,
  ]),
})
