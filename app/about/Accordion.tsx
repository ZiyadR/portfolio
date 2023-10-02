import React, { ReactNode } from 'react'

interface Props {
    title: string,
    children: ReactNode
}

const Accordion = ({ title, children }: Props) => {
    return (
        <div className="collapse collapse-arrow join-item border-b-2 border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl text-gray-500 font-semibold">
                {title}
            </div>
            <div className="collapse-content pl-10">
                {children}
            </div>
        </div>
    )
}

export default Accordion