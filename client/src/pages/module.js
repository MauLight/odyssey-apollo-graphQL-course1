import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Layout, ModuleDetail, QueryResult } from "../components"
import { useParams } from "react-router-dom"

const GET_MODULE = gql`
query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    module(moduleId: $moduleId) {
      id
      title
      content
      videoUrl
    }
  
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
  }
`

export const Module = () => {

    const { trackId, moduleId } = useParams()
    const { loading, error, data } = useQuery(GET_MODULE, {
        variables: {
            trackId, moduleId
        }
    })

    return (
        <Layout fullWidth >
            <QueryResult error={error} loading={loading} data={data}>
                <ModuleDetail track={data?.track} module={data?.module} />
            </QueryResult>
        </Layout>
    )
}
