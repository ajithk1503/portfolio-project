import { UserData } from "../data/UserData";

function Contact() {
  const { FooterLink } = UserData;
  return (
    <div className="w-full mb-40 lg:mb-4 md:h-screen flex items-center justify-center">
      <div className="flex items-center justify-center flex-col ">
        <h2 className="pt-12 text-center text-3xl lg:text-5xl text-gray-900 tracking-wider pb-6">
          Looking for Opportunities
        </h2>
        <p className="lg:w-[50%] px-2 mx-auto text-sm text-gray-900 pb-6 tracking-wider text-center font-poppins">
          I'd love to connect and explore exciting opportunities with you!
          Whether you have interesting projects, creative ideas, or just want to
          chat, please don't hesitate to reach out. My inbox is open 24/7!
        </p>

        <button  onClick={() => {
          window.open(FooterLink);
        }} className="w-[200px] h-[50px] bg-transparent border-2 border-black hover:bg-gray-900 hover:bg-opacity-40">Connect Now 🚀</button>
      </div>
    </div>
  );
}

export default Contact;
