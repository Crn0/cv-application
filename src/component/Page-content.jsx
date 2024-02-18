/* eslint-disable react/prop-types */
export default function Page({personalInfo, educationInfo, experienceInfo,}) {
    // personal info
    const fullName = `${personalInfo.personName.firstName} ${personalInfo.personName.lastName}`;
    const email = personalInfo.contactInfo.email;
    const number = personalInfo.contactInfo.phoneNumber;
    // education info
    const schoolName = educationInfo.schoolInfo.name;
    const schoolDegree = educationInfo.schoolInfo.degree;
    const schoolDays = `${educationInfo.schooling.start} ${educationInfo.schooling.end}`;
    // experience info
    const companyName = experienceInfo.companyInfo.name;
    const jobTitle = experienceInfo.companyInfo.job;
    const responsibility = experienceInfo.responsibility;
    const employment = `${experienceInfo.jobExperience.start} ${experienceInfo.jobExperience.end}`
     


    return (
        <div className="page-container">
            <section className="personal-info">
                <h2>Personal Information</h2>
                <p className="full-name">{fullName}</p>
                <p className="email">{email}</p>
                <p className="phone-number">{number}</p>
            </section>

            <section className="education">
                <h2>Education</h2>
                <p className="school-name">{schoolName}</p>
                <p className="degree">{schoolDegree}</p>
                <p className="school-days">{schoolDays}</p>
            </section>

            <section className="work-experience">
                <h2>Work Experience</h2>
                <p className="company-name">{companyName}</p>
                <p className="job-title">{jobTitle}</p>
                <p className="responsibility">{responsibility}</p>
                <p className="employment">{employment}</p>
            </section>
        </div>
    )
}