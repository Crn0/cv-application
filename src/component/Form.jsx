/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// onSubmit={}
export default function Form({isOpen, personalInfo, educationInfo, experienceInfo, EventHandlers}) {
    const hide = isOpen ? 'hide' : undefined

    return (
        <>
            <dialog open={isOpen}>
                <form onSubmit={EventHandlers.HandleSubmit}>
                    <fieldset className='information'>
                        <legend>Information</legend>

                        <label className="first-name">
                            <span>First Name:</span>
                            <input type="text" value={personalInfo.personName.firstName} onChange={EventHandlers.HandleFirstName}/>
                        </label>

                        <label className="last-name">
                            <span>Last Name:</span>
                            <input type="text" value={personalInfo.personName.lastName} onChange={EventHandlers.HandleLastName}/>
                        </label>

                        <label className="email">
                            <span>Email:</span>
                            <input type="email" value={personalInfo.contactInfo.email} onChange={EventHandlers.HandleEmail}/>
                        </label>

                        <label className="phone-number">
                            <span>Phone Number:</span>
                            <input type="tel" value={personalInfo.contactInfo.phoneNumber} onChange={EventHandlers.HandlePhoneNumber}/>
                        </label>
                    </fieldset>

                    <fieldset className='education'>
                        <legend>Education</legend>

                        <label className="school-name">
                            <span>School Name:</span>
                            <input type="text" value={educationInfo.schoolInfo.name} onChange={EventHandlers.HandleSchoolName}/>
                        </label>

                        <label className="degree">
                            <span>Degree:</span>
                            <input type="text" value={educationInfo.schoolInfo.degree} onChange={EventHandlers.HandleSchoolDegree}/>
                        </label>

                        <label className="school-start">
                            <span>Start:</span>
                            <input type="date" value={educationInfo.schooling.start} onChange={EventHandlers.HandleSchoolStart}/>
                        </label>

                        <label className="school-end">
                            <span>End:</span>
                            <input type="date" value={educationInfo.schooling.end} onChange={EventHandlers.HandleSchoolEnd}/>
                        </label>
                    </fieldset>

                    <fieldset className='experience'>
                        <legend>Experience</legend>

                        <label className="company">
                            <span>Company:</span>
                            <input type="text" value={experienceInfo.companyInfo.name} onChange={EventHandlers.HandleCompanyName}/>
                        </label>

                        <label className="job-title">
                            <span>Job Title:</span>
                            <input type="text" value={experienceInfo.companyInfo.job} onChange={EventHandlers.HandleCompanyJob}/>
                        </label>

                        <label className="responsibility">
                            <span>Responsibility:</span>
                            <textarea cols="30" rows="10" value={experienceInfo.responsibility} onChange={EventHandlers.HandleResponsibility}></textarea>
                        </label>

                        <label className="job-start">
                            <span>Start:</span>
                            <input type="date" value={experienceInfo.jobExperience.start} onChange={EventHandlers.HandleJobStart}/>
                        </label>

                        <label className="job-end">
                            <span>End:</span>
                            <input type="date" value={experienceInfo.jobExperience.end} onChange={EventHandlers.HandleJobEnd}/>
                        </label>
                    </fieldset>

                    <button type="submit">Submit</button>
                </form>
            </dialog>

            <button className={hide} type="button" onClick={EventHandlers.HandleEdit}>Edit</button>
        </>
    )
}