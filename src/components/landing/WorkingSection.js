import { CardBody, CardImage, Icon, LeadText, Paragraph } from '@material-tailwind/react';
import H4 from "@material-tailwind/react/Heading4";
import H6 from "@material-tailwind/react/Heading6";
import Card from '@material-tailwind/react/Card';
import StatusCard from './StatusCard';
import Teamwork from "../../assets/img/teamwork.jpeg";

export default function WorkingSection(){
    return (
        <section className='pb-20 bg-gray-100 -mt-32'>
            <div className='container max-w-7xl mx-auto px-4'>
                <div className='flex flex-wrap relative z-50'>
                <StatusCard color="red" icon="stars" title="Awarded Agency">
                        Divide details about your product or agency work into
                        parts. A paragraph describing a feature will be enough.
                    </StatusCard>
                    <StatusCard
                        color="lightBlue"
                        icon="autorenew"
                        title="Free Revisions"
                    >
                        Keep you user engaged by providing meaningful
                        information. Remember that by this time, the user is
                        curious.
                    </StatusCard>
                    <StatusCard
                        color="teal"
                        icon="fingerprint"
                        title="Verified Company"
                    >
                        Write a few lines about each one. A paragraph describing
                        a feature will be enough. Keep you user engaged!
                    </StatusCard>
                </div>

                <div className='flex flex-wrap item-center mt-32'>
                <div className='w-full md:w-6/12 mx-auto px-4'>
                    <div className='text-blue-gray-800 mb-6 rounded-full bg-white shadow-lg inline-flex item-center p-4 justify-center w-16 h-16'>
                        <Icon name="people" size="3xl" />
                    </div>
                    <H4 color="gray">Working with us is a pleasure</H4>
                    <LeadText color="blueGray">
                            Don't let your uses guess by attaching tooltips and
                            popoves to any element. Just make sure you enable
                            them first via JavaScript.
                        </LeadText>
                        <LeadText color="blueGray">
                            The kit comes with three pre-built pages to help you
                            get started faster. You can change the text and
                            images and you're good to go. Just make sure you
                            enable them first via JavaScript.
                        </LeadText>
                        <a  href="#pablo"
                            className="font-medium text-light-blue-500 mt-2 inline-block"> Read more</a>

                </div>

                <div className='w-full md:w-4/12 mx-auto px-4 mt-24 lg:mt-0'>
                    <Card>
                        <CardImage src={Teamwork} alt="Card Image"></CardImage>
                        <CardBody>
                        <H6 color="gray">Top Notch Services</H6>
                        <Paragraph color="blueGray">
                        The Arctic Ocean freezes every winter and
                                    much of the sea-ice then thaws every summer,
                                    and that process will continue whatever
                                    happens.

                        </Paragraph>
                    </CardBody>
                    </Card>
                    

                </div>

            </div>
            </div>
        </section>
    );
}