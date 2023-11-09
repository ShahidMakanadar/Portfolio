import React, { useState } from "react";
import { motion } from "framer-motion";
//alert and loading imports
import PulseLoader from "react-spinners/PulseLoader";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmail = async () => {
    if (!name || !email || !subject || !message) {
      setEmpty(true);
      return false;
    } else {
      try {
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (pattern.test(email)) {
          setLoading(true);
          let result = await fetch(
            "https://portfolio-back-end-seven.vercel.app/sendEmail",
            {
              method: "post",
              body: JSON.stringify({ name, email, subject, message }),
              // mode: 'no-cors',
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          // result = await result.json()

          if (result) {
            setLoading(false);
            setEmail("");
            setMessage("");
            // successfull alert box
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });
            Toast.fire({
              icon: "success",
              title: " Message sent successfully ",
            });
          } else {
            setEmail("");
            setLoading(false);
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });
            Toast.fire({
              icon: "error",
              title: " Something is wrong...! ",
            });
          }
        } else {
          setEmail("");
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "error",
            title: " Email-Id is not valid ",
          });
        }
      } catch {
        setEmail("");
        setLoading(false);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "error",
          title: " please try again leter! ",
        });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col relative mt-10 text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-x-hidden"
    >
      <h5 className="absolute md:top-20  top-12 font-bold uppercase tracking-[20px] text-[#f7ff8a] z-10">
        Contact
      </h5>

      <div className="relative flex flex-col w-full justify-center items-center">
        {/* <br></br> */}
        {/* <h4 className="text-lg mb-2 text-teal-50">
          Let's craft excellence, together!
        </h4> */}
        {/* <p className="text-base max-w-lg text-center text-teal-50">
          If you're seeking to build exceptional projects or explore new
          horizons. Let's connect and make your vision a reality.
        </p> */}
        <div className="flex justify-center flex-col items-center mt-5 w-fit">
          <form className="flex flex-col space-y-2 mx-auto">
            <div className="flex space-x-2  ">
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                placeholder="Name"
                className="p-2 rounded-lg text-black outline-none text-base bg-[#E8F0FE] w-1/2"
                type="text"
              />

              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder="Email"
                className="p-2 rounded-lg text-black outline-none text-base bg-[#E8F0FE] w-1/2"
                type="email"
              />
            </div>
            {/* {empty && !name && <span className=" text-sm text-white font-semibold tracking-[2px] bg-red-400 bg-opacity-50 px-5 rounded-[4px] text-center">Please enter name !</span> }
            {empty && !email && <span className=" text-sm text-white font-semibold tracking-[2px] bg-red-400 bg-opacity-50 px-5 rounded-[4px] text-center">Please enter email !</span>} */}
            <input
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              value={subject}
              placeholder="Subject"
              className="p-2 rounded-lg text-black outline-none text-base bg-[#E8F0FE]"
              type="text"
            />
            {/* {empty && !subject && <span className=" text-sm text-white bg-red-400 font-semibold tracking-[2px] bg-opacity-50 px-5 rounded-[4px] text-center">Please fill subject !</span>} */}
            <textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              placeholder="Message"
              className="p-2 rounded-lg text-black outline-none text-base bg-[#E8F0FE]"
              rows={5}
            ></textarea>
            {empty && (
              <span className=" text-sm text-white bg-red-400 bg-opacity-50 px-5 font-semibold tracking-[2px] rounded-[4px] text-center">
                Please fill all block's !
              </span>
            )}
            {loading ? (
              <button
                type="button"
                className="bg-[#f7ff8a] hover:bg-[#d9de9b] py-2 px-[45%]  rounded-md"
              >
                <PulseLoader
                  color={"#000000"}
                  loading={loading}
                  size={5}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </button>
            ) : (
              <button
                type="button"
                className="bg-[#f7ff8a] hover:bg-[#d1d691] py-2 px-10 rounded-md text-black font-bold text-lg"
                onClick={handleEmail}
              >
                Submit
              </button>
            )}
          </form>
          <br></br>
          <h4>
            {" "}
            <span className=" text-yellow-300">E-mail : </span>{" "}
            shahidmakandar2000@gmail.com
          </h4>
          <h4>
            {" "}
            <span className=" text-yellow-300">Mobile-num : </span> 6361548398
          </h4>
          <br></br>
        </div>
      </div>
    </motion.div>
  );
};
export default Contact;
