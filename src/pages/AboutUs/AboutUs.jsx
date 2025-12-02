import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto mt-[100px] p-5 md:p-10">
      {/* Top Section */}
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-4xl text-primary md:text-5xl font-bold">About Us</h1>
        <p className="md:text-lg">
          We are dedicated to providing the best care for your furry friends.
          With love, passion, and experience — your pet’s happiness is our top
          priority.
        </p>
      </div>

      {/* Image & Text Left-Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.pexels.com/photos/5732471/pexels-photo-5732471.jpeg"
            alt="Pet Care"
            className="rounded-xl shadow-lg w-full h-[350px] object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Who We Are ?</h2>
          <p className="leading-relaxed">
            We are a team of trained pet lovers providing premium services such
            as pet sitting, grooming, training, and home visits. Our mission is
            to ensure your pet gets the love and care they deserve — even when
            you’re away.
          </p>
          <p className="leading-relaxed">
            With years of experience, certified caretakers, and a passion for
            animals, we guarantee a safe and friendly environment for your pets.
            Your pet’s comfort and well-being are always our first priority.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mission */}
        <div className="card bg-base-200 shadow-xl p-6 space-y-3">
          <h3 className="text-xl font-bold">Our Mission</h3>
          <p className="">
            To provide reliable, high-quality, and loving pet care services that
            ensure pets feel safe, happy, and cared for at all times.
          </p>
        </div>

        {/* Vision */}
        <div className="card bg-base-200 shadow-xl p-6 space-y-3">
          <h3 className="text-xl font-bold">Our Vision</h3>
          <p className="">
            To become the most trusted pet care service by offering exceptional
            experiences, comfort, and peace of mind to every pet owner.
          </p>
        </div>

        {/* Values */}
        <div className="card bg-base-200 shadow-xl p-6 space-y-3">
          <h3 className="text-xl font-bold">Our Values</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>Love & Compassion</li>
            <li>Safety & Trust</li>
            <li>Professional Care</li>
            <li>Honesty & Transparency</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
