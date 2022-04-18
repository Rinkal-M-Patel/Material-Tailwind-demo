import Title from "./Title";
import ContactCard from "./ContactCard";
import Form from "./Form";

export default function ContactSection(){
    return(
        <section className="bg-gray-100 relative block pb-20">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
                <Title heading="Bulding Something">
                Put the potentially record low maximum sea ice extent tihs
                    year down to low ice. According to the National Oceanic and
                    Atmospheric Administration, Ted, Scambos.
                </Title>

                <div className="flex flex-wrap justify-center">
                    <ContactCard icon="stars" title="Excelent Services">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </ContactCard>
                    <ContactCard icon="insert_chart" title="Grow Your Market">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </ContactCard>
                    <ContactCard icon="launch" title="Launch Time">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </ContactCard>
                </div>

                <Form />

            </div>

        </section>
    )
}