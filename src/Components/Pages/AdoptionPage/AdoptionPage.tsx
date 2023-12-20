import React from 'react';
import { Section } from '../../Section/Section';
import { AdoptionCatsData } from './data'
import AdoptionCard from './AdoptionCard'
import './AdoptionPage.css'

const AdoptionPage = () => {
    return (
        <div>
            <Section
                id='adoption'
                header='Adoption'
                body={"Information here about our adoption policies, contact info, etc"}
            />

            <h2 style={{textAlign: 'center'}}>Available Cats</h2>
            <div className='adoption-card-container'>
                {AdoptionCatsData.map(cat => <AdoptionCard cat={cat} />)}
                {AdoptionCatsData.map(cat => <AdoptionCard cat={cat} />)}
                {AdoptionCatsData.map(cat => <AdoptionCard cat={cat} />)}
                {AdoptionCatsData.map(cat => <AdoptionCard cat={cat} />)}
                {AdoptionCatsData.map(cat => <AdoptionCard cat={cat} />)}
            </div>
        </div>
    )
}

export default AdoptionPage