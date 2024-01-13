import React from "react";
import mobileLogin from "../assets/mobileLogin.png";

const Products = () => {
  return (
    <div id="product">
      {/* Product text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div
          className="md:w-11/12 mx-auto flex flex-col md:flex-row
    justify-between items-center gap-12"
        >
          <div>
            <img src={mobileLogin} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Why customers love the products of Infusion
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              We are a modern, trailblazing company with a three-year legacy,
              stands at the intersection of technology and photography. Since
              our establishment, we have artfully navigated the realms of
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
          <div className="md:w-1/3">
            <img src="/src/assets/tesla.png" alt="" />
          </div>

          {/* stats */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-6">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                John Doe
              </h5>
              <p className="text-base text-neutralGrey mb-8">
                Indian Cruise Ship Association
              </p>
              <div>
                <div className="flex items-center gap-8 flex-wrap">
                  <img
                    src="/src/assets/company1.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/company2.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/company3.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/company4.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/company5.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/company6.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <div className="flex items-center gap-8">
                    <a
                      href="/"
                      className="font-bold text-brandPrimary hover:text-neutral-700"
                    >
                      Meet all customers
                      <img
                        src="/src/assets/icons/right.svg"
                        alt=""
                        className="inline-block ml-2"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
