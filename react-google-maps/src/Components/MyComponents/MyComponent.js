import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 22.864131785814735,
    lng: 89.52951889889523
};


const MyComponent = () => {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDbpxQffq1yCqzGVGe9gchAzpBLC5Ae4ik"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    )
};

export default MyComponent;