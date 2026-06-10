import PortalFooter from "@/components/PortalFooter";
import PortalHeader from "@/components/PortalHeader";
import TraineeMarkSheet from "@/pages/TraineeMarkSheet";
<script>
  atOptions = {
    'key' : '7d56bcd58dbf542f6ecdea328142a965',
    'format' : 'iframe',
    'height' : 60,
    'width' : 468,
    'params' : {}
  };
</script>
<script src="https://www.highperformanceformat.com/7d56bcd58dbf542f6ecdea328142a965/invoke.js"></script>
  
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
