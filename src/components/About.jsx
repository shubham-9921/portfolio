import about from "../assets/about.jpg";
const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12 mt-20" id="about">
      <div className="mt-14 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
        <div className="my-auto mx-6">
          <h2 className="text-4xl font-bold mb-4 primary-color "> About Me </h2>
          <p className="text-base lg:text-lg ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            in illum ipsa tempora nihil neque aspernatur voluptatibus maxime
            maiores necessitatibus.
          </p>
        </div>

        <img
          className="mx-auto rounded-3xl py-8  md:py-0"
          src={about}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
