import React from "react";
import Link from "next/link";
import './style.css'

const ComingSoon = () => {
  return (
    <>
      <section className="page">
        <div className="page__content">
          <h1
            style={{
              fontFamily: "Futura Md BT",
              fontWeight: "normal",
              color: "red",
            }}
          >
            Coming Soon...
          </h1>

          <Link href={'/'}>
                        <button className='mr-10 w-[130px] h-[50px] border border-secondary text-secondary text-sm'>
                          Home Page
                        </button>
                      </Link>
        </div>
      </section>
    </>
  );
};

export default ComingSoon;
