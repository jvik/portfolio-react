import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="PORTFOLIO" scroll>
            <Navigation>
              <a href="/aboutme">About me</a>
              <a href="/resume">Resume</a>
              <a href="/projects">Projects</a>
              <a href="/contact">Contact Me</a>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content"></div>
            <Main/>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default App
