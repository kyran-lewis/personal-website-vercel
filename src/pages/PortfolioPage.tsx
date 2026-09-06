import SmallCard from "../components/SmallCard";
import EmailForm from "../components/EmailForm";
import PortfolioEntry from "../components/PortfolioEntry";
import SubSection from "../components/SubSection";
import Spotlight from "../components/Spotlight";
import ReactLogo from "../assets/react.png";

function PortfolioPage() {
  return (
    <main className="w-full min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-black text-gray-900 mb-12 text-center tracking-tight">
          Portfolio and Projects
        </h1>

        <div className="space-y-12">
          <PortfolioEntry name="Random Musical Note Generator">
            <div className="space-y-10">
              <Spotlight
                title="Countdown Timer"
                description="Variable countdown timer, set to any duration you want. Click to pause. Nice animation."
              />
              <Spotlight
                title="Playing Audio"
                description="Select from array of audio files. Can narrow it down to subsets of notes e.g. natural notes, only flats, etc. "
              />
              {/* <img src={ReactLogo} /> */}
              <Spotlight
                title="Future Goal - Multi instrument audio"
                description="Selection of different audio libraries for a variety of instruments e.g. guitar, trumpet, etc. 
                Could include synthetic sounds or just add more recorded sound files."
              />
              <Spotlight
                title="Future Goal - Generate More Notes"
                description="Instead of simply generating one note, generator 2 or 3 notes. These would then play in sequence once
                the timer has elaspsed. "
              />
            </div>
          </PortfolioEntry>
        </div>
      </div>
    </main>
  );
}

export default PortfolioPage;
