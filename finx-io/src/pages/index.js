import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../layouts'
import SEO from '../components/seo'

import { useDarkMode } from '../contexts/Application'

import '../components/react-ga'

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'none'
}

TagManager.initialize(tagManagerArgs)

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 12rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
  @media (max-width: 960px) {
    margin-bottom: 0;
    padding: 2rem;
    padding-bottom: 8rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  will-change: transform;
  margin: 3rem 0 4rem 0;
  margin-bottom: 12rem;
  @media (max-width: 960px) {
    margin: 3rem 0 1rem 0;
    margin-bottom: 4rem;
  }
`

const StyledBodyTitle = styled.h1`
  font-size: 96px;
  margin: 4rem 0 3rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'GT Haptik Regular';
  @media (max-width: 1024px) {
    margin: 2rem 0 3rem 0;
  }

  @media (max-width: 640px) {
    width: 100%;
    margin: 2rem 0 2rem 0;
    font-weight: 500;
    text-align: left;
    font-size: 58px;
  }

  @media (max-width: 440px) {
    font-weight: 500;
    text-align: left;
    font-size: 52px;
  }
`
const StyledBodySubTitle = styled.h2`
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledItemRow = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0rem;
  width: 100%;
  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    & > * {
      margin-bottom: 12px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 12px;
    }
  }
  @media (min-width: 960px) {
    box-sizing: border-box;
    transition: right 0.25s ease;
  }
`

const IndexPage = props => {

  return (
    <Layout path={props.location.pathname}>
      <SEO
        title="FINX"
        path={props.location.pathname}
        description={'A fully decentralized protocol for tokenized physical assets'}
      />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>Tokenized Physical Assets</StyledBodyTitle>
          <StyledBodySubTitle style={{ marginBottom: '3rem' }}>
            FINX is a 100% decentralized L2 protocol for a digitized world
          </StyledBodySubTitle>
          <StyledItemRow>
            <a
              href="https://etherscan.io/address/0x137cd72c356593fb20c90bd83450b9854decffde"
              style={{
                fontSize: '20px'
              }}>FINX contract on Etherscan.io
              </a>
          </StyledItemRow>
        </StyledTitle>
      </StyledBody>
    </Layout>
  )
}

export default IndexPage
