import React from 'react';
import './styles/Badge.css'

class Badge extends React.Component{
    render() {
        return <div className="badge-container">
            <div className="badge">
            <div className="badge_header">
                <img src="https://www.rebits.com.mx/wp-content/uploads/2020/04/cropped-Rebits-Logo-Oficial-11-1-198x50.png" alt="Logo conferencia"/>
            </div>

            <div className="badge_section-name">
                <img className="badge_avatar" src="https://avatars2.githubusercontent.com/u/64700151?s=460&u=11dc93ca6a53b73fcb3c4463367479090f698f29&v=4" alt="Avatar"/>
                <h1>Cristian <br/> Covarrubias</h1>
            </div>

            <div className="badge_section-info">
                <p>Frontend Engineer</p>
                <p>@reffcp</p>
            </div>

            <div className="badge_footer">
                #rebitsconf
            </div>
        </div>
        </div>;
    }
}

export default Badge;