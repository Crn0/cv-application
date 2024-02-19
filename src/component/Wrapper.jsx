/* eslint-disable react/prop-types */
import Header from './Header/Header'
import Form from './Form/Form'
import Page from './Page/Page-content'

export default function Main({
    isOpen, 
    personalInfo, 
    educationInfo, 
    experienceInfo, 
    EventHandlers
}) {
    return (
        <>
            <Header 
                title={'CV Form'}
            />
            <main>
            <Form 
                isOpen={isOpen} 
                personalInfo={personalInfo} 
                educationInfo={educationInfo} 
                experienceInfo={experienceInfo} 
                EventHandlers={EventHandlers}
            />
            {!isOpen && 
                <Page 
                    personalInfo={personalInfo} 
                    educationInfo={educationInfo} 
                    experienceInfo={experienceInfo} 
                    EventHandlers={EventHandlers}
                />
            }
        </main>
        </>
    )
}