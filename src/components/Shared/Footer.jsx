const Footer = () => {
  return (
    <div>
      <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                <img
                  className="h-12 w-12"
                  src="https://i.ibb.co/G2LrT0C/bibimbap.png"
                  alt=""
                />
              </div>
              <span className="self-center text-2xl font-semibold">
              Excess Eats
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-50">Platform</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    How It Works
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-50">Company</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-50">Developers</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Public API
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase dark:text-gray-50">Social media</div>
              <div className="flex justify-start space-x-3"></div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-400">
          <p>
            © 2023 ExcessEats Company Ltd. | Md Shakil Hossain | All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
