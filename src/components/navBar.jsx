import monoFaceIcon from "../assets/icons/mono-icon.png";
import instagramIcon from "../assets/icons/instagram-icon.svg";
import discordIcon from "../assets/icons/discord-icon.svg";

function NavBar() {
    return (
            <nav className="w-full px-4 flex justify-between items-center border-t-[10px] border-[#3FA2F6] bg-[#0B2F9F] fixed bottom-0 z-10 lg:relative lg:p-4 lg:border-t-[0px] lg:border-b-[10px] lg:justify-start">
                <div className="order-2 bg-[#071952] h-[4rem] w-[4rem] flex items-center justify-center rounded-full translate-y-[-3.8rem] shadow-[0_-10px_0_8px_#3FA2F6] lg:order-1 lg:translate-y-0 lg:shadow-none">
                    <img src={monoFaceIcon} alt="" aria-hidden="true" width={39} height={50}/>
                </div>
                <a href="https://discord.com/users/1238845147643515062" className="links links--discord lg:order-2 lg:ml-auto lg:mr-8">
                    <img src={discordIcon} alt="" aria-hidden="true" width={24} height={24} />
                    <span className="text-white">discord</span>
                </a>
                <a href="#" className="links links--instagram lg:order-3">
                    <img src={instagramIcon} alt="" aria-hidden="true" width={25} height={20} />
                    <span>instagram</span>
                </a>
            </nav>
    );
}

export default NavBar;