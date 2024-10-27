import PropTypes from "prop-types";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-sm sm:text-base md:text-lg px-4 text-gray-500">
        {text1}{" "}
        <span className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">
          {text2}
        </span>
      </p>
    </div>
  );
};

Title.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

export default Title;
