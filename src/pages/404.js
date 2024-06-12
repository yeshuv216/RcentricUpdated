import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="min-h-[80vh] flex justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        <h1>The page you are looking for does not exist</h1>
        <Link href="/" className="cta">
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
