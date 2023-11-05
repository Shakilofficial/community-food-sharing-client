import contactImg from "../../../assets/images/contactUS.svg";
const Contact = () => {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-10 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Get in Touch
          </h2>
          <h3 className="dark:text-gray-400">We would love to hear from you!</h3>
        </div>
        <img src={contactImg} alt="Contact Doodle" className="" />
      </div>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            className="w-full p-3 rounded dark:bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="youremail@example.com"
            className="w-full p-3 rounded dark:bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Write your message here..."
            className="w-full p-3 rounded dark:bg-gray-800"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Send Message"
          className="w-full p-3 text-sm font-bold tracking-wider uppercase rounded dark:bg-violet-400 dark:text-gray-900"
        />
      </form>
    </div>
  );
};

export default Contact;
