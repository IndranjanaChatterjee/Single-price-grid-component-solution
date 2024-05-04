import React from "react";

export default function Card() {
  return (
    <section className="bg-red-300 flex flex-col justify-center items-center ">
      <div className="bg-blue-500  h-[50%] sm:w-[40rem] w-[20rem] p-[2.5rem]">
        <h1>Join our community</h1>

        <p className="">30-day, hassle-free money back guarantee</p>

        <p>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center flex-wrap md:flex-nowrap h-[50%]">
        <div className="bg-red-500 w-[20rem] h-[15.5rem] p-[2.5rem]">
          <h1>Monthly Subscription</h1>

          <div className="flex flex-row justify-start items-start gap-[1rem]">
            &dollar;29 <p className="text-green-300">per month</p>
          </div>

          <p>Full access for less than &dollar; 1 a day</p>

          <button>Sign Up</button>
        </div>
       
      <div className="bg-green-500 w-[20rem] h-full p-[2.5rem]">
        <h1>Why Us</h1>

        <p>
          Tutorials by industry experts Peer &amp; expert code review Coding
          exercises Access to our GitHub repos Community forum Flashcard decks
          New videos every week
        </p>
      </div>
      </div>
    </section>
  );
}
