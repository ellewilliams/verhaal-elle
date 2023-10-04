import * as React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

export interface AwardProps {
  _key: string
  award: string
  project: string
  category: string
  link: string
  year: number
}

export const Award = (props: AwardProps) => {
  const { _key, award, project, category, year, link} = props

  return (
    <div className="award" key={_key}>
      <div className="text-wrapper">
        <p className="award col-md-3">{award}</p>
        <p className="project col-md-3">{project}</p>
        <p className="category col-md-4">{category}</p>
        <p className="year col-md-1">{year}</p>
        <p className="link col-md-1"><a href={link} target="_blank"><svg className="external-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.45 14.45"><polyline points="13.95 10.42 13.95 13.95 .5 13.95 .5 .5 4.03 .5"/><polyline points="7.23 .5 13.95 .5 13.95 7.22"/><line x1="4.03" y1="10.41" x2="13.95" y2=".5"/></svg></a></p>
      </div>
    </div>
  )
}
