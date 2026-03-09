import AboutSection from "./(home)/components/About/About";
import Hero from "./(home)/components/Hero/Hero";
import LatestListingsSection from "./(home)/components/LatestListings/LatestListings";
import WorkspaceDetailsSection from "./(home)/components/WorkspaceDetails/WorkspaceDetailsSection";

export default function Page() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <LatestListingsSection />
      <WorkspaceDetailsSection />
    </main>
  );
}
