const ProgressBar = ({ progressPercentage, progressName }) => {
  return (
    <div className="h-1 w-full bg-gray-300 mb-10">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full ${
          progressPercentage < 70 ? "bg-red-600" : "bg-green-600"
        }`}
      ></div>
      <p className="text-center">{progressName}</p>
    </div>
  );
};

export default ProgressBar;
