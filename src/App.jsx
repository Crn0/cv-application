/* eslint-disable no-unused-vars */
import { useState } from 'react'
import * as Events from './component/Event-handlers';
import Form from './component/Form';
import Page from './component/Page-content';
import './App.css'
import './styles/Form.css'
import './styles/Page-content.css'

function App() {
  // dialog state
  const [status, setStatus] = useState('open');
  const isOpen = status === 'open';
  // personal info state
  const [personName, setPersonName] = useState({firstName: '', lastName: ''});
  const [contactInfo, setContactInfo] = useState({email: '', phoneNumber: ''});
  // school state
  const [schoolInfo, setSchoolInfo] = useState({name: '', degree: ''});
  const [schooling, setSchooling] = useState({start: '', end: ''});
  // work state
  const [companyInfo, setCompanyInfo] = useState({name: '', job: ''});
  const [responsibility, setResponsibility] = useState('');
  const [jobExperience, setJobExperience] = useState({start: '', end: ''});

  const EventHandlers = {
    HandleFirstName: (e) => Events.HandleFirstName(e, personName, setPersonName),
    HandleLastName: (e) => Events.HandleLastName(e, personName, setPersonName),
    HandleEmail: (e) => Events.HandleEmail(e, contactInfo, setContactInfo),
    HandlePhoneNumber: (e) => Events.HandlePhoneNumber(e, contactInfo, setContactInfo),

    HandleSchoolName: (e) => Events.HandleSchoolName(e, schoolInfo, setSchoolInfo),
    HandleSchoolDegree: (e) => Events.HandleSchoolDegree(e, schoolInfo, setSchoolInfo),
    HandleSchoolStart: (e) => Events.HandleSchoolStart(e, schooling, setSchooling),
    HandleSchoolEnd: (e) => Events.HandleSchoolEnd(e, schooling, setSchooling),

    HandleCompanyName: (e) => Events.HandleCompanyName(e, companyInfo, setCompanyInfo),
    HandleCompanyJob: (e) => Events.HandleCompanyJob(e, companyInfo, setCompanyInfo),
    HandleResponsibility: (e) => Events.HandleResponsibility(e, setResponsibility),
    HandleJobStart: (e) => Events.HandleJobStart(e, jobExperience, setJobExperience),
    HandleJobEnd: (e) => Events.HandleJobEnd(e, jobExperience, setJobExperience),

    HandleSubmit: (e) => Events.HandleSubmit(e, setStatus),
    HandleEdit: (e) => Events.HandleEdit(e, setStatus),
  };

  // put states in object for easier access
  const personalInfo = {personName, contactInfo};
  const educationInfo = {schoolInfo, schooling};
  const experienceInfo = {companyInfo, responsibility, jobExperience};
  
  return (
    <>
      <div className="title"><h1>CV Form</h1></div>
    
      <Form isOpen={isOpen} personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo} EventHandlers={EventHandlers}/>

      {!isOpen && <Page personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo} EventHandlers={EventHandlers}/>}

      
    </>
  )
}

export default App
