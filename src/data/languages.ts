interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Bangla",
        level: "Native",
        description: "I speak fluently and write fluently",
        show: true
    },
    {
        name: "English",
        level: "Bilingual",
        description: "I speak fluently and write fluently",
        show: true
    },
    
];

export default languages;
