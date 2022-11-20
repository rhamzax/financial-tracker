import React from 'react'
import { Budget } from '../components/Financials/Budget/Budget'
import Layout from '../components/Layout'


export default function Financial () {
  return (
    <>
      <Layout title={"Financial"}>
        This is the finance page
        <Budget/>
      </Layout>
    </>
  )
}
