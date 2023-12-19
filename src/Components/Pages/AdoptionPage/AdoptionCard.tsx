import React from 'react'
import { AdoptionCat } from './data'
import ImageGallery from "react-image-gallery";

interface Props {
    cat: AdoptionCat
}

const AdoptionCard = ({cat}: Props) => {
    return (
        <div className='adoption-card'>
            <ImageGallery 
                showPlayButton={false}
                showFullscreenButton={false} 
                showThumbnails={false}
                slideDuration={200}
                lazyLoading={true}
                items={cat.images}
            />
            <div style={{padding: '0px 16px', marginBottom: 24}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', margin: '4px 0px'}}>
                    <h2 style={{margin: 0}}>{cat.name}</h2>
                    <h3 style={{margin: 0}}>{cat.age}</h3>
                </div>
                <p style={{margin: 0}}>{cat.description}</p>
            </div>
        </div>
    )
}

export default AdoptionCard