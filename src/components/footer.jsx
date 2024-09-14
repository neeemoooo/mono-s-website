import footerMonoImage from "../assets/images/mono-footer.png";
import footerQueenImage from "../assets/images/queen-footer.png";
import discordIcon from "../assets/icons/discord-icon.svg";

function Footer() {
    return (
        <footer className="min-h-[100vh] bg-[#012244] overflow-hidden mb-11 lg:mb-0">
            <img src={footerMonoImage} alt="" aria-hidden="true" className="translate-y-[-20%]" />
            <p className="p-8 text-xl text-center font-extrabold text-white">Thanks for checking out the project! i hope you have as much fun exploring it as i did creating it. If you’re interested in joining us for future projects or just want to hang out, feel free to join our Discord server.
            This project was part of a developing jam where the members built a website dedicated to another member. We’d love to have you join us next time!</p>
            <div className="mx-auto flex items-center justify-center relative w-max">
                <a href="https://discord.gg/eUpMBCjgsu" className="links links--discord absolute top-[6%] left-[-60%]">
                    <img src={discordIcon} alt="" aria-hidden="true" />
                    discord
                </a>
                <img src={footerQueenImage} alt="" aria-hidden="true" />
            </div>
        </footer>        
    );
}

export default Footer;