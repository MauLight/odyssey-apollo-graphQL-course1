const resolvers = {
    Query: {
        //Returns an array of tracks
        tracksForHome: async (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome()
        },

        //Get a single track by ID
        track: async (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getTrack(id)
        }

    },
    Track: {
        author: async ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId)
        },

        modules: async ({ id }, _, { dataSources }) => {
            return dataSources.trackAPI.getTrackModules(id)
        }
    }
}

module.exports = resolvers