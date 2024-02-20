/* eslint-disable react/prop-types */
import Input from "../Input/Input";

export default function Personal({personalInfo, EventHandlers}) {
    return (
        <fieldset className="information">
            <legend>Information</legend>
            <Input 
                labelName={'First Name:'}
                type={'text'}
                inputName={'firstName'}
                value={personalInfo.personName.firstName}
                onChange={EventHandlers.HandleFirstName}
            />

            <Input 
                labelName={'Last Name:'}
                type={'text'}
                inputName={'lastName'}
                value={personalInfo.personName.lastName}
                onChange={EventHandlers.HandleLastName}
            />

            <Input 
                labelName={'Email:'}
                type={'email'}
                inputName={'email'}
                value={personalInfo.contactInfo.email}
                onChange={EventHandlers.HandleEmail}
            />

            <Input 
                labelName={'Phone Number:'}
                type={'tel'}
                inputName={'phone-number'}
                value={personalInfo.contactInfo.phoneNumber}
                onChange={EventHandlers.HandlePhoneNumber}
            />
        </fieldset>
    )
}