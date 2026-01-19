interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Garment Merchandising",
    description: "Expertise in Tech Packs, T&A, Costing, Fabric Consumption, Lab-Dips, Strike-offs, and end-to-end Production (Marker to Shipment).",
    icon: "astro_dark" 
  },
  {
    name: "Microsoft Excel",
    description: "Advanced proficiency for Quantity Breakdowns, Packing Lists, and Cost Sheets.",
    icon: "file-excel-2-line"
  },
  {
    name: "ERP Systems",
    description: "Experience managing order lifecycles and inventory within Enterprise Resource Planning software.",
    icon: "computer-line"
  },
];

export default hardSkills;
