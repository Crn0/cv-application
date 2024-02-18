// personal info events
export function HandleFirstName(e, personName,setName) {
    setName({...personName, firstName: e.target.value, lastName: personName.lastName});
};

export function HandleLastName(e, personName,setName) {
    setName({...personName, firstName: personName.firstName, lastName: e.target.value});
};

export function HandleEmail(e, contactInfo, setContactInfo) {
    setContactInfo({contactInfo, email: e.target.value, phoneNumber: contactInfo.phoneNumber});
};

export function HandlePhoneNumber(e, contactInfo, setContactInfo) {
    setContactInfo({contactInfo, email: contactInfo.email, phoneNumber: e.target.value});
};

// school events
export function HandleSchoolName(e, schoolInfo, setSchoolInfo) {
    setSchoolInfo({...schoolInfo, name: e.target.value, degree: schoolInfo.degree});
};

export function HandleSchoolDegree(e, schoolInfo, setSchoolInfo) {
    setSchoolInfo({...schoolInfo, name: schoolInfo.name, degree: e.target.value});
};

export function HandleSchoolStart(e, schooling, setSchooling) {
    setSchooling({schooling, start: e.target.value, end: schooling.end});
};

export function HandleSchoolEnd(e, schooling, setSchooling) {
    setSchooling({schooling, start: schooling.start, end: e.target.value});
};

// work events
export function HandleCompanyName(e, companyInfo, setCompanyInfo) {
    setCompanyInfo({...companyInfo, name: e.target.value, job: companyInfo.job});
};

export function HandleCompanyJob(e, companyInfo, setCompanyInfo) {
    setCompanyInfo({...companyInfo, name: companyInfo.name, job: e.target.value});
};

export function HandleResponsibility(e, setResponsibility) {
    setResponsibility(e.target.value);
};

export function HandleJobStart(e, jobExperience, setJobExperience) {
    setJobExperience({...jobExperience, start: e.target.value, end: jobExperience.end});
};

export function HandleJobEnd(e, jobExperience, setJobExperience) {
    setJobExperience({...jobExperience, start: jobExperience.start, end: e.target.value});
};

// button events
export function HandleSubmit(e, setStatus) {
    e.preventDefault()
    setStatus('close');
};

export function HandleEdit(e, setStatus) {
    
    setStatus('open');
};
