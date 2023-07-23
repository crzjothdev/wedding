'use client'

import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import type { Coordinate } from '@/lib/types'

export default function Map({
    className,
    zoom,
    center
}: {
    className: string,
    zoom: number,
    center: Coordinate
}) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_CLOUD_API_KEY
    })

    if (!isLoaded) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <GoogleMap
            zoom={zoom}
            center={center}
            mapContainerClassName={className}
        >
            <Marker position={center}/>
        </GoogleMap>
    )
}