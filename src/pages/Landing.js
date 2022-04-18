import DefaultFooter from '../components/DefaultFooter';
import DefaultNavbar from '../components/DefaultNavbar';
import ContactSection from '../components/landing/ContactSection';
import Header from '../components/landing/Header';
import TeamSection from '../components/landing/TeamSection';
import WorkingSection from '../components/landing/WorkingSection';

export default function Landing(){
    return(
        <>
            <div className='absolute w-full z-20'>
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <WorkingSection />
                <TeamSection />
                <ContactSection />
            </main>
            <DefaultFooter />
        </>
        
    );
}