import React from 'react';

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import './styles/BadgeNew.css';
const logo ="https://firebasestorage.googleapis.com/v0/b/portafolio-personal-264fb.appspot.com/o/logos%2Flogo-cristian.png?alt=media&token=95a8dfc2-a219-466b-a037-4912a4387a32";
const avatar= "https://avatars2.githubusercontent.com/u/64700151?s=460&u=11dc93ca6a53b73fcb3c4463367479090f698f29&v=4"
class BadgeNew extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid hero-img" src={logo} alt="logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge avatar={avatar} firstName="Cristian" lastName="Covarrubias" jobTittle="Fullstack Engineer" twitter="reffcp" />
                        </div>
                        <div className="col">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;