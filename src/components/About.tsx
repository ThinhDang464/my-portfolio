"use client";

export function About() {
  return (
    <section className="flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-12">
      <div className="relative rounded-xl p-6 sm:p-8 md:p-12 max-w-8xl w-full bg-black/40 ">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Grab My Resume
          </h2>
        </div>
        {/*Resume*/}
        <div className="flex flex-col md:flex-row gap-10 lg:gap-12 justify-center items-center">
          {/*Page 1*/}
          <div className="max-w-md">
            <img
              src="/Page1.jpg"
              alt="Resume Page 1"
              className="rounded-lg w-full h-auto"
            />
          </div>
          {/*Page 2*/}
          <div className="max-w-md">
            <img
              src="/Page2.jpg"
              alt="Resume Page 1"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8 lg:mt-12">
          <a
            href="/Tom-Soft-Resume.pdf"
            download="Tom_Dang_Resume.pdf"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25" //flex takes fullwidth -> long button inline wrap content only
          >
            Download Resume
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
