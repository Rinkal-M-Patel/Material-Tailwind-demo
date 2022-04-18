
import DefaultNavbar from '../components/DefaultNavbar';
import Header from '../components/landing/Header';

export default function Profile(){
    return(
            <>
            <div className='absolute w-full z-20'>
                <DefaultNavbar />
            </div>
            <main>
                <Header />
            </main>
            </>
    );
}