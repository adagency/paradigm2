import React from 'react'
import Helmet from 'components/Helmet'
import ProjectManager from 'components/ProjectManager'

export default function Projects({ data }) {
  return (
    <main>
      <Helmet
        title='Project Page | Gatsby Template'
        description='Project page of Gatsby Template'
      />
      <ProjectManager />
    </main>
  )
}
