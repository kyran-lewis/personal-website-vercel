import UoS from "../assets/university-of-sheffield.png";
import FlowGroup from "../assets/flow-group.png";
import Velociti from "../assets/velociti.png";
import DFHStats from "../assets/dfh-stats.png";
import DFHDocsAndVideos from "../assets/dfh-docs-videos.png";
import Spotlight from "../components/Spotlight";
import SubSection from "../components/SubSection";
import TimelineEntry from "../components/TimelineEntry";
import ExperienceEntry from "../components/ExperienceEntry";
import EducationEntry from "../components/EducationEntry";
import List from "../components/List";

function ExperiencePage() {
  const DFH_RELEASE_2_17_0 = [
    "**Analytics Data Containers**: Rolled out interactive telemetry layouts presenting responsive visual graph nodes alongside tabular total data summaries.",
    "**Tracking Mechanisms**: Programmed live validation widgets tracking authorization actions and checking user acknowledgment cycles.",
    "**Dashboard Refactoring**: Updated historical document feeds and table elements for real-time asset visibility.",
  ];

  const DFH_RELEASE_2_14_0 = [
    "**Capacity improvements**",
    "**Increased system resilience**",
    "**Enhanced security**",
    "**Reduced downtime for future maintenance windows**",
  ];

  return (
    <main className="w-full min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-black text-gray-900 mb-12 text-center tracking-tight">
          Experience and Qualifications
        </h1>

        <div className="space-y-12">
          <ExperienceEntry
            company="Flow Group"
            role="Full Stack Developer"
            logo={FlowGroup}
            logoAlt="Flow Group Logo"
          >
            <div className="space-y-10">
              <SubSection
                title=" Accredify Pro / Quality Management System"
                summary="Engineered robust enterprise subsystems focusing heavily on
                    interactive dynamic form building frameworks, asset tracking
                    documentation pipelines, and real-time worker compliance
                    systems."
              >
                <h4 className="text-md font-black text-gray-900 mb-2">
                  Achievements:
                </h4>
                <Spotlight
                  title="TypeScript Migration"
                  description="Orchestrated an incremental scale codebase migration from
                      legacy JavaScript architecture over to strict TypeScript.
                      Refactored high-traffic UI components to capture layout
                      exceptions at compile-time and drastically cut production
                      errors."
                />
                <Spotlight
                  title="Schema-driven UI Frameworks"
                  description="Architected custom client-side generation layers parsing
                      recursive JSON payloads down into complex data-validation
                      capture controls. Empowered external teams to dynamically
                      construct brand new workflow views straight from back-end
                      logic shifts."
                />
                <Spotlight
                  title="Vitest, Jest & Cypress E2E Testing"
                  description="Established modern test suites pairing isolated unit tests
                      via Vitest/Jest with end-to-end integration journeys using
                      Cypress. Protected regression lines for vital application
                      areas including multi-step data wizard components."
                />
              </SubSection>

              {/* Receipts Tracker Section */}
              <SubSection
                title="Receipt Tracking System"
                summary="Developed an independent utility built straight upon native
                    browser engines with no modern framework layer dependencies.
                    Designed structural components parsing financial tracking
                    fields, raw event listeners, and local state management layers
                    to maximize performance."
                focus="Vanilla Software Engineering / Performance Architecture"
              />
              <SubSection
                title="Meeting Booking System"
                summary="Engineered an enterprise booking matrix module centered around
                  layout availability and calendar scheduling constraints.
                  Solved time zone conversion disparities and optimized render
                  lifecycle hooks inside custom React Big Calendar integrations."
                focus="Complex Event Hooks / State Synchronization"
              />
            </div>
          </ExperienceEntry>

          <ExperienceEntry
            company="Velociti Solutions"
            note="formerly 3Squared"
            role="Quality Assurance Engineer"
            logo={Velociti}
            logoAlt="Velociti Solutions Logo"
          >
            <SubSection
              title="Docs, Forms, Hub (DFH)"
              summary="Contributed to high-availability corporate core platforms.
                Managed rigorous functional layout diagnostics, accessibility
                reviews, network telemetry evaluations, and infrastructure loads
                to guarantee system operation under peak application strain."
            >
              <TimelineEntry number="2.17.0" category="UI Update">
                <p className="text-sm text-gray-600 leading-relaxed">
                  This deployment focused heavily on visual analytic
                  modernizations, turning rigid telemetry grids into dynamic
                  dashboards. Detailed system implementations:
                </p>

                <List items={DFH_RELEASE_2_17_0} />

                <div className="space-y-6 mt-6">
                  <div className="bg-gray-100 border border-gray-300 rounded-xl shadow-inner overflow-hidden">
                    <img
                      src={DFHStats}
                      alt="DFH v2.17.0 Stats Component"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="bg-gray-100 border border-gray-300 rounded-xl shadow-inner overflow-hidden">
                    <img
                      src={DFHDocsAndVideos}
                      alt="DFH v2.17.0 Latest Documents and Videos tables"
                      className="w-full object-cover "
                    />
                  </div>
                </div>

                <div className="pt-2 pb-4">
                  <a
                    href="https://support.velociti-solutions.com/hc/en-us/articles/4907359904786-Docs-Forms-Hub-v2-17-0-24-May-2022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-amber-600 hover:text-amber-800 transition group"
                  >
                    Read Release Notes{" "}
                    <span className="ml-1 transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>
              </TimelineEntry>

              <TimelineEntry number="2.14.0" category="Infrastructure">
                <p className="text-sm text-gray-600 leading-relaxed">
                  The work carried out in this release of DFH brought a host of
                  benefits such as:
                </p>

                <List items={DFH_RELEASE_2_14_0} />

                <div className="pt-2">
                  <a
                    href="https://support.velociti-solutions.com/hc/en-us/articles/4526633124626-DFH-v2-14-0-Infrastructure-Maintenance-05-Mar-2022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-amber-600 hover:text-amber-800 transition group"
                  >
                    Read Release Notes{" "}
                    <span className="ml-1 transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>
              </TimelineEntry>
            </SubSection>
          </ExperienceEntry>

          <EducationEntry
            logo={UoS}
            logoAlt="University of Sheffield Logo"
            institution="University of Sheffield"
            degree="BSc Computer Science With Year In Industry"
            summary="                Gained deep theoretical knowledge across modern computation
                matrices, compiler designs, advanced algorithms, database
                methodologies, and software patterns while matching real-world
                demands via professional placement pipelines."
            grade="First-Class Honours"
          />
        </div>
      </div>
    </main>
  );
}

export default ExperiencePage;
