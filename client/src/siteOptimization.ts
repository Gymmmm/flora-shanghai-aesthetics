export const floraSiteOptimization = {
  hero: {
    useShanghaiVideo: true,
    videoSrc: "/images/hero-video.mp4",
    fallbackImage: "/images/hero.jpg",
    eyebrow: "Shanghai · International Patient Care",
    title: "Still You. Just Refined.",
    body: "Aesthetic and plastic surgery care in Shanghai for international patients seeking thoughtful, personalized care.",
    primaryCta: { label: "Start a Private Inquiry", href: "/consultation" },
    secondaryCta: { label: "Why Shanghai", href: "/why-shanghai" }
  },
  trust: {
    allowUnverifiedCredentials: false,
    allowUnverifiedDoctorBadges: false,
    allowUnstaffedResponsePromises: false
  }
} as const;
