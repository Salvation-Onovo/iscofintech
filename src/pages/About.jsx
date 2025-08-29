import { BsDashLg } from "react-icons/bs";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <>
      <NavBar />

      <div className="mt-28 mb-16 mx-20">
        <div className="p-4">
          <sub className="flex items-center text-blue-950 text-sm font-semibold"><BsDashLg />ABOUT ISCOFINTECH<BsDashLg /></sub>
        </div>

        <div>
          <img
            // className="h-auto"
            src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="h-80 w-[2000px]"
            alt=""
          />
        </div>

        <div className="p-4">
          <p className="text-blue-950 font-medium text-2xl p-2">
            VESTIBULUM A SAPIEN MAURIS. LOREM IPSUM DOLOR SIT AMET, CONSECTETUR
            ADIPISCING ELIT.
          </p>

          <div className="flex justify-between mt-2">
            <div className="text-lg">
              <p>
                Curabitur condimentum faucibus lorem, sollicitudin aliquet purus
                porta non. Sed sed faucibus nisi, at lobortis massa. Curabitur
                vel lectus et justo mattis dictum quis sed neque. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae; Phasellus dapibus, augue at egestas scelerisque,
                mi lorem vehicula eros, ut cursus dui purus rhoncus sapien.
                Vestibulum sit amet eros quam. Cras bibendum volutpat
                vestibulum.
              </p>

              <p className="mt-2">
                Phasellus tincidunt est mi. Nunc euismod posuere diam ac
                commodo. Duis pulvinar volutpat ipsum, sit amet mattis ex
                aliquet vitae. Donec felis purus, laoreet ac molestie non,
                porttitor nec dui. Vivamus consequat hendrerit metus, vitae
                aliquam nulla dapibus ut. Suspendisse id convallis risus. Fusce
                hendrerit quis purus vitae aliquet.
              </p>

              <p>
                Curabitur condimentum faucibus lorem, sollicitudin aliquet purus
                porta non. Sed sed faucibus nisi, at lobortis massa. Curabitur
                vel lectus et justo mattis dictum quis sed neque. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae; Phasellus dapibus, augue at egestas scelerisque,
                mi lorem vehicula eros, ut cursus dui purus rhoncus sapien.
                Vestibulum sit amet eros quam. Cras bibendum volutpat
                vestibulum.
              </p>
              
              <p className="mt-2">
                Phasellus tincidunt est mi. Nunc euismod posuere diam ac
                commodo. Duis pulvinar volutpat ipsum, sit amet mattis ex
                aliquet vitae. Donec felis purus, laoreet ac molestie non,
                porttitor nec dui. Vivamus consequat hendrerit metus, vitae
                aliquam nulla dapibus ut. Suspendisse id convallis risus. Fusce
                hendrerit quis purus vitae aliquet.
              </p>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
