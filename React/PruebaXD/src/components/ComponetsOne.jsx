import React from 'react';
import fasdatec from './ComponentsOne.module.scss';

export default function ComponetsOne(props) {
    return (
        <div className={fasdatec.container}>
            <img className={fasdatec.image} src={props.image} alt={props.imageInformation} title={props.imageInformation} loading='lazy' />
            <div className={fasdatec.containerText}>
                <div className={fasdatec.containerInformationPersonal}>
                    <h1 className={fasdatec.name}><strong>{props.name}</strong> en {props.country}</h1>
                    <h3 className={fasdatec.positionInTheCompany}>{props.positionInTheCompany} en <strong>{props.company}</strong></h3>
                </div>
                <p className={fasdatec.testimony}>{props.testimony}</p>
            </div>
        </div>
    )
}
