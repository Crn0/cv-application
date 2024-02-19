// personal info events
export function HandleFirstName(e, personName,setName) {
    setName({...personName, firstName: e.target.value});
};

export function HandleLastName(e, personName,setName) {
    setName({...personName, lastName: e.target.value});
};

export function HandleEmail(e, contactInfo, setContactInfo) {
    setContactInfo({contactInfo, email: e.target.value});
};

export function HandlePhoneNumber(e, contactInfo, setContactInfo) {
    setContactInfo({contactInfo, phoneNumber: e.target.value});
};

// school events
export function HandleSchoolName(e, schoolInfo, setSchoolInfo) {
    setSchoolInfo({...schoolInfo, name: e.target.value});
};

export function HandleSchoolDegree(e, schoolInfo, setSchoolInfo) {
    setSchoolInfo({...schoolInfo, degree: e.target.value});
};

export function HandleSchoolStart(e, schooling, setSchooling) {
    setSchooling({schooling, start: e.target.value});
};

export function HandleSchoolEnd(e, schooling, setSchooling) {
    setSchooling({schooling, end: e.target.value});
};

// work events
export function HandleCompanyName(e, companyInfo, setCompanyInfo) {
    setCompanyInfo({...companyInfo, name: e.target.value});
};

export function HandleCompanyJob(e, companyInfo, setCompanyInfo) {
    setCompanyInfo({...companyInfo, job: e.target.value});
};

export function HandleResponsibility(e, setResponsibility) {
    setResponsibility(e.target.value);
};

export function HandleJobStart(e, jobExperience, setJobExperience) {
    setJobExperience({...jobExperience, start: e.target.value});
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
