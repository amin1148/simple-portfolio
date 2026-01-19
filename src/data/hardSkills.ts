interface HardSkill {
  name: string;
  description: string;
  icon: string;
  category: "Garment Tech" | "Software & Tools"; 
}

const hardSkills: HardSkill[] = [
  // --- Garment Tech ---
  {
    name: "Garment Merchandising",
    description: "Expertise in Tech Packs, T&A, Costing, Fabric Consumption, Lab-Dips, and end-to-end Production.",
    icon: "astro_dark", // Reverted to the default icon so the build passes
    category: "Garment Tech"
  },

  // --- Software & Tools ---
  {
    name: "Microsoft Excel",
    description: "Advanced proficiency for Quantity Breakdowns, Packing Lists, and Cost Sheets.",
    icon: "file-excel-2-line",
    category: "Software & Tools"
  },
  {
    name: "ERP Systems",
    description: "Experience managing order lifecycles and inventory within Enterprise Resource Planning software.",
    icon: "computer-line",
    category: "Software & Tools"
  }
];

export default hardSkills;
