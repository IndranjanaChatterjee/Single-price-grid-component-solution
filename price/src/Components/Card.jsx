import React from "react";

export default function Card() {
  return (
    <section className=" flex flex-col justify-center items-center  rounded-[0.5rem] sha m-[0.5rem]">
      <div className="bg-[#ffffff]  h-[50%] sm:w-[40rem] w-[20rem] p-[2.5rem] rounded-t-[0.5rem] ">
        <h1 className="text-[#3caba9] font-bold text-[1.5rem] mb-[1rem]">
          Join our community
        </h1>

        <p className="text-[#bfdf32] font-bold mb-[0.5rem]">
          30-day, hassle-free money back guarantee
        </p>

        <p className="text-[#838385] ">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center flex-wrap md:flex-nowrap h-[50%]">
        <div className="bg-[#2bb3b1] w-[20rem] h-[15.5rem] p-[2.5rem] text-[#ffffff] sm:rounded-bl-[0.5rem]">
          <h1 className="mb-[1rem] text-[1.2rem] font-semibold">
            Monthly Subscription
          </h1>

          <div className="flex flex-row justify-start items-center gap-[1rem]">
            <p className="font-bold text-[1.5rem]">$29</p>{" "}
            <p className="text-[#7bdfe0]">per month</p>
          </div>

          <p className="mb-[1.3rem]">Full access for less than $1 a day</p>

          <button className="bg-[#bfdf32] w-full cursor-pointer rounded-[0.5rem] h-[3rem] text-center font-bold">
            Sign Up
          </button>
        </div>

        <div className="bg-[#4abebd] w-[20rem] h-[15.5rem] p-[2.5rem] text-[#ffffff] rounded-br-[0.5rem] rounded-bl-[0.5rem] sm:rounded-bl-[0rem]">
          <h1 className="font-bold mb-[1rem] text-[1.1rem]">Why Us</h1>

          <p className="text-[#aff5f5] text-[1rem]">
            Tutorials by industry experts Peer &amp; expert code review Coding
            exercises Access to our GitHub repos Community forum Flashcard decks
            New videos every week
          </p>
        </div>
      </div>
    </section>
  );
}
