import React from "react";
import aboutImg from "/static/about.png";

const About = () => {
  return (
    <div id="about">
      {/* About text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div
          className="md:w-11/12 mx-auto flex flex-col md:flex-row
        justify-between items-center gap-12"
        >
          <div>
            <img src={aboutImg} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              The unreal experience of spending three years at Infusion
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Infusion, a trailblazing company with a three-year legacy, stands
              at the intersection of technology and photography. Since our
              establishment, we have artfully navigated the realms of
              innovation, emerging as a prominent player in both industries.
              Specializing in cutting-edge tech solutions, we have catered to
              diverse client needs, offering services that propel businesses
              forward.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Helping a local <br />
              <span className="text-brandPrimary">
                {" "}
                business reinvent itself
              </span>
            </h2>
            <p>We reached here with our hardwork and dedication</p>
          </div>

          {/* stats */}
          <div
            className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center 
          justify-around gap-12"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/static/icons/members.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    3,326,471
                  </h4>
                  <p>Members Served</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/static/icons/clubs.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    53,567
                  </h4>
                  <p>Clubs Involved</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/static/icons/event.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    1,243,834
                  </h4>
                  <p>Event Bookings</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/static/icons/payment.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,349,967
                  </h4>
                  <p>Payments Made</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
