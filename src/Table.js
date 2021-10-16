import Tick from "./Tick";

function Table() {
  return (
    <div className="container flex flex-wrap pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16">
      <div className="w-full px-0 lg:px-4">
        <h2 className="px-12 text-base font-bold text-center md:text-2xl text-blue-700">
          Choose your plan
        </h2>
        <p className="py-1 text-sm text-center text-blue-700 mb-10">
          or get a quote
        </p>
        <div className="flex flex-wrap items-center justify-center py-4 pt-0">
          <div className="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
            <label className="flex flex-col rounded-lg shadow-lg group relative cursor-pointer hover:shadow-2xl">
              <div className="w-full px-4 py-10 rounded-t-lg card-section-1 bg-blue-100">
                <h3 className="mx-auto text-base font-semibold text-center underline text-blue-500 ">
                  Basic
                </h3>
                <p className="text-3xl font-bold text-center text-blue-500">
                  PKR 1,000
                </p>
                <p className="text-xs text-center uppercase text-blue-500">
                  monthly
                </p>
                <div className="grid gap-y-2 text-blue-500 mt-10 mb-32">
                  <div className="inline-flex">
                    <Tick fill="#699BF7" />
                    <p> Feature 1</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#699BF7" />
                    <p> Feature 2</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#699BF7" />
                    <p> Feature 3</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-blue-500">
                <p className="text-xl text-white">1 month</p>
                <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
                  Get Started
                </button>
              </div>
            </label>
          </div>

          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <label className="flex flex-col rounded-lg shadow-lg relative cursor-pointer hover:shadow-2xl">
              <div className="w-full px-4 py-10 rounded-t-lg bg-blue-500">
                <h3 className="mx-auto text-base font-semibold text-center underline text-white">
                  Premium
                </h3>
                <p className="text-3xl font-bold text-center text-white">
                  PKR 5,000
                </p>
                <p className="text-xs text-center uppercase text-white">
                  monthly
                </p>
                <div className="grid gap-y-2 text-blue-900 mt-10 mb-20">
                  <div className="inline-flex">
                    <Tick fill="#22417B" />
                    <p> Feature 1</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#22417B" />
                    <p> Feature 2</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#22417B" />
                    <p> Feature 3</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#22417B" />
                    <p> Feature 4</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#22417B" />
                    <p> Feature 5</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-blue-700">
                <p className="text-xl text-white">3 months</p>
                <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
                  Save 15%
                </button>
              </div>
            </label>
          </div>

          <div className="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
            <label className="flex flex-col rounded-lg shadow-lg group card-group relative hover:bg-jblue-secondary cursor-pointer hover:shadow-2xl">
              <div className="w-full px-4 py-10 rounded-t-lg card-section-1 bg-blue-100">
                <h3 className="mx-auto text-base font-semibold text-center underline text-blue-500 ">
                  Elite
                </h3>
                <p className="text-3xl font-bold text-center text-blue-500">
                  PKR 18,000
                </p>
                <p className="text-xs text-center uppercase text-blue-500">
                  monthly
                </p>
                <div className="grid gap-y-2 text-blue-500 mt-10">
                  <div className="inline-flex">
                    <Tick fill="#699BF7" />
                    <p> Feature 1</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#699BF7" />
                    <p> Feature 2</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#699BF7" />
                    <p> Feature 3</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#699BF7" />
                    <p> Feature 4</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#699BF7" />
                    <p> Feature 5</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#699BF7" />
                    <p> Feature 6</p>
                  </div>
                  <div className="inline-flex">
                    <Tick fill="#699BF7" />
                    <p> Feature 7</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-blue-500">
                <p className="text-xl text-white">6 months</p>
                <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
                  Save 25%
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
