import { useState } from "react";

import TypeScript from "../assets/typescript.png";
import JavaScript from "../assets/javascript.jpg";
import React from "../assets/react.svg";
import PHP from "../assets/php.svg";
import Node from "../assets/node.svg";
import Ubuntu from "../assets/ubuntu.png";
import Git from "../assets/git.png";
import Postman from "../assets/postman.png";
import Jest from "../assets/jest.svg";
import Cypress from "../assets/cypress.svg";
import Docker from "../assets/docker.png";
import Apache from "../assets/apache.png";
import MySQL from "../assets/mysql.png";
import Tailwind from "../assets/tailwind.png";
import Badge from "../components/Badge";
import SmallCard from "../components/SmallCard";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

function HomePage() {
  return (
    <main>
      <section className="flex items-center justify-evenly text-center">
        <div className="container w-full flex flex-col justify-center items-center">
          <Hero />
          <section className="py-4">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
                How I Work:
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1: QA/Testing */}
                <SmallCard
                  icon="🧪"
                  title="QA-Engineered Core"
                  description="I have a year of experience working as a quality assurance
                    engineer which has instilled a test driven mindset into me.
                    Quality, predictability and reliability are the core values
                    that guide my work."
                />

                {/* Card 2: Tech Stack Versatility */}
                <SmallCard
                  icon="🗄️"
                  title="Full-Stack Capability"
                  description="Seamlessly bridging frontend reactivity with secure backend
                    architecture. Experienced in React, Node, PHP, and
                    relational database design."
                />

                {/* Card 3: Academic Background */}
                <SmallCard
                  icon="🎓"
                  title="First-Class Foundation"
                  description="Computer Science graduate from the University of Sheffield
                    with First-Class Honours. Strong understanding of
                    fundamentals applied to real-world products."
                />
              </div>
            </div>
          </section>

          <section className="py-4 mb-4">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
              Tech Stack:
            </h2>

            <h2 className="text-2xl mb-2 font-semibold">
              Frontend Development:
            </h2>
            <div className="container flex flex-wrap justify-center mt-4 mb-4">
              <Badge name="TypeScript" image={TypeScript} />
              <Badge name="JavaScript" image={JavaScript} />
              <Badge name="React" image={React} width={15} />
              <Badge name="Tailwind" image={Tailwind} width={15} />
            </div>

            <h2 className="text-2xl mb-2 font-semibold">
              Backend Development:
            </h2>
            <div className="container flex flex-wrap justify-center mt-4 mb-4">
              <Badge name="PHP" image={PHP} width={20} />
              <Badge name="Apache" image={Apache} width={5} height={10} />
              <Badge name="Node" image={Node} width={15} height={10} />
              <Badge name="MySQL" image={MySQL} />
            </div>

            <h2 className="text-2xl mb-2 font-semibold">
              Testing Automation (QA):
            </h2>
            <div className="container flex flex-wrap justify-center mt-4 mb-4">
              <Badge name="Jest" image={Jest} />
              <Badge name="Cypress" image={Cypress} />
              <Badge name="Postman" image={Postman} />
            </div>

            <h2 className="text-2xl mb-2 font-semibold">
              Development Workflow and DevOps:
            </h2>
            <div className="container flex flex-wrap justify-center mt-4 mb-4">
              <Badge name="Linux (Ubuntu)" image={Ubuntu} />
              <Badge name="Git" image={Git} />
              <Badge name="Docker" image={Docker} />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
