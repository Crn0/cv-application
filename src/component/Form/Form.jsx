/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Personal from '../Personal/Personal'
import Education from '../Education/Education'
import Work from '../Work/Work'

// onSubmit={}
export default function Form({isOpen, personalInfo, educationInfo, experienceInfo, EventHandlers}) {

    return (
        <div className="form-container">
            <dialog open={isOpen}>
                <form onSubmit={EventHandlers.HandleSubmit}>
                    <Personal 
                        personalInfo={personalInfo}
                        EventHandlers={EventHandlers}
                    />

                    <Education 
                        educationInfo={educationInfo}
                        EventHandlers={EventHandlers}
                    />

                    <Work 
                        experienceInfo={experienceInfo}
                        EventHandlers={EventHandlers}
                    />

                    <button type="submit">Submit</button>
                </form>
            </dialog>
        </div>
    )
}