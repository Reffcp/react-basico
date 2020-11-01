import React from 'react';
import './styles/Badge.css'

class Badge extends React.Component{
    render() {

        return <div className="badge-container">
            <div className="badge">
            <div className="badge_header">
                <img className="badge_header_img" src="https://firebasestorage.googleapis.com/v0/b/portafolio-personal-264fb.appspot.com/o/logos%2Flogo-cristian.png?alt=media&token=95a8dfc2-a219-466b-a037-4912a4387a32" alt="Logo conferencia"/>
            </div>

            <div className="badge_section-name">
                <img className="badge_avatar" src={this.props.avatar} alt="Avatar"/>
                <h1>{this.props.firstName} 
                <br/> {this.props.lastName} </h1>
            </div>

            <div className="badge_section-info">
                <h3>{this.props.jobTittle}</h3>
                <div>@{this.props.twitter}</div>
            </div>

            <div className="badge_footer">
                #rebitsconf
            </div>
        </div>
        </div>;
    }
}

export default Badge;