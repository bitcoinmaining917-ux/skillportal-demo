import PortalFooter from "@/components/PortalFooter";
import PortalHeader from "@/components/PortalHeader";
import TraineeMarkSheet from "@/pages/TraineeMarkSheet";

  
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0f0]">
      <PortalHeader />
      <main id="main-content" className="flex-1 bg-[#f0f0f0]">
        <TraineeMarkSheet />
      </main>
      <PortalFooter />
    </div>
  );
}
