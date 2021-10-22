import Tick from "./Tick";

function Table() {
  return (
    <div className="container flex flex-wrap pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16">
      <div className="w-full px-0 lg:px-4">
        <h2 className="px-12 font-bold text-center text-xl md:text-2xl text-living-red">
          Choose your plan
        </h2>
        <p className="py-1 text-sm text-center text-living-red mb-10">
          or get a quote
        </p>
        <div className="flex flex-wrap items-center justify-center py-4 pt-0">
          <div className="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
            <label className="flex flex-col rounded-lg shadow-lg group relative cursor-pointer hover:shadow-2xl">
              <div className="w-full px-4 py-10 rounded-t-lg card-section-1 bg-red-100">
                <h3 className="mx-auto text-base font-semibold text-center underline text-living-header">
                  Bronze
                </h3>
                <p className="text-3xl font-bold text-center text-living-header">
                  PKR 30,000
                </p>
                <p className="text-xs text-center uppercase text-living-header">
                  monthly
                </p>
                <div className="grid gap-y-2 text-living-header mt-10 mb-72">
                  <div className="inline-flex">
                    <Tick fill="#EF4444" />
                    <p> Logo design--1 option</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#EF4444" />
                    <p> Post Design</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#EF4444" />
                    <p> Daily posting(Fb,Insta, Twitter)</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-red-500">
                <p className="text-xl text-white">1 month</p>
                <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-red-500">
                  Get Started
                </button>
              </div>
            </label>
          </div>

          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <label className="flex flex-col rounded-lg shadow-lg relative cursor-pointer hover:shadow-2xl">
              <div className="w-full px-4 pt-10 rounded-t-lg bg-red-400">
                <h3 className="mx-auto text-base font-semibold text-center underline text-white">
                  Silver
                </h3>
                <p className="text-3xl font-bold text-center text-white">
                  PKR 60,000
                </p>
                <p className="text-xs text-center uppercase text-white">
                  monthly
                </p>
                <div className="grid gap-y-2 text-living-header mt-10 mb-48">
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p>Logo design--2 options</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p>Annual Audience Reach(Fb, Insta)--200k</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p> Videos(Fb, Insta, Twitter)--once</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p> Content Management</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p> Google Business Listing</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p> Google Website Audit report</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p> 24/7 Based Support Daily Boosts--200PKR</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p> Marketing Research</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-red-700">
                <p className="text-xl text-white">3 months</p>
                <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-red-500">
                  Save 15%
                </button>
              </div>
            </label>
          </div>

          <div className="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
            <label className="flex flex-col rounded-lg shadow-lg group card-group relative hover:bg-jblue-secondary cursor-pointer hover:shadow-2xl">
              <div className="w-full px-4 py-10 rounded-t-lg card-section-1 bg-red-100">
                <h3 className="mx-auto text-base font-semibold text-center underline text-living-header ">
                  Gold
                </h3>
                <p className="text-3xl font-bold text-center text-living-header">
                  PKR 85,000
                </p>
                <p className="text-xs text-center uppercase text-living-header">
                  monthly
                </p>
                <div className="grid gap-y-2 text-living-header my-10">
                  <div className="inline-flex">
                    <Tick fill="#EF4444" />
                    <p> Logo design--3 options</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#EF4444" />
                    <p>Annual Audience Reach(Fb, Insta)--300k</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#EF4444" />
                    <p> Videos(Fb, Insta, Twitter)--monthly</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#EF4444" />
                    <p> Youtube Channel Creation</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#EF4444" />
                    <p> 24/7 Based Support Daily Boosts--300PKR</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#EF4444" />
                    <p>
                      Website development--available with annual contract only
                    </p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p> Marketing Research</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-red-500">
                <p className="text-xl text-white">6 months</p>
                <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-red-500">
                  Save 25%
                </button>
              </div>
            </label>
          </div>

          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <label className="flex flex-col rounded-lg shadow-lg relative cursor-pointer hover:shadow-2xl">
              <div className="w-full px-4 pt-10 rounded-t-lg bg-red-400">
                <h3 className="mx-auto text-base font-semibold text-center underline text-white">
                  Platinum
                </h3>
                <p className="text-3xl font-bold text-center text-white">
                  PKR 125,000
                </p>
                <p className="text-xs text-center uppercase text-white">
                  monthly
                </p>
                <div className="grid gap-y-2 text-living-header my-10">
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p>Logo design--Unlimited</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p>Annual Audience Reach(Fb, Insta)--400k</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p> Videos(Fb, Insta, Twitter)--weekly</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p> Content Management--Specialized</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p> Google Business Listing--SEO</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p>Youtube Channel Management</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p>Youtube Video Creation and Posting</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p> 24/7 Based Support Daily Boosts--500PKR</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p> Website Development--included</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#B91C1C" />
                    <p> Marketing Research</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-red-700">
                <p className="text-xl text-white">3 months</p>
                <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-red-500">
                  Save 15%
                </button>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
