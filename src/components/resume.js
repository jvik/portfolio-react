import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import contactphoto from '../photo.png';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{textAlign: 'center'}}> 
              <img className="profile-photo" src={contactphoto} alt="avatar" style={{height: '200px'}}/> 
            </div>
            <h2 style={{paddingTop: '0.5em'}}>Jørgen Vik</h2>
            <h4 style={{color: 'grey'}}>Developer / Consultant</h4>
            <hr style={{borderTop: '3px solid #0c74e4', width: '90%'}}/>
            <p>Erfaren, faglært teknisk konsulent og IKT-koordinator med fartstid innen brukerstøtte, serverdrift og ASP-teknologier. 
            Dyktig i Windows Server, Linux og skytjenester. Grunnleggende ferdigheter i objektorientert programmering og front end webutvikling.</p>
            <hr style={{borderTop: '3px solid #0c74e4', width: '90%'}}/>
            <h5>Address</h5>
            <p>Kringsjåveien 99A, 5163 Laksevåg</p>
            <h5>Email</h5>
            <p>mail@jvik.no</p>
            <h5>Web</h5>
            <p>jvik.no</p>
            <hr style={{borderTop: '3px solid #0c74e4', width: '90%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={6}>

            <Experience
              startYear={2018} 
              endYear="Nåværende" 
              workplaceName="Keolis"
              workplaceTitle="IKT-koordinator"
              workplaceDescription="Deltidsstilling hos Bybanens driftspartner, Keolis. Rådgivning og koordinering rundt digitalisering, prosesser og IT-drift/support."
                />

            <Experience
              startYear={2002} 
              endYear={2006} 
              workplaceName="Candidator"
              workplaceTitle="Teknisk konsulent"
              workplaceDescription="Teknisk kundeansvar for en rekke små og mellomstore bedrifter. Drift, overvåkning og support av Windows Server ASP- og Linux-miljøer på Hyper-V og VMware.
              Konfigurering, migrering og drift av Office 365-løsninger. Oppfølging av drift og support, samt rådgivning og mersalg."
                />

            <Experience
              startYear={2002} 
              endYear={2006} 
              workplaceName="Evry ASA"
              workplaceTitle="IKT-lærling"
              workplaceDescription="Teknisk kundeansvar for en rekke små og mellomstore bedrifter. Drift, overvåkning og support av Windows Server ASP- og Linux-miljøer på Hyper-V og VMware.
              Konfigurering, migrering og drift av Office 365-løsninger. Oppfølging av drift og support, samt rådgivning og mersalg."
                />

            <hr style={{borderTop: '3px solid #00f160', width: '100%'}}/>

            <Education 
              startYear={2017} 
              endYear={2019} 
              schoolName="UiB"
              educationTitle="Informasjonsvitenskap"
              schoolDescription="Bachelorstudier med bred teoretisk og teknisk innføring til informasjons- og kommunikasjonsteknologi."
                />

            <Education 
              startYear={2008} 
              endYear={2009} 
              schoolName="Akademiet"
              educationTitle="IKT-servicefag"
                />

            <Education 
              startYear={2007} 
              endYear={2008} 
              schoolName="Akademiet"
              educationTitle="Medier og kommunikasjon"
              />
              
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume