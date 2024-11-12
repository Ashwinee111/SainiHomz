import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

import { contactApi } from "../../Services/api";

const { CREATE_CONTACT } = contactApi;

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(CREATE_CONTACT, data);
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred while submitting the form.",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label className="font-semibold block mb-2">Name*</label>
            <input
              type="text"
              placeholder="Mimosic John"
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 rounded-lg bg-gray-100 outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="font-semibold block mb-2">Email*</label>
            <input
              type="email"
              placeholder="your@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Enter a valid email",
                },
              })}
              className="w-full p-3 rounded-lg bg-gray-100  outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Desired Date Field */}
          <div className="relative">
            <label className="font-semibold block mb-2">Desired Date*</label>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className="w-full p-3 rounded-lg bg-gray-100 outline-none pr-10"
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )}
          </div>

          {/* Desired Time Field */}
          <div className="relative">
            <label className="font-semibold block mb-2">Desired Time</label>
            <input
              type="time"
              {...register("time")}
              className="w-full p-3 rounded-lg bg-gray-100  outline-none pr-10"
            />
          </div>
        </div>

        {/* Additional Message Field */}
        <div>
          <label className="font-semibold block mb-2">Additional Message</label>
          <textarea
            placeholder="Please write any note here..."
            {...register("message")}
            className="w-full p-3 rounded-lg bg-gray-100  outline-none h-32 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-[#cbf7c8] hover:text-primary transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
