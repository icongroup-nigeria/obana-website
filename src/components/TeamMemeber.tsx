const TeamSlider = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Hiring Section */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold">We're Hiring!</h3>
        <p className="text-lg text-gray-600 mb-4">
          Join our dynamic team and make an impact.
        </p>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          Open Positions
        </button>
      </div>
    </div>
  );
};

export default TeamSlider;
