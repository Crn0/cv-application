/* eslint-disable no-unused-vars */
import { useState } from 'react'
import * as Events from './component/Event-handlers';
import Form from './component/Form';
import './App.css'
import './styles/Form.css'

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

  const personalInfo = {personName, contactInfo};
  const educationInfo = {schoolInfo, schooling};
  const experienceInfo = {companyInfo, responsibility, jobExperience};
  
  return (
    <>
    <div className="title"><h1>CV Form</h1></div>
     <div className="form-container">
      <Form isOpen={isOpen} personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo} EventHandlers={EventHandlers}/>
     </div>

     <div className="page-container"><p>{personalInfo.personName.firstName}</p></div>
    </>
  )
}

export default App
