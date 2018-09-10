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
          <Header className="header-color" title="Min portfolio" scroll>
            <Navigation>
              <a href="/">Hjem</a>
              <a href="/resume">CV</a>
              <a href="/projects">Prosjekter</a>
              <a href="/contact">Kontakt meg</a>
            </Navigation>
          </Header>
          <Drawer title="Min portfolio">
            <Navigation>
            <a href="/">Home</a>
            <a href="/resume">CV</a>
            <a href="/projects">Prosjekter</a>
            <a href="/contact">Kontakt meg</a>
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
