import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--no-desktop-drawer-button">
        <Layout>
          <Header className="header-color mdl-layout--large-screen-only" scroll>
            <Navigation className="">
              <a href="/">Hjemnavbar</a>
              <a href="/resume">CV</a>
              <a href="/projects">Prosjekter</a>
              <a href="/contact">Kontakt meg</a>
            </Navigation>
          </Header>
          <Drawer className="">
            <Navigation>
            <a href="/">Hjemdrawer</a>
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
