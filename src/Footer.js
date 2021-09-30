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
        <div className="gap-4 flex justify-end ml-auto mt-2">
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
          <a
            className="cursor-pointer hover:text-green-400"
            href="https://api.whatsapp.com/send/?phone=923338886955&text&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.5025 3.48773C18.2466 1.23984 15.2464 0.00126346 12.05 0C5.46393 0 0.103679 5.33464 0.101043 11.8918C0.100165 13.9878 0.650407 16.0338 1.696 17.8373L0.000854492 24L6.33518 22.3463C8.0804 23.2937 10.0454 23.793 12.0452 23.7938H12.0501C18.6355 23.7938 23.9963 18.4585 23.999 11.9013C24.0002 8.72359 22.7585 5.73561 20.5025 3.48773V3.48773ZM12.0501 21.7852H12.0461C10.264 21.7845 8.5161 21.308 6.9913 20.4074L6.62862 20.1932L2.86979 21.1746L3.87311 17.527L3.63694 17.153C2.6428 15.5792 2.11771 13.7602 2.11849 11.8925C2.12067 6.4425 6.57594 2.00857 12.0541 2.00857C14.7067 2.00958 17.2003 3.0391 19.0754 4.90747C20.9505 6.77583 21.9826 9.25933 21.9815 11.9005C21.9793 17.3509 17.5241 21.7852 12.0501 21.7852V21.7852ZM17.4977 14.3822C17.1992 14.2334 15.7313 13.5145 15.4576 13.4154C15.184 13.3162 14.9849 13.2666 14.7859 13.5641C14.5869 13.8616 14.0147 14.5309 13.8405 14.7292C13.6663 14.9276 13.4922 14.9524 13.1936 14.8036C12.8951 14.6549 11.9331 14.3411 10.7927 13.3287C9.90515 12.5409 9.3059 11.5677 9.13175 11.2702C8.9576 10.9727 9.11323 10.8119 9.26269 10.6637C9.39698 10.5306 9.56124 10.3167 9.71053 10.1431C9.85979 9.96962 9.90954 9.84568 10.009 9.64738C10.1086 9.44905 10.0588 9.2755 9.98418 9.12677C9.90954 8.97804 9.31247 7.5154 9.06364 6.92045C8.82132 6.341 8.57516 6.4194 8.3919 6.41033C8.21794 6.40172 8.0187 6.39987 7.81969 6.39987C7.62065 6.39987 7.29721 6.47425 7.02352 6.77171C6.74986 7.06921 5.97861 7.78812 5.97861 9.25072C5.97861 10.7133 7.04841 12.1263 7.1977 12.3246C7.34696 12.523 9.30297 15.5245 12.298 16.8116C13.0103 17.1178 13.5664 17.3006 14 17.4376C14.7153 17.6637 15.3661 17.6318 15.8806 17.5553C16.4542 17.47 17.647 16.8364 17.8958 16.1423C18.1446 15.4482 18.1446 14.8532 18.0699 14.7293C17.9953 14.6053 17.7963 14.5309 17.4977 14.3822"
              />
            </svg>
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            className="cursor-pointer hover:text-blue-400 mt-1"
            rel="noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M20 2.79997C19.2483 3.12606 18.4534 3.34163 17.64 3.43997C18.4982 2.92729 19.1413 2.12075 19.45 1.16997C18.6436 1.65003 17.7608 1.98826 16.84 2.16997C16.2245 1.50254 15.405 1.05826 14.5098 0.906817C13.6147 0.755372 12.6945 0.905324 11.8938 1.33315C11.093 1.76099 10.4569 2.4425 10.0852 3.2708C9.71355 4.09911 9.62729 5.02736 9.84 5.90997C8.20943 5.82749 6.61444 5.40292 5.15865 4.66383C3.70287 3.92474 2.41885 2.88766 1.39 1.61997C1.02914 2.25013 0.839519 2.96379 0.84 3.68997C0.83872 4.36435 1.00422 5.02858 1.32176 5.62353C1.63929 6.21848 2.09902 6.72568 2.66 7.09997C2.00798 7.08223 1.36989 6.90726 0.8 6.58997V6.63997C0.804887 7.58486 1.13599 8.49906 1.73731 9.22793C2.33864 9.9568 3.17326 10.4556 4.1 10.64C3.74326 10.7485 3.37288 10.8058 3 10.81C2.74189 10.807 2.48442 10.7835 2.23 10.74C2.49391 11.5528 3.00462 12.2631 3.69107 12.7721C4.37753 13.2811 5.20558 13.5635 6.06 13.58C4.6172 14.7152 2.83588 15.3348 1 15.34C0.665735 15.3411 0.331736 15.321 0 15.28C1.87443 16.4902 4.05881 17.1327 6.29 17.13C7.82969 17.146 9.35714 16.855 10.7831 16.274C12.2091 15.6931 13.505 14.8338 14.5952 13.7465C15.6854 12.6591 16.548 11.3654 17.1326 9.94087C17.7172 8.51639 18.012 6.98969 18 5.44997C18 5.27996 18 5.09997 18 4.91997C18.7847 4.33478 19.4615 3.61739 20 2.79997V2.79997Z" />
            </svg>
          </a>
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
            href="https://www.instagram.com/livingsolutionspk/"
            target="_blank"
            className="cursor-pointer hover:text-yellow-300 mt-0.5"
            rel="noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.34 3.46C15.1027 3.46 14.8707 3.53038 14.6733 3.66224C14.476 3.79409 14.3222 3.98151 14.2313 4.20078C14.1405 4.42005 14.1168 4.66133 14.1631 4.89411C14.2094 5.12689 14.3236 5.34071 14.4915 5.50853C14.6593 5.67635 14.8731 5.79064 15.1059 5.83694C15.3387 5.88324 15.5799 5.85948 15.7992 5.76866C16.0185 5.67783 16.2059 5.52402 16.3378 5.32668C16.4696 5.12935 16.54 4.89734 16.54 4.66C16.54 4.34174 16.4136 4.03652 16.1885 3.81147C15.9635 3.58643 15.6583 3.46 15.34 3.46V3.46ZM19.94 5.88C19.9206 5.0503 19.7652 4.2294 19.48 3.45C19.2257 2.78313 18.83 2.17928 18.32 1.68C17.8248 1.16743 17.2196 0.774176 16.55 0.53C15.7727 0.236161 14.9508 0.07721 14.12 0.0599999C13.06 -5.58794e-08 12.72 0 10 0C7.28 0 6.94 -5.58794e-08 5.88 0.0599999C5.04915 0.07721 4.22734 0.236161 3.45 0.53C2.78168 0.776649 2.17693 1.16956 1.68 1.68C1.16743 2.17518 0.774176 2.78044 0.53 3.45C0.236161 4.22734 0.07721 5.04915 0.0599999 5.88C-5.58794e-08 6.94 0 7.28 0 10C0 12.72 -5.58794e-08 13.06 0.0599999 14.12C0.07721 14.9508 0.236161 15.7727 0.53 16.55C0.774176 17.2196 1.16743 17.8248 1.68 18.32C2.17693 18.8304 2.78168 19.2234 3.45 19.47C4.22734 19.7638 5.04915 19.9228 5.88 19.94C6.94 20 7.28 20 10 20C12.72 20 13.06 20 14.12 19.94C14.9508 19.9228 15.7727 19.7638 16.55 19.47C17.2196 19.2258 17.8248 18.8326 18.32 18.32C18.8322 17.8226 19.2283 17.2182 19.48 16.55C19.7652 15.7706 19.9206 14.9497 19.94 14.12C19.94 13.06 20 12.72 20 10C20 7.28 20 6.94 19.94 5.88V5.88ZM18.14 14C18.1327 14.6348 18.0178 15.2637 17.8 15.86C17.6403 16.2952 17.3839 16.6884 17.05 17.01C16.7256 17.3405 16.3332 17.5964 15.9 17.76C15.3037 17.9778 14.6748 18.0927 14.04 18.1C13.04 18.15 12.67 18.16 10.04 18.16C7.41 18.16 7.04 18.16 6.04 18.1C5.38089 18.1123 4.72459 18.0109 4.1 17.8C3.68578 17.6281 3.31136 17.3728 3 17.05C2.66809 16.7287 2.41484 16.3352 2.26 15.9C2.01586 15.2952 1.88044 14.6519 1.86 14C1.86 13 1.8 12.63 1.8 10C1.8 7.37 1.8 7 1.86 6C1.86448 5.35106 1.98295 4.70795 2.21 4.1C2.38605 3.67791 2.65626 3.30166 3 3C3.30381 2.65617 3.67929 2.3831 4.1 2.2C4.70955 1.98004 5.352 1.86508 6 1.86C7 1.86 7.37 1.8 10 1.8C12.63 1.8 13 1.8 14 1.86C14.6348 1.86728 15.2637 1.98225 15.86 2.2C16.3144 2.36865 16.7223 2.64285 17.05 3C17.3777 3.30718 17.6338 3.68273 17.8 4.1C18.0223 4.70893 18.1373 5.35178 18.14 6C18.19 7 18.2 7.37 18.2 10C18.2 12.63 18.19 13 18.14 14ZM10 4.87C8.98581 4.87198 7.99496 5.17453 7.15265 5.73942C6.31035 6.30431 5.65438 7.1062 5.26763 8.04375C4.88089 8.98131 4.78072 10.0125 4.97979 11.0069C5.17886 12.0014 5.66824 12.9145 6.38608 13.631C7.10392 14.3474 8.01801 14.835 9.01286 15.0321C10.0077 15.2293 11.0387 15.1271 11.9755 14.7385C12.9123 14.35 13.7129 13.6924 14.2761 12.849C14.8394 12.0056 15.14 11.0142 15.14 10C15.1413 9.3251 15.0092 8.65661 14.7512 8.03296C14.4933 7.40931 14.1146 6.84281 13.6369 6.36605C13.1592 5.88929 12.5919 5.51168 11.9678 5.25493C11.3436 4.99818 10.6749 4.86736 10 4.87V4.87ZM10 13.33C9.34139 13.33 8.69757 13.1347 8.14995 12.7688C7.60234 12.4029 7.17552 11.8828 6.92348 11.2743C6.67144 10.6659 6.6055 9.99631 6.73398 9.35035C6.86247 8.70439 7.17963 8.11104 7.64533 7.64533C8.11104 7.17963 8.70439 6.86247 9.35035 6.73398C9.99631 6.6055 10.6659 6.67144 11.2743 6.92348C11.8828 7.17552 12.4029 7.60234 12.7688 8.14995C13.1347 8.69757 13.33 9.34139 13.33 10C13.33 10.4373 13.2439 10.8703 13.0765 11.2743C12.9092 11.6784 12.6639 12.0454 12.3547 12.3547C12.0454 12.6639 11.6784 12.9092 11.2743 13.0765C10.8703 13.2439 10.4373 13.33 10 13.33V13.33Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/living-solution/"
            target="_blank"
            className="cursor-pointer hover:text-blue-500"
            rel="noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M0 2.78789C0 1.97979 0.270278 1.31313 0.810811 0.787892C1.35134 0.262633 2.05406 1.52588e-05 2.91892 1.52588e-05C3.76835 1.52588e-05 4.45559 0.258584 4.98069 0.775771C5.52123 1.3091 5.79151 2.00403 5.79151 2.86061C5.79151 3.63637 5.52897 4.28282 5.00386 4.8C4.46333 5.33333 3.7529 5.6 2.87259 5.6H2.84942C1.99999 5.6 1.31275 5.33333 0.787645 4.8C0.262541 4.26667 0 3.59596 0 2.78789ZM0.301158 23.9999V7.80605H5.44402V23.9999H0.301158ZM8.29344 23.9999H13.4363V14.9575C13.4363 14.3919 13.4981 13.9555 13.6216 13.6485C13.8378 13.099 14.166 12.6343 14.6062 12.2545C15.0463 11.8747 15.5984 11.6848 16.2625 11.6848C17.9923 11.6848 18.8571 12.905 18.8571 15.3454V23.9999H24V14.7151C24 12.3232 23.4595 10.5091 22.3784 9.27272C21.2973 8.03636 19.8687 7.41818 18.0927 7.41818C16.1004 7.41818 14.5483 8.31514 13.4363 10.1091V10.1576H13.4131L13.4363 10.1091V7.80605H8.29344C8.32432 8.32322 8.33977 9.93128 8.33977 12.6303C8.33977 15.3293 8.32432 19.1191 8.29344 23.9999Z" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
