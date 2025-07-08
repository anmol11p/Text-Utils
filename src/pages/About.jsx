import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import getBgClass from "../helper/BgClass";
import aboutsection from "../helper/aboutsection.json";
const About = () => {
  const { mode } = useContext(UserContext);
  const [visibleText, setVisibleSection] = useState(null);
  const toggleSection = (section) => {
    setVisibleSection((prev) => (prev === section ? null : section));
  };

  return (
    <>
      <div
        className={` ${getBgClass(
          mode
        )} about-section min-h-screen flex items-center justify-center px-4 py-10`}
      >
        <div
          className={`p-6  shadow-2xl max-w-2xl  rounded-sm
         w-full space-y-6  transition-all duration-200 `}
        >
          <h2 className="text-3xl font-bold text-center">About Us</h2>
          {aboutsection.map((item) => {
            return (
              <div
                className="border-1 border-gray-200 px-5 py-2 cursor-pointer rounded-sm"
                onClick={() => toggleSection(item.id)}
                Key={item.id}
              >
                <button className="text-xl font-semibold mb-2">
                  {item.title}
                </button>

                {visibleText === item.id && (
                  <p
                    className={`${
                      mode !== "light" && "text-white"
                    } text-gray-700 leading-relaxed`}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
