import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

import { propertyApi } from "../../Services/api";

const { POST_PROPERTYDATA } = propertyApi;

const PropertyForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Process the amenities input to create an array
    const amenitiesArray = data.amenities.split(",").map((item) => item.trim());

    // Create the final data object to send to the API
    const propertyData = {
      ...data,
      amenities: amenitiesArray, // Update the amenities field to be an array
    };

    try {
      const response = await axios.post(POST_PROPERTYDATA, propertyData);

      if (response.status === 201) {
        toast.success("Property submitted successfully!");
      } else {
        toast.error("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error submitting property:", error);
      if (error.response && error.response.data) {
        toast.error(`Error: ${error.response.data.error}`);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg font-primary">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center my-5">Submit Property</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Title */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            {...register("title", { required: "Title is required" })}
            placeholder="Enter property title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Enter property description"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            {...register("price", {
              required: "Price is required",
              pattern: {
                value: /^\d+(\.\d{1,2})?\sCr(\s-\s\d+(\.\d{1,2})?\sCr)?$/,
                message:
                  "Enter a valid price (e.g., 2.25 Cr or 2.25 Cr - 3.00 Cr)",
              },
              onChange: (e) => {
                e.target.value = e.target.value
                  .replace(/[^0-9.\-\sCr]/g, "")
                  .replace(/\s+/g, " ");
              },
            })}
            placeholder="Enter price (e.g., 2.25 Cr or 2.25 Cr - 3.00 Cr)"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Location
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            {...register("location", { required: "Location is required" })}
          >
            {[
              "Tamando",
              "Chandrasekharpur",
              "Patia",
              "Nayapalli",
              "Saheed Nagar",
              "Balianta",
              "Patrapada",
              "Kalinga Nagar",
              "Khand agiri",
              "Rasulgarh",
              "Sailashree Vihar",
              "Sundarpada",
              "IRC Village",
              "Jaydev Vihar",
              "Niladri Vihar",
              "Pahala",
              "Phulnakhara",
              "Madanpur",
            ].map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location.message}
            </p>
          )}
        </div>

        {/* Property Type */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Property Type
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            {...register("property_type", {
              required: "Property Type is required",
            })}
          >
            {[
              "Apartments",
              "Villas",
              "Luxury Homes",
              "Branded Residences",
              "Plot",
            ].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.property_type && (
            <p className="text-red-500 text-sm mt-1">
              {errors.property_type.message}
            </p>
          )}
        </div>

        {/* Configuration */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Configuration
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            {...register("configuration", {
              required: "Configuration is required",
            })}
            placeholder="Enter configuration"
          />
          {errors.configuration && (
            <p className="text-red-500 text-sm mt-1">
              {errors.configuration.message}
            </p>
          )}
        </div>

        {/* Carpet Area */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Carpet Area
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            {...register("carpet_area", {
              required: "Carpet area is required",
              pattern: {
                value: /^\d+(\s*-\s*\d+)?$/,
                message:
                  "Enter a valid carpet area (e.g., 1950 or 1000 - 2000)",
              },
              onChange: (e) => {
                e.target.value = e.target.value
                  .replace(/[^0-9\s-]/g, "")
                  .replace(/\s+/g, " ")
                  .trim();
              },
            })}
            placeholder="Enter carpet area (e.g., 1950 or 1000 - 2000)"
          />
          {errors.carpet_area && (
            <p className="text-red-500 text-sm mt-1">
              {errors.carpet_area.message}
            </p>
          )}
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Bedrooms
          </label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            {...register("bedrooms", {
              required: "Number of bedrooms is required",
              min: 1,
            })}
            placeholder="Enter number of bedrooms"
          />
          {errors.bedrooms && (
            <p className="text-red-500 text-sm mt-1">
              {errors.bedrooms.message}
            </p>
          )}
        </div>

        {/* Bathrooms */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Bathrooms
          </label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            {...register("bathrooms", {
              required: "Number of bathrooms is required",
              min: 1,
            })}
            placeholder="Enter number of bathrooms"
          />
          {errors.bathrooms && (
            <p className="text-red-500 text-sm mt-1">
              {errors.bathrooms.message}
            </p>
          )}
        </div>

        {/* Status */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            {...register("status", { required: "Status is required" })}
          >
            {["UnderConstruction", "ReSell", "Ready to Move"].map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          {errors.status && (
            <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
          )}
        </div>

        {/* Possession */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Possession
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            {...register("possession", {
              required: "Possession date is required",
              pattern: {
                value:
                  /^(January|February|March|April|May|June|July|August|September|October|November|December)-\d{4}$/,
                message: "Enter a valid possession date (e.g., June-2024)",
              },
              onChange: (e) => {
                e.target.value = e.target.value
                  .replace(/[^a-zA-Z0-9-]/g, "")
                  .replace(/([a-zA-Z]+)-/g, "$1-")
                  .trim();
              },
              onBlur: (e) => {
                const value = e.target.value;
                if (
                  !/^(January|February|March|April|May|June|July|August|September|October|November|December)-\d{4}$/.test(
                    value
                  )
                ) {
                  setError("possession", {
                    type: "manual",
                    message: "Enter a valid possession date (e.g., June-2024)",
                  });
                }
              },
            })}
            placeholder="Enter possession date (e.g., June-2024)"
          />
          {errors.possession && (
            <p className="text-red-500 text-sm mt-1">
              {errors.possession.message}
            </p>
          )}
        </div>

        {/* Amenities */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Amenities (comma-separated)
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            {...register("amenities", { required: "Amenities are required" })}
            placeholder="Enter amenities (e.g., Gym, Pool, Parking)"
          />
          {errors.amenities && (
            <p className="text-red-500 text-sm mt-1">
              {errors.amenities.message}
            </p>
          )}
        </div>

        {/* Featured Image */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Featured Image URL
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            {...register("featured_image", {
              required: "Featured image is required",
            })}
            placeholder="Enter featured image URL"
          />
          {errors.featured_image && (
            <p className="text-red-500 text-sm mt-1">
              {errors.featured_image.message}
            </p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            {...register("address", { required: "Address is required" })}
            placeholder="Enter full address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* Furnishing */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Furnishing
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            {...register("furnishing", {
              required: "Furnishing status is required",
            })}
          >
            {["Fully Furnished", "Semi Furnished", "Unfurnished"].map(
              (furnishing) => (
                <option key={furnishing} value={furnishing}>
                  {furnishing}
                </option>
              )
            )}
          </select>
          {errors.furnishing && (
            <p className="text-red-500 text-sm mt-1">
              {errors.furnishing.message}
            </p>
          )}
        </div>

        {/* Availability Status */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Availability Status
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
            {...register("availability_status", {
              required: "Availability Status is required",
            })}
          >
            <option value="" disabled>
              Select availability status
            </option>
            {["Available", "Sold"].map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          {errors.availability_status && (
            <p className="text-red-500 text-sm mt-1">
              {errors.availability_status.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full p-3 bg-primary text-white font-medium rounded-md hover:bg-primary transition duration-300"
          >
            Submit Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
