import H6 from "@material-tailwind/react/Heading6";
import { Button, Icon, Image, Paragraph } from "@material-tailwind/react";


export default function TeamCard({img,name,position}){
    return(
        <div className="w-full lg:w-3/12 md:4-6/12 mb-12 px-4 lg:mb-0">
            <div className="px-6 ">
                <Image src={img} alt={name} raised/>
                <div className="pt-6 text-center">
                    <H6 color="Gray">{name}</H6>
                    <Paragraph color="blueGray">{position}</Paragraph>
                    <div className="flex items-center justify-center">
                        <Button
                            color="lightBlue"
                            buttonType="link"
                            ripple="dark"
                            rounded
                            iconOnly
                        >
                            <Icon
                                family="font-awesome"
                                name="fab fa-twitter"
                                size="lg"
                            />
                        </Button>
                        <Button
                            color="blue"
                            buttonType="link"
                            ripple="dark"
                            rounded
                            iconOnly
                        >
                            <Icon
                                family="font-awesome"
                                name="fab fa-facebook-f"
                                size="lg"
                            />
                        </Button>
                        <Button
                            color="pink"
                            buttonType="link"
                            ripple="dark"
                            rounded
                            iconOnly
                        >
                            <Icon
                                family="font-awesome"
                                name="fab fa-dribbble"
                                size="lg"
                            />
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}