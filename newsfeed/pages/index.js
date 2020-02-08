import React from 'react'
import fetch from 'isomorphic-unfetch'

import Head from 'next/head'
import Nav from '../components/nav'
import NewsCard from '../components/NewsCard'
import { Col, Layout, Row, Card, Icon } from 'antd'
const { Header, Content } = Layout

const Home = props => {
  console.log("props",props);
  return (
    <Layout>
      <Row justify='space-around' type='flex'>
        <Col
          span={20}
          style={{
            paddingTop: '30px',
            paddingBottom: '30px',
            minHeight: '500px',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            margin: 'auto',
            justifyContent: 'center'
          }}
        >
          {props.contents
            ? props.contents.map(content => <NewsCard content={content} />)
            : null}
        </Col>
      </Row>
    </Layout>
  )
}

Home.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:5000/feed`)
  const data = await res.json()
  return {
    contents: data.map(entry => entry)
  }
}

export default Home
