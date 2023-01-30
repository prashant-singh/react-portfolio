import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../data/profile";

const iconStyle = {
	width: 30,
	height: 'auto'
};

function Footer() {
	return (
		<div className="container">
			<div className="row text-center justify-content-center border border-warning border-bottom-0 border-end-0 border-start-0 py-4">
				<div className="col-auto">
					<a href={profile.githubLink + profile.github} className="btn">
						<FontAwesomeIcon icon={faGithub} style={iconStyle} />
					</a>
				</div>
				<div className="col-auto">
					<a href={profile.linkedinLink + profile.linkedin} className="btn">
						<FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
					</a>
				</div>
				<div className="col-auto">
					<a href={'mailto:' + profile.email} className="btn">
						<FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
					</a>
				</div>
			</div>
		</div>
	);
}
export default Footer;