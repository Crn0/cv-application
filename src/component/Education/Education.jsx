/* eslint-disable react/prop-types */
import Input from "../Input/Input"

export default function Education({educationInfo, EventHandlers}) {
    return (
        <fieldset className="education">
            <legend>Education</legend>
            <Input 
                labelName={'School Name:'}
                type={'text'}
                inputName={'schoolName'}
                value={educationInfo.schoolInfo.name}
                onChange={EventHandlers.HandleSchoolName}
            />

            <Input 
                labelName={'Degree:'}
                type={'text'}
                inputName={'degree'}
                value={educationInfo.schoolInfo.degree}
                onChange={EventHandlers.HandleSchoolDegree}
            />

            <Input 
                labelName={'Start:'}
                type={'date'}
                inputName={'schoolStart'}
                value={educationInfo.schooling.start}
                onChange={EventHandlers.HandleSchoolStart}
            />

            <Input 
                labelName={'End:'}
                type={'date'}
                inputName={'schoolEnd'}
                value={educationInfo.schooling.end}
                onChange={EventHandlers.HandleSchoolEnd}
            />
        </fieldset>
    )
}