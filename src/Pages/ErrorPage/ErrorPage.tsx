import { Link, useLocation } from "react-router-dom";
import { MainLayout } from "../../layouts/MainLayout";

const ErrorPage = () => {
  const location = useLocation();

  let errorMessage = location.state?.errorMessage;
  return (
    <MainLayout>
      <div
        data-testid="error-page"
        className="min-h-screen flex flex-grow items-center justify-center bg-gray-50"
      >
        <div className="rounded-lg bg-white p-8 text-center shadow-xl">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="text-gray-600">
            {errorMessage === undefined
              ? "Oops! The page you are looking for could not be found."
              : `${errorMessage}`}
          </p>
          <Link
            className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
            to="/"
          >
            {" "}
            Go back to Home{" "}
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default ErrorPage;
