/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
    title: "Assistant Merchandiser", 
    startDate: "2025-02-06",
    company: "Marma Composite Ltd",
    location: "Ashulia, Dhaka",
    description: "Key account management for Knit Garments, specifically handling European buyers (ALDI, KIK).",
    goals: [
        "Coordinate sample stages (Lab-Dip, Strike-off, PP Sample) to ensure timely buyer approvals.",
        "Assist in preparing Costing sheets, Consumption bookings, and T&A plans.",
        "Monitor daily production status across Knitting, Dyeing, and Sewing to prevent shipment delays."
    ],
    currentJob: true,
},
    {
    title: "Industrial Trainee", 
    startDate: "2025-01-01",
    endDate: "2025-02-05", // Ends right before your new job starts
    company: "Apex Holdings Ltd",
    location: "Shafipur, Gazipur", // Corrected spelling from 'Shofipur'
    description: "Intensive industrial attachment at one of Bangladesh's leading vertical composite factories.",
    goals: [
        "Gained practical exposure to the full vertical production cycle: Knitting, Dyeing, Finishing, and Sewing.",
        "Analyzed production floor layout, line balancing, and quality assurance workflows.",
        "Studied department-wise operations including Yarn Store, Cutting, and Merchandising coordination."
    ],
    currentJob: false,
},
];
export default workExperience;
