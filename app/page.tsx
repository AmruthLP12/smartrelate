import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <Link href="/login">
        <p>Go to About Page</p>
      </Link>
    </div>
  );
};

export default Home;
