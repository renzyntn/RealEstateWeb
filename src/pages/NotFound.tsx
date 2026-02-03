import { Link } from "react-router";

function NotFound() {
  return (
    <section className="max-w-screen">
      <div className="w-full h-screen flex flex-col justify-center items-center px-4 py-6">
        <div className="flex flex-col justify-center items-center text-center gap-4 md:gap-6 font-montserrat">
          <h2 className="font-bold text-2xl md:text-4xl">
            404 - Page Not Found
          </h2>
          <p className="text-base md:text-xl">
            The page you were looking for does not exist.
          </p>
          <Link
            to="/"
            className="btn btn-sm md:btn-md lg:btn-lg rounded-full border-none bg-black text-white font-light"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
export default NotFound;
