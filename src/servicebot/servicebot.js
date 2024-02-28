import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import serviceData from './service.json';
import './servicebot.css';


function Servicebot(){
    const [base, setBase] = useState("default");
    const [basename, setBasename] = useState("");
    const [serviceState, setServiceState] = useState(false);
    const faqData = serviceData.faq;
    
    var snippet = <></>;
    var returnValue = <></>;

    function contentSwitcher(name){
      let existingItem = faqData.find(item => item.namede === name);
      if(existingItem){
        setBase(existingItem.textde);
        setBasename(existingItem.namede);
      }
    }

    
    
    if(serviceState === false){
      snippet = <div className="service-main"><button className="service-bot-unused" onClick={() => setServiceState(true)}>Hilfe anzeigen</button></div>;
      returnValue = snippet;
    }else{
      if (basename === ""){
        snippet = 
        <>
          <div>Wozu benötigen Sie Informationen?</div>
          {faqData.map(theme => <button onClick={() => contentSwitcher(theme.namede)}>{theme.namede}</button>)}
          <button className="service-bot-inuse" onClick={() => setServiceState(false)}>Hilfe ausblenden</button>
        </>;

      }else if(basename == "Zahlungsarten"){
        let nextLevel = faqData.find(item => item.namede === basename);
        snippet = 
        <>
          <button style={{fontSize: "14px"}} onClick={() => setBasename("")}><img style={{width: "14px"}} src="./assets/img/back.png"/>zurück</button>
          <div className="service-bot-texts">
          {nextLevel.werte.map((lvl) =><><h6>{lvl.name}</h6><p>{lvl.wert}</p></> )}
          </div>
          <button className="service-bot-inuse" onClick={() => setServiceState(false)}>Hilfe ausblenden</button>
        </>;
      }else{
        snippet= 
        <>
          <button style={{fontSize: "14px"}} onClick={() => setBasename("")}><img style={{width: "14px"}} src="./assets/img/back.png"/>zurück</button>
          <div className="service-bot-texts">{base}</div>
          <button className="service-bot-inuse" onClick={() => setServiceState(false)}>Hilfe ausblenden</button>
        </>;
      }

      returnValue = <div className="service-main"><div className="service-bot">{snippet}</div></div>;
    }

    return (returnValue);
    
  };



  export default Servicebot;