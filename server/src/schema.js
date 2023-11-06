const gql = require('graphql-tag')

const typeDefs = gql`
type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    track(id: ID!): Track
}
"A track is a group of Modules that teaches a specific topic"
type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "Track's description"
    description: String
    "Times a track has been viewed"
    numberOfViews: Int
    "Track's array of modules"
    modules: [Module!]!
}

"A module is a single unit of teaching. Multiple modules compose a track."
type Module {
    id: ID!
    "The module's title"
    title: String!
    "Module's length in minutes"
    Length: Int

}

"Author of a complete Track"
type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
}
`

module.exports = typeDefs