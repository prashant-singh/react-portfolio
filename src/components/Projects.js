import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import '../css/default.css';
import profile from '../data/profile';
import workList from '../data/workList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlay, faWindows, faApple } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {

	useEffect(() => {
		document.title = profile.name + ' | Projects';
	}, []);

	return (
		<div className="container">
			<div className="row justify-content-center">
				{
					workList.map(item => (
						<div className="col-md-8 col-lg-6 col-12 p-3" key={item.name}>
							<div className="card h-100 border-primary shadow bg-white rounded">
								<img className="card-img-top project-thumb" src={'./' + item.img} alt="img" />
								<div className="card-body">
									<h5 className="card-title h5 text-center">{item.name}</h5>
									<p className="card-text text-center text-muted">{item.detail}</p>
									<div className='row row-cols-auto d-flex justify-content-center'>
										{
											item.tags.map(tag => (
												<div className='col' key={tag}>
													<div className="col badge text-bg-dark">{tag}</div>
												</div>
											))
										}
									</div>
									<div className='row row-cols-auto d-flex justify-content-center py-4'>
										{
											item.links.map(link => (
												<div className='col py-2' key={link.Name}>
													<a href={link.url} className='btn border-dark btn-light'>
														{
															(() => {

																switch (link.Name) {
																	case 'Android':
																		return (
																			<FontAwesomeIcon icon={faGooglePlay} className='pe-1' />
																		)
																	case 'Windows':
																		return (
																			<FontAwesomeIcon icon={faWindows} className='pe-1' />
																		)
																	case 'IOS':
																		return (
																			<FontAwesomeIcon icon={faApple} className='pe-1' />
																		)
																	default:
																		return (
																			<FontAwesomeIcon icon={faGlobe} className='pe-1' />
																		)
																}

															})()}
														{link.Name}
													</a>
												</div>
											))
										}
									</div>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</div >
	);
}

export default Projects;