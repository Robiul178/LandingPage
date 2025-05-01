export default function CourseCard({
  title,
  duration,
  image,
  level,
  instructor,
  description,
  buttonText,
}) {
  return (
    <div className="bg-[#EFEFF0] max-w-[705px] rounded-lg  overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="lg:p-[50px] p-5">
        <div>
          <img
            src={image}
            alt={title}
            className="w-[605px] h-[380px] object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-between gap-2 items-start my-3">
          <div className="flex items-center gap-2">
            <span className="inline-block bg-white text-sm px-2 py-1 rounded mr-2">
              {duration}
            </span>
            <span className="inline-block bg-white text-sm px-2 py-1 rounded">
              {level}
            </span>
          </div>
          <p className=" lg:text-lg text-sm">By {instructor}</p>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-[18px] mb-4">{description}</p>

        <button className="w-full bg-[#012869]  text-white py-2 px-4 rounded-md transition-colors duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
