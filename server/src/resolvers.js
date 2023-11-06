const resolvers = {
    Query: {
        //Returns an array of tracks
        tracksForHome: async (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome()
        },

        //Get a single track by ID
        track: async (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getTrack(id)
        },

        module: async (_, { moduleId }, { dataSources }) => {
            return dataSources.trackAPI.getModule(moduleId)
        }

    },

    Mutation: {
        //Increments a track's number of views 
        incrementTrackViews: async (_, { id }, { dataSources }) => {
            try {
                const track = await dataSources.trackAPI.incrementTrackViews(id)
                return {
                    code: 200,
                    success: true,
                    message: `Succesfully incremented number of views for track ${id}`,
                    track
                }
            }
            catch (err) {
                return {
                    code: err.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body,
                    track: null
                }
            }
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