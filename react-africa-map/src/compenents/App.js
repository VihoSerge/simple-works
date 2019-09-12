import React from 'react';
import CityTooltip from './CityTooltip';
import CountryTooltip from './CountryTooltip';

import '../css/App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      map: null,
      africa: null,
      isCountry: false,
      country: '',
      countryFlag: '',
      population: 0,
      capital: '',
      city: '',
      area: 0,
      tooltipStyle: {
        position: 'absolute', 
        display: 'none', 
        top: 0, 
        left: 0, 
        backgroundColor : '#fff', 
        padding: '10px', zIndex: '3', 
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', 
        borderRadius: '10px'
      }
    }
  }

  componentDidMount() {
    fetch('./map/africa.svg')
    .then(res => res.text())
    .then(xml => {
      this.setState({ map: xml, africa: xml });
    });
  }


  renderCountry = (e) => {
    const targetId = e.target.getAttribute('data-id');
    if(targetId) {
      const path = './map/' + targetId.toLowerCase() + '.svg';
      fetch(path)
      .then(res => res.text())
      .then(xml => {
        this.setState({ map: xml, isCountry: true });
      });
    }
  }

  renderParent = () => {
    this.setState({ map: this.state.africa, isCountry: false });
  }

  showTooltip = (e) => {
    e.persist()
    if(!this.state.isCountry) {
      let country = e.target.getAttribute('data-name')
      let countryFlag = e.target.getAttribute('data-flag')
      let population = e.target.getAttribute('data-pop')
      let capital = e.target.getAttribute('data-cap')
      let area = e.target.getAttribute('data-area')
      if(country) 
        this.setState(prevState => {
          let tooltipStyle = Object.assign({}, prevState.tooltipStyle);  
          tooltipStyle.top = (e.clientY + 14) + 'px';                     
          tooltipStyle.left = (e.clientX + 10) + 'px';  
          tooltipStyle.display = 'flex';                 
          return { tooltipStyle, country, countryFlag, population, capital, area };
        });
    }else {
      let city = e.target.getAttribute('name');
      if(city) 
        this.setState(prevState => {
          let tooltipStyle = Object.assign({}, prevState.tooltipStyle);  
          tooltipStyle.top = (e.clientY + 14) + 'px';                     
          tooltipStyle.left = (e.clientX + 10) + 'px';  
          tooltipStyle.display = 'flex';                 
          return { tooltipStyle, city };
        });

    }
  }

  hideTooltip = (e) => {
    e.persist()
    this.setState(prevState => {
      let tooltipStyle = Object.assign({}, prevState.tooltipStyle);  
      tooltipStyle.display = 'none';
      return { tooltipStyle };
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="md-6" style={{position: 'inherit'}}>
            <div className="main-card">
              <div className="parent">
                {
                  this.state.isCountry ?
                  <img onClick={this.renderParent} src="./map/africa.svg" alt=""/> :
                  ""
                }
              </div>
              <div style={{height: '80vh'}} onMouseOver={this.showTooltip} onMouseOut={this.hideTooltip} onClick={this.renderCountry} dangerouslySetInnerHTML={{__html: this.state.map}} ></div>
              {
                this.state.isCountry ?
                <CityTooltip style={this.state.tooltipStyle} name={this.state.city} /> 
                :
                <CountryTooltip 
                  style={this.state.tooltipStyle} 
                  name={this.state.country} 
                  flag={this.state.countryFlag} 
                  capital={this.state.capital} 
                  population={this.state.population} />
              }
            </div>
          </div>
          {
            this.state.isCountry ?
            <div className="md-6">
              <div className="main-card">
                <div className="infos-wrapper">
                  <span className="icon-wrapper"><img src={this.state.countryFlag} alt="" className="ctr-tooltip-flag" /></span>
                  <b className="text-wrapper">{this.state.country}</b>
                </div>
                <div className="infos-wrapper">
                  <span className="icon-wrapper">
                  <img src="./icons/capital.svg" alt="" className="ctr-tooltip-flag" />
                  </span>
                  <span className="text-wrapper">{this.state.capital}</span>
                </div>
                <div className="infos-wrapper">
                  <span className="icon-wrapper">
                  <img src="./icons/population.svg" alt="" className="ctr-tooltip-flag" />
                  </span>
                  <span className="text-wrapper">{this.state.population}</span>
                </div>
                <div className="infos-wrapper">
                  <span className="icon-wrapper">
                  <img src="./icons/area.svg" alt="" className="ctr-tooltip-flag" />
                  </span>
                  <span className="text-wrapper">{this.state.area}  km2</span>
                </div>
              </div>
            </div>
            :
            ""
          }
        </div>
      </div>
    );
  }
}

export default App;
