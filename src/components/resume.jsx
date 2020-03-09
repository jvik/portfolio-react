import React, { Component } from 'react';
import contactphoto from './static/photo.png';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
	render() {
		return (
			<section className="resume-container">
				<div className="resume-left-col">
					<div className="photo-container" style={{ textAlign: 'center' }}>
						<img className="cv-photo" src={contactphoto} alt="avatar" style={{ height: '200px' }} />
					</div>
					<h2 style={{ paddingTop: '0.5em', marginBottom: '0.2em' }}>Jørgen Vik</h2>
					<h4 style={{ color: 'grey', paddingTop: '0px', marginTop: '0px' }}>
						Full stack developer / Consultant
					</h4>
					<hr style={{ borderTop: '3px solid #2c3e50', width: '98%' }} />
					<p>
						Full stack developer and consultant. Experienced in Vue, Node.js, SQL, NoSQL as well as DevOps,
						server operations and ASP technologies. Developer and partner with Supernode in Kristiansund.
					</p>
					<p>
						Several years of experience with technical account management and project management for small
						and medium sized businesses. Reach me at +47 91 99 99 47 or mail@jvik.no
					</p>
					<hr style={{ borderTop: '3px solid #2c3e50', width: '98%' }} />
					<h5>Address</h5>
					<p>Sjursvikveien 1A, 6507 Kristiansund</p>
					<h5>Email</h5>
					<p>mail@jvik.no</p>
					<h5>Linkedin</h5>
					<p>
						<a className="link" href="https://www.linkedin.com/in/vikjorgen/">
							vikjorgen
						</a>
					</p>
				</div>

				<div className="resume-right-col">
					<h3>Experience</h3>
					<Experience
						startYear={2018}
						endYear="Current"
						workplaceName="Supernode"
						workplaceTitle="Partner & Full Stack Developer"
						workplaceDescription="Full stack web development with focus on Vue framework, REST and GraphQL on node.js. DevOps related tasks around configuration and management of pipelines in our CI/CD tools. Managing customer relations and project management for development projects."
					/>
					<Experience
						startYear={2018}
						endYear={2018}
						workplaceName="Keolis"
						workplaceTitle="ICT Coordinator"
						workplaceDescription="Consulting and coordinating digitalization & digitization, processes and IT-operations/support. Helped the administration migrate manual processes to Office 365 & sharepoint and setting up document e-sign process. Part time position during studies."
					/>

					<Experience
						startYear={2013}
						endYear={2018}
						workplaceName="Iver"
						workplaceTitle="IT Consultant"
						workplaceDescription="(Formerly Candidator & Knowit Services) Technical account manager for several small and medium sized businesses. Operations, monitoring and support of Windows Server ASP- and Linux environments on Hyper-V and VMware. Configuration, migration and support on Office 365 and Microsoft Exchange solutions. Project management for some small to mid size projects."
					/>
					<Experience
						startYear={2012}
						endYear={2013}
						workplaceName="Iver"
						workplaceTitle="IT Consultant (Part-time)"
						workplaceDescription="Customer support by phone and email. Monitoring and maintenance on networks, servers and backup, as well as in-house AV-equipment for customers."
					/>

					<Experience
						startYear={2002}
						endYear={2006}
						workplaceName="Evry ASA"
						workplaceTitle="IT Consultant"
						workplaceDescription="General user support on ASP services with Windows Terminal Services and Citrix. Monitoring and problem management on ASP-solutions on VMware. User administration in Active Directory, Exchange, Lotus Notes and IBM SystemI."
					/>

					<hr style={{ borderTop: '3px solid #bdc3c7', width: '100%' }} />

					<h3>Education</h3>
					<Education startYear={2017} endYear={2018} schoolName="UiB" educationTitle="Information science" />

					<Education startYear={2008} endYear={2009} schoolName="Akademiet" educationTitle="IKT-servicefag" />

					<Education
						startYear={2007}
						endYear={2008}
						schoolName="Akademiet"
						educationTitle="Medier og kommunikasjon"
					/>

					<hr style={{ borderTop: '3px solid #bdc3c7', width: '100%' }} />

					<h3>Board memberships</h3>
					<Experience
						startYear={2019}
						endYear="Current"
						workplaceName="Supernode AS"
						workplaceTitle="Board member"
					/>

					<Experience
						startYear={2018}
						endYear="Current"
						workplaceName="Ignite Invest"
						workplaceTitle="Board member"
					/>

					<Experience
						startYear={2018}
						endYear="Current"
						workplaceName="Norfinn Borettslag"
						workplaceTitle="Board member"
					/>

					<Experience
						startYear={2017}
						endYear={2018}
						workplaceName="Borettslaget Kringsjåveien 99"
						workplaceTitle="Board member"
					/>

					<Experience
						startYear={2016}
						endYear={2017}
						workplaceName="Borettslaget Kringsjåveien 99"
						workplaceTitle="Chairman"
					/>
				</div>
			</section>
		);
	}
}

export default Resume;
