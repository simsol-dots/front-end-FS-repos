
export default function ProfileCard() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-lg transition-shadow hover:shadow-xl">
        {/* Profile Image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7akOjBI95n5CWepEIzJ0gtQE6xVMLrUn8mnJAjkuypw&s=10"
          alt="Profile"
          className="mx-auto h-28 w-28 rounded-full border-4 border-white object-cover shadow-md"
        />

        {/* Profile Information */}
        <h1 className="mt-5 text-2xl font-bold text-gray-900">
          John Doe
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          john.doe@example.com
        </p>

        <div className="mt-5 rounded-xl bg-gray-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            User ID
          </p>
          <p className="mt-1 font-medium text-gray-800">
            USR-001
          </p>
        </div>

        {/* Action Button */}
        <button
          type="button"
          className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          View Profile
        </button>
      </div>
    </div>
  );
}
