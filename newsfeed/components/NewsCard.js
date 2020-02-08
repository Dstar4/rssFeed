import React from 'react'
import { Card, Col } from 'antd'

function NewsCard ({ content }) {
  console.log('content', content)
  return (
    <>
      <Card
        bodyStyle={{ Width: 300 }}
        headStyle={{ Width: 300 }}
        style={{ margin: '2em', padding:'1em', width: '300px', border:'solid 1px black'}}
      >
        <h3>{content.title}</h3>
        <a href={content.link}>{content.link}</a>
        <div
          style={{ width: '300px' }}
          dangerouslySetInnerHTML={{ __html: content.content }}
        ></div>
        <h4>Source: {content.feed.title}</h4>
      </Card>
    </>
  )
}
export default NewsCard
