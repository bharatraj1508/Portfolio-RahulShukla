const Contact = () => {
  return (
    <div id="contact" className="w-full mt-32 md:mt-40">
      <div className="flex flex-col p-4 justify-center max-w-lg mx-auto">
        <div className="flex items-center justify-center my-8">
          <div className="border-t border-gray-300 w-1/4"></div>
          <p className="mx-4 text-gray-500">— Contact Me —</p>
          <div className="border-t border-gray-300 w-1/4"></div>
        </div>
        <div className="pb-8">
          {/* <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p> */}
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/7ebcf5ce-f898-402b-8e44-afa20bfee63c"
            method="POST"
            className="flex flex-col w-full md:w-full">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md
                 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md
                 focus:outline-none"
            />

            <textarea
              name="message"
              rows={10}
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"></textarea>

            <button className="text-white bg-gradient-to-r from-purple-400 to-purple-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
