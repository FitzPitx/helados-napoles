import InstagramFloating from "@/components/InstagramFloating";
import WhatsappFloating from "@/components/WhatsappFloating";

export default function FloatingActions() {
  return (
    <div className="floating-actions">
      <InstagramFloating />
      <WhatsappFloating />
    </div>
  );
}