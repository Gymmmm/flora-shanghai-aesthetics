import { useEffect, useState } from "react";
import { trpc } from "@/lib/trpc";
import { track } from "@/lib/analytics";

export function FloatingContactButtons() {
  const [showButtons, setShowButtons] = useState(false);
  const { data: buttons, isLoading } = trpc.floatingContactButtons.list.useQuery();

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading || !buttons || buttons.length === 0) {
    return null;
  }

  return (
    <div className={`floating-contact-buttons ${showButtons ? 'visible' : ''}`}>
      {buttons.map((button) => (
        <a
          key={button.id}
          href={button.linkUrl}
          className="floating-contact-button"
          onClick={() => track("click_contact_button", { platform: button.platformType })}
          aria-label={button.tooltipText || button.displayText || `Contact via ${button.platformType}`}
          title={button.tooltipText || button.displayText || undefined}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={button.iconUrl} alt={button.platformType} />
          {button.displayText && <span className="button-text">{button.displayText}</span>}
        </a>
      ))}
    </div>
  );
}
