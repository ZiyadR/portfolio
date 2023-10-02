import React from 'react'

interface Props {
    title: string,
    image: string
}

const Project = ({ title, image }: Props) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
            </div>
        </div>
    )
}

export default Project