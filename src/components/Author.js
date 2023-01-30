import React from 'react';
import profile from '../data/profile';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/default.css';

const Author = () => {
	return (
		<div className='d-flex flex-column align-items-center justify-content-center'>
			<div className='row p-2 shadow p-3 mb-5 bg-white rounded justify-content-md-center justify-content-center border border-secondary'>
				<div className='col-8 col-md-6 d-flex'>
					<img src={'./' + profile.profilePic} className="rounded-circle w-100 h-100" alt="" />
				</div>
				<div className='col align-self-center'>
					<div className='pb-3'>
						<p className='h3'><strong>{profile.name}</strong></p>
						<small className='h5'>{profile.position}</small>
					</div>
					<div className='justify-content-left'>
						<div className='flex py-1'>
							<a href={'mailto:' + profile.email} role="button" className='linkButton'>
								<FontAwesomeIcon icon={faEnvelope} className='pe-2' />
								{profile.email}
							</a>
						</div>
						<div className='flex py-1'>
							<a href={profile.githubLink + profile.github} role="button" className='linkButton'>
								<FontAwesomeIcon icon={faGithub} className='pe-2' />
								{profile.github}
							</a>
						</div>
						<div className='flex py-1'>
							<a href={profile.linkedinLink + profile.linkedin} role="button" className='linkButton'>
								<FontAwesomeIcon icon={faLinkedin} className='pe-2' />
								{profile.linkedin}
							</a>
						</div>
						<div className='flex py-1'>
							<a href='/prashant-singh.pdf' className='btn btn-warning w-75' download="">
								<FontAwesomeIcon icon={faDownload} className='pe-2' />
								RESUME
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Author