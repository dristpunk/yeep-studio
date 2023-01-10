import logo from "../public/yeep-logo.svg";
import Image from "next/image";

import {
    AiOutlineTwitter,
    AiOutlineInstagram,
    AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
    return (
        <div className="h-1/5 mt-auto">
            <div className="h-1/3">
                <Image
                    src={logo}
                    alt={"yeep studio logo"}
                    width={45}
                    height={45}
                />
            </div>
            <div className=" h-1/3 flex items-center font-mono">
                <p>Author: dristpunk.eth</p>
            </div>
            <div className="flex h-1/3 items-top gap-10">
                <AiOutlineTwitter size={25} />
                <AiOutlineInstagram size={25} />
                <AiFillGithub size={25} />
            </div>
        </div>
    );
};

export default Footer;
