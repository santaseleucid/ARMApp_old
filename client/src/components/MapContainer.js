import React, { Component } from 'react';
import { Map, Polyline, GoogleApiWrapper,  Marker, InfoWindow } from 'google-maps-react';


const mapStyles = {
  width: '70vw',
  height: '70vh'
};

export class MapContainer extends Component {

  constructor(props){
    super(props); 
    this.state = {
      lines:[],
      visibility : false 
    };
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/coord')
    .then(response => response.json())
    .then(json => {
      this.setState({lines: json})
      console.log(this.state.lines); 
    })
  }

  openWindow(id){
    var linesTemp = this.state.lines; 
    linesTemp[id].infoVisible = true; 
    this.setState(
      {lines: linesTemp}
    ) ;
  }

  closeWindow(id){
    var linesTemp = this.state.lines; 
    linesTemp[id].infoVisible = false; 
    this.setState(
      {lines: linesTemp}
    ) ;
  }

  render() {
    const lines = this.state.lines

    return (
    <div>
        <h4>
            {"comments:"}
        </h4>
        <p>
            {"fix viewport"}
            {<br/>}
            {"data from test api is missing points"}
            {<br/>}
            <a href = "/api/coord">See Data - Endpoint</a>
        </p>
        
        
    
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 42.345,
         lng: -71.13
        }}
        >

        {lines.map(line =>
          <Polyline
            key = {line.chain}
            path={line.draw.coord}
            strokeColor={line.draw.strokeColor}
            strokeOpacity={line.draw.strokeOpacity}
            strokeWeight={line.draw.strokeWeight}   
            onClick = {() => this.openWindow(line.id)}
          />
        )}

        {lines.map(line =>
          <InfoWindow 
            onClose = {() => this.closeWindow(line.id)}
            key = {line.chain} 
            visible = {this.state.lines[line.id].infoVisible}  
            position = {{lat: line.draw.coord[0].lat, lng: line.draw.coord[0].lng}}
          >
          <div>
            chain: {line.chain}<br/>
            coord: {line.draw.coord[0].lat}
          </div>
          </InfoWindow>
        )}          
        

        </Map>
    </div>
    );
  } 
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAwauQZJBtQWNWrt9OZwFKm1q9QUYmB9QI'
})(MapContainer);
