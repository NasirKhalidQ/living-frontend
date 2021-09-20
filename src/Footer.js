function Footer() {
  return (
    <>
      <footer className="footer p-4 bg-living-header text-white flex border-white border-t-2">
        <div className="flex">
          <img
            className="mx-2 sm:col-auto"
            src="./imgs/logo-small.svg"
            width="20"
            height="20"
            alt="logo"
          />
          <div className="grid grid-rows-2 grid-flow-col text-xs md:text-sm">
            <div className="">Living Solutions. </div>
            <div className="">Copyright © 2021.</div>
          </div>
        </div>
        <div className="gap-4 flex justify-end ml-auto">
          <a
            href="https://www.youtube.com/channel/UCLF-FxK_37E3CImuzdTJ64g"
            target="_blank"
            className="cursor-pointer hover:text-living-red"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a
            className="cursor-pointer hover:text-blue-500"
            href="https://www.facebook.com/livingsolutionpk"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
