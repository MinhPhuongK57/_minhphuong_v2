'use client'

import NotFoundContainer from '../../../containers/not-found'
import ProjectDetailContainer from '../../../containers/project-detail'
import React from 'react'
import { projects } from '../../../constants'
import { useParams } from 'next/navigation'

const ProjectDetailPage = () => {
    const { slug } = useParams()
    const projectDetailData = (slug: string | string[]) => {
        const data = projects.filter((idx) => idx.slug === slug)
        return data[0]
    }

    return projectDetailData(slug) ? (
        <ProjectDetailContainer projectArray={projectDetailData(slug).preArr} />
    ) : (
        <NotFoundContainer />
    )
}
export default ProjectDetailPage
