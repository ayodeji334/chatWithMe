import { Stack, Avatar } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import Sidenav from '../components/Sidenav';

function Status() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const handleResize = () => setScreenWidth(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return screenWidth > 900 ? (
        <>
            <Sidenav />
            <div className="status_container">
                <div className="md:w-1/2 w-full bg-white h-full">
                    <div className="w-full h-full">
                        <div className="border-b-1 border-gray-200">
                            <button className="rounded-full bg-black text-white"><BiArrowBack fontSize="20px" /></button>
                            <h6 className="text-black">{" "}Status</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
            <div className="flex items-center overflow-x-auto">
                <Stack isInline={true}>
                    <Avatar size="md" name="Oshigaki Kisame" src="ttps://bit.ly/dan-abramov" />
                    <Avatar size="md" name="Sasuke Uchiha" src="https://bit.ly/broken-link" />
                    <Avatar size="md" name="Fawumi Odunayo" src="https://bit.ly/code-beast" />
                    <Avatar size="md" name="Oshigaki Kisame" src="https://bit.ly/sage-adebayo" />
                    <Avatar size="md" name="Sasuke Uchiha" src="https://bit.ly/code-beast" />
                    <Avatar size="md" name="Fawumi Odunayo" src="https://bit.ly/broken-link" />
                    <Avatar size="md" name="Oshigaki Kisame" src="https://bit.ly/prosper-baba" />
                    <Avatar size="md" name="Sasuke Uchiha" src="https://bit.ly/prosper-baba" />
                    <Avatar size="md" name="Fawumi Odunayo" src="https://bit.ly/broken-link" />
                    <Avatar size="md" name="Oshigaki Kisame" src="https://bit.ly/sage-adebayo" />
                    <Avatar size="md" name="Sasuke Uchiha" src="https://bit.ly/sage-adebayo" />
                    <Avatar size="md" name="Fawumi Odunayo" src="https://bit.ly/code-beast" />
                </Stack>
            </div>
    )
}

export default Status

