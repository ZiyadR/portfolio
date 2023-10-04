import React from 'react'
import Accordion from './Accordion'

const AboutPageOld = () => {

    return (
        <main>
            <div className="join join-vertical w-full">
                <Accordion title="Work Experience">
                    <div className="mb-6">
                        <h3 className="font-bold text-gray-500">Dec.2022 - Present</h3>
                        <h3 className="font-bold mb-1">Graphic Designer - illogique</h3>
                        <ul className="list-disc text-gray-500 marker:text-orange-500">
                            <li>Created logo and branding designs</li>
                            <li>Collaborated in launching Advertising Campaigns</li>
                            <li>Created social media content</li>
                            <li>Worked on basic animation</li>
                            <li>Designed publication designs</li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-bold text-gray-500">Feb.2022- Dec.2022</h3>
                        <h3 className="font-bold mb-1">Graphic Designer - DesignFactory </h3>
                        <ul className="list-disc text-gray-500 marker:text-orange-500">
                            <li>Did photography shootings</li>
                            <li>Designed publication designs for the company</li>
                            <li>Created social media content</li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-bold text-gray-500">Feb.2021 - May.2021</h3>
                        <h3 className="font-bold mb-1">Intern. Graphic Designer - Samar Sbeity Speech Therapy </h3>
                        <ul className="list-disc text-gray-500 marker:text-orange-500">
                            <li>Created social media content</li>
                        </ul>
                    </div>
                </Accordion>

                <Accordion title="Education">
                    <h3 className="font-bold text-gray-500">Sep.2018 - Feb.2022</h3>
                    <h3 className="font-bold mb-1">Bachelor Degree In Graphic Design </h3>
                    <ul className="list-disc text-gray-500 marker:text-orange-500">
                        <li>American University Of Science And Technology, Sidon, Lebanon</li>
                        <li>GPA 3.68</li>
                    </ul>
                </Accordion>

                <Accordion title="Skills">
                    <h3 className="font-bold mb-1">Design Skills</h3>
                    <p className="text-gray-500">
                        Branding design, Design narratives, Packaging, Visual communication,
                        Web and app design, Social media and digital marketing, Typography, Design layouts....etc
                    </p>
                </Accordion>

                <Accordion title="Language">
                    <div className="flex"><div className="w-20 text-gray-500 font-semibold">Arabic</div><div><progress className="progress w-56" value="90" max="100"></progress></div></div>
                    <div className="flex"><div className="w-20 text-gray-500 font-semibold">English</div><div><progress className="progress w-56" value="75" max="100"></progress></div></div>
                </Accordion>

                <Accordion title="Interest">
                    <p className="text-gray-500">Semiotics, Psychology, meditation, makeup art, Painting, Singing,
                        reading Manga/manhwa, cleaning, Exploring Nature
                    </p>
                </Accordion>

            </div>
        </main>
    )
}

export default AboutPageOld