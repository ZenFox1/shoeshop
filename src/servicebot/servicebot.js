import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import serviceData from './services.json';
import './servicebot.css';


function Servicebot(){
    const [basename, setBasename] = useState("");
    const [serviceState, setServiceState] = useState(false);
    const faqData = serviceData.DEservices;
    
    var snippet = <></>;
    var returnValue = <></>;

    function contentSwitcher(name){
      let existingItem = faqData.find(item => item.name === name);
      if(existingItem){
        setBasename(existingItem.name);
      }
    }

    
    
    if(serviceState === false){
      snippet = <div className="service-main"><button className="service-bot-unused" onClick={() => setServiceState(true)}>Hilfe anzeigen</button></div>;
      returnValue = snippet;
    }else{
      if (basename === ""){
        snippet = 
        <>
          <div>Mit welchem Thema benötigen Sie hilfe?</div>
          {faqData.map(theme => <button onClick={() => contentSwitcher(theme.name)}>{theme.name}</button>)}
          <button className="service-bot-inuse" onClick={() => setServiceState(false)}>Hilfe ausblenden</button>
        </>;

      }else{
        let usedService = faqData.find(item => item.name === basename);
        let serviceToMap = usedService.werte;

        snippet= 
        <>
          <button style={{fontSize: "14px"}} onClick={() => setBasename("")}><img style={{width: "14px"}} src="./assets/img/back.png"/>zurück</button>
          <div className="service-bot-texts">
          <h5>{usedService.name}</h5>
          <h6>{usedService.text}</h6>
          {serviceToMap.map(
            (service) => <><h6>{service.name}</h6><p>{service.wert}</p></>
          )
          }</div>
          <button className="service-bot-inuse" onClick={() => setServiceState(false)}>Hilfe ausblenden</button>
        </>;
      }

      returnValue = <div className="service-main"><div className="service-bot">{snippet}</div></div>;
    }

    return (returnValue);
    
  };



  export default Servicebot;