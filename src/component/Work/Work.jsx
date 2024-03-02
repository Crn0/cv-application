/* eslint-disable react/prop-types */
import Input from "../Input/Input";
import TextArea from "../Textarea/Text-area";

export default function Work({experienceInfo, EventHandlers}) {
    return (
        <fieldset className="experience">
            <legend>Experience</legend>

            <Input 
                labelName={'Company:'}
                type={'text'}
                inputName={'company'}
                value={experienceInfo.companyInfo.name}
                onChange={EventHandlers.HandleCompanyName}
            />

            <Input 
                labelName={'Job Title:'}
                type={'text'}
                inputName={'job-title'}
                value={experienceInfo.companyInfo.job}
                onChange={EventHandlers.HandleCompanyJob}
            />

            <TextArea 
                labelName={'Responsibility:'}
                textAreaName={'responsibility'}
                value={experienceInfo.responsibility}
                onChange={EventHandlers.HandleResponsibility}
            />


            <Input 
                labelName={'Start:'}
                type={'date'}
                inputName={'job-start'}
                value={experienceInfo.jobExperience.end}
                onChange={EventHandlers.HandleJobEnd}
            />

            <Input 
                labelName={'end:'}
                type={'date'}
                inputName={'job-end'}
                value={experienceInfo.jobExperience.start}
                onChange={EventHandlers.HandleJobStart}
            />
        </fieldset>
    )
}