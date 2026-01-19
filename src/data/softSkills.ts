interface SoftSkill {
  name: string;
  icon: string;
}

const softSkills: SoftSkill[] = [
  {
    name: "Problem Solving",
    icon: "tools-fill"
  },
  {
    name: "Communication",
    icon: "message-2-fill"
  },
  {
    name: "Negotiation", // Crucial for costing and timelines
    icon: "shake-hands-fill"
  },
  {
    name: "Time Management",
    icon: "time-fill"
  },
  {
    name: "Team Player",
    icon: "group-fill"
  },
  {
    name: "Attention to Detail", // Vital for Tech Packs and Quality
    icon: "eye-fill"
  },
  {
    name: "Adaptability", // For sudden changes in trends or production issues
    icon: "refresh-fill"
  },
  {
    name: "Email Proficiency",
    icon: "mail-send-fill" // Updated icon name to be more specific
  }
];

export default softSkills;
