import React from 'react'
import { MapContainer, TileLayer,  Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import footerImg from "../../assets/images/footerimg.png"

function Footer() {
    const position = [41.008709,28.875080]
    const iconMark = new L.Icon({
      // iconUrl: require('../images/Logo.png'),
      // iconRetinaUrl: require('../images/Logo.png'),
      iconUrl: icon,
    iconRetinaUrl: iconRetinaUrl,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  });
  L.Marker.prototype.options.icon = iconMark
    return (
        <div className='footerContainer'>
            <img src={footerImg} alt='...' />
            <div className='footerContainer__contact'>
                <div className='footerContainer__contact__text'>
                    <h3>İletişim</h3>
                    <p>Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul</p>
                </div>
                <p>Email:
                    <a href="mailto:bilgi@tesodev.com">
                        bilgi@tesodev.com
                    </a>
                </p>
            </div>
            <MapContainer center={position} zoom={13} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={iconMark}>
                    <Popup>
                        Tesodev Yazılım Donanım Bilişim Bi...
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Footer