import Heading from "./_components/Heading";
import Heroes from "./_components/Heroes";

export default function MarketingPage() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-4 flex-1 px-4 md:px-14 sm:px-6 pb-10">
        <Heading/>
        <Heroes/>
      </div>
    </div>
  );
}
