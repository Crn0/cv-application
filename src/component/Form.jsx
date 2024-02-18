/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// onSubmit={}
export default function Form({isOpen, personalInfo, educationInfo, experienceInfo, EventHandlers}) {

    return (
        <div className="form-container">
            <dialog open={isOpen}>
                <form onSubmit={EventHandlers.HandleSubmit}>
                    <fieldset className='information'>
                        <legend>Information</legend>

                        <label className="first-name-label">
                            <span>First Name:</span>
                            <input type="text" value={personalInfo.personName.firstName} onChange={EventHandlers.HandleFirstName}/>
                        </label>

                        <label className="last-name-label">
                            <span>Last Name:</span>
                            <input type="text" value={personalInfo.personName.lastName} onChange={EventHandlers.HandleLastName}/>
                        </label>

                        <label className="email-label">
                            <span>Email:</span>
                            <input type="email" value={personalInfo.contactInfo.email} onChange={EventHandlers.HandleEmail}/>
                        </label>

                        <label className="phone-number-label">
                            <span>Phone Number:</span>
                            <input type="tel" value={personalInfo.contactInfo.phoneNumber} onChange={EventHandlers.HandlePhoneNumber}/>
                        </label>
                    </fieldset>

                    <fieldset className='education'>
                        <legend>Education</legend>

                        <label className="school-name-label">
                            <span>School Name:</span>
                            <input type="text" value={educationInfo.schoolInfo.name} onChange={EventHandlers.HandleSchoolName}/>
                        </label>

                        <label className="degree-label">
                            <span>Degree:</span>
                            <input type="text" value={educationInfo.schoolInfo.degree} onChange={EventHandlers.HandleSchoolDegree}/>
                        </label>

                        <label className="school-start-label">
                            <span>Start:</span>
                            <input type="date" value={educationInfo.schooling.start} onChange={EventHandlers.HandleSchoolStart}/>
                        </label>

                        <label className="school-end-label">
                            <span>End:</span>
                            <input type="date" value={educationInfo.schooling.end} onChange={EventHandlers.HandleSchoolEnd}/>
                        </label>
                    </fieldset>

                    <fieldset className='experience'>
                        <legend>Experience</legend>

                        <label className="company-label">
                            <span>Company:</span>
                            <input type="text" value={experienceInfo.companyInfo.name} onChange={EventHandlers.HandleCompanyName}/>
                        </label>

                        <label className="job-title-label">
                            <span>Job Title:</span>
                            <input type="text" value={experienceInfo.companyInfo.job} onChange={EventHandlers.HandleCompanyJob}/>
                        </label>

                        <label className="responsibility-label">
                            <span>Responsibility:</span>
                            <textarea cols="30" rows="10" value={experienceInfo.responsibility} onChange={EventHandlers.HandleResponsibility}></textarea>
                        </label>

                        <label className="job-start-label">
                            <span>Start:</span>
                            <input type="date" value={experienceInfo.jobExperience.start} onChange={EventHandlers.HandleJobStart}/>
                        </label>

                        <label className="job-end-label">
                            <span>End:</span>
                            <input type="date" value={experienceInfo.jobExperience.end} onChange={EventHandlers.HandleJobEnd}/>
                        </label>
                    </fieldset>

                    <div>
                    <button type="submit">Submit</button>
                    <button type="button">Preview</button>
                    </div>
                </form>
            </dialog>
        </div>
    )
}