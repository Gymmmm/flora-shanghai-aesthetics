import { useEffect, useState } from "react";
import { trpc } from "@/lib/trpc";
import { track } from "@/lib/analytics";
import { contact } from "@/data/site";

const WHATSAPP_ICON =
  "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

const INSTAGRAM_ICON =
  "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png";

function defaultContactButtons() {
  const buttons: Array<{
    id: string;
    platformType: string;
    iconUrl: string;
    linkUrl: string;
    displayText: string;
    tooltipText: string;
  }> = [];
  const digits = digitsOnly(contact.whatsapp || "");
  if (digits) {
    buttons.push({
      id: "default-whatsapp",
      platformType: "WhatsApp",
      iconUrl: WHATSAPP_ICON,
      linkUrl: `https://wa.me/${digits}`,
      displayText: "",
      tooltipText: "WhatsApp (24h response)",
    });
  }
  const ig = String(contact.instagram || "").replace(/^@/, "").trim();
  if (ig) {
    buttons.push({
      id: "default-instagram",
      platformType: "Instagram",
      iconUrl: INSTAGRAM_ICON,
      linkUrl: `https://instagram.com/${ig}`,
      displayText: "",
      tooltipText: `Instagram @${ig}`,
    });
  }
  return buttons;
}

export function FloatingContactButtons() {
  const [showButtons, setShowButtons] = useState(false);
  const { data: buttons, isLoading, error } = trpc.floatingContactButtons.list.useQuery();

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prefer DB-configured buttons; when DB is empty/unavailable, fall back to site.ts WhatsApp.
  const resolved =
    !isLoading && !error && buttons && buttons.length > 0
      ? buttons
      : !isLoading
        ? defaultContactButtons()
        : [];

  if (resolved.length === 0) {
    return null;
  }

  return (
    <div className={`floating-contact-buttons ${showButtons ? "visible" : ""}`}>
      {resolved.map((button: any) => (
        <a
          key={button.id}
          href={button.linkUrl}
          className="floating-contact-button"
          onClick={() => track("contact_button_click", { platform: button.platformType })}
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
